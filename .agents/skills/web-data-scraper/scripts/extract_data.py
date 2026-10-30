"""
Robust Web Scraper & Structured Data Extractor
Extracts tables, metadata, and structured text from HTML web pages.
"""

import sys
import json
import argparse
import urllib.request
from bs4 import BeautifulSoup


def scrape_url(url, output_file=None):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    }
    req = urllib.request.Request(url, headers=headers)
    
    try:
        with urllib.request.urlopen(req, timeout=15) as response:
            html = response.read().decode("utf-8", errors="ignore")
    except Exception as e:
        print(f"Error fetching URL: {e}", file=sys.stderr)
        return None

    soup = BeautifulSoup(html, "html.parser")

    # Extract title
    title = soup.title.string.strip() if soup.title else ""

    # Extract all tables as structured datasets
    tables_data = []
    for table in soup.find_all("table"):
        table_rows = []
        for tr in table.find_all("tr"):
            cells = [td.get_text(strip=True) for td in tr.find_all(["th", "td"])]
            if cells:
                table_rows.append(cells)
        if table_rows:
            tables_data.append(table_rows)

    # Extract main text paragraphs
    paragraphs = [p.get_text(strip=True) for p in soup.find_all("p") if len(p.get_text(strip=True)) > 20]

    result = {
        "url": url,
        "title": title,
        "tables_count": len(tables_data),
        "tables": tables_data,
        "paragraphs": paragraphs[:30],
    }

    if output_file:
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(result, f, ensure_ascii=False, indent=2)
        print(f"Data saved to {output_file}")
    else:
        print(json.dumps(result, ensure_ascii=False, indent=2))

    return result


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Web Data Scraper")
    parser.add_argument("--url", help="Target URL to scrape", default="https://news.ycombinator.com")
    parser.add_argument("--output", help="Output JSON path", default=None)
    args = parser.parse_args()

    scrape_url(args.url, args.output)
