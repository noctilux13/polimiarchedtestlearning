---
name: web-data-scraper
description: >-
  Extracts structured data, articles, tables, financial metrics, and catalogs from websites using
  BeautifulSoup, Playwright, or requests. Handles pagination, dynamic rendering, and data export
  to JSON/CSV/Excel. Activate when the user asks to scrape data, extract web content, gather tabular
  data from URLs, or build a web scraper.
---

# Web Data Scraper & Extractor Skill

This skill provides reliable, production-ready data extraction pipelines for crawling web pages, parsing HTML DOM structures, handling dynamic JavaScript-rendered pages, and exporting structured datasets (JSON, CSV, Excel).

## Core Data Extraction Workflow

1. **Inspect & Choose Engine**:
   - **Static Pages / Fast HTTP**: Use `requests` / `httpx` + `BeautifulSoup4` or `lxml` for high throughput.
   - **JavaScript SPAs / Dynamic Content**: Use `playwright` or `browser` tools.
   - **API Interception**: Check Network tab for underlying JSON endpoints (prefer direct API endpoints over scraping HTML).

2. **Clean & Parse Output**:
   - Strip extra whitespace, clean raw text, normalize dates and currencies.
   - Extract metadata (title, author, timestamp, source URL).
   - Convert HTML tables directly into Pandas DataFrames or structured JSON lists.

3. **Data Integrity & Export**:
   - Save parsed items into structured formats (`.json` or `.csv`).
   - Implement rate-limiting (`time.sleep(1)`) to respect target server limits.

---

## Python Helper Script

A general-purpose extraction script is available in:
- [extract_data.py](./scripts/extract_data.py)

Usage:
```bash
python scripts/extract_data.py --url "https://example.com/data" --output "output.json"
```
