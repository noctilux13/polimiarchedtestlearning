import fs from 'fs';
import path from 'path';
import assert from 'assert';

import { setupMockEnvironment, PROJECT_ROOT } from './e2e/test_runner.mjs';

setupMockEnvironment();

async function runBugReproductions() {
  console.log('\n================================================================');
  console.log('   Milestone M3 Challenger: Empirical Bug Reproduction Report   ');
  console.log('================================================================\n');

  const servicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
  const mod = await import('file:///' + servicePath.replace(/\\/g, '/'));

  const bugs = [];

  // Bug 1: executeSandboxedTool throws unhandled exception on BigInt / serialization failure
  console.log('--- Checking Bug 1: executeSandboxedTool Serialization Exception ---');
  let bug1Thrown = false;
  let bug1Error = null;
  try {
    // When non-JSON serializable primitive like BigInt is passed in params
    await mod.executeSandboxedTool('query_questions', { count: 10n });
  } catch (err) {
    bug1Thrown = true;
    bug1Error = err.message;
  }
  if (bug1Thrown) {
    console.log(`[CONFIRMED BUG 1] executeSandboxedTool rejected with unhandled throw: "${bug1Error}"`);
    console.log('  Expected: Returns { success: false, error: "..." } without unhandled promise rejection.');
    bugs.push({
      id: 'BUG-M3-01',
      severity: 'HIGH',
      title: 'executeSandboxedTool throws unhandled exception instead of safe failure object on serialization error',
      repro: 'executeSandboxedTool("query_questions", { count: 10n })',
      actual: `Throws ${bug1Error}`,
      expected: '{ success: false, error: ... }'
    });
  } else {
    console.log('[NOT REPRODUCED] Bug 1');
  }

  // Bug 2: handleDeterministicFallback throws TypeError on non-string input
  console.log('\n--- Checking Bug 2: handleDeterministicFallback TypeError on Non-String ---');
  let bug2Thrown = false;
  let bug2Error = null;
  try {
    await mod.handleDeterministicFallback(12345);
  } catch (err) {
    bug2Thrown = true;
    bug2Error = err.message;
  }
  if (bug2Thrown) {
    console.log(`[CONFIRMED BUG 2] handleDeterministicFallback rejected with: "${bug2Error}"`);
    console.log('  Expected: Returns fallback response safely for non-string prompts without throwing.');
    bugs.push({
      id: 'BUG-M3-02',
      severity: 'MEDIUM',
      title: 'handleDeterministicFallback throws TypeError when promptText is not a string (e.g. number or boolean)',
      repro: 'handleDeterministicFallback(12345)',
      actual: `Throws ${bug2Error}`,
      expected: 'Returns standard assistant fallback message'
    });
  } else {
    console.log('[NOT REPRODUCED] Bug 2');
  }

  // Bug 3: Natural language search keyword mangling
  console.log('\n--- Checking Bug 3: Natural Language Search Keyword Mangling ---');
  const searchTestCases = [
    { input: 'Find questions about Bauhaus', mustContain: '包豪斯' },
    { input: 'Questions about Caravaggio', mustContain: '卡拉瓦乔' },
    { input: 'Search for Mondrian', mustContain: '蒙德里安' },
    { input: '请搜索蒙德里安', mustContain: '蒙德里安' },
    { input: '帮我查找关于卡拉瓦乔的题目', mustContain: '卡拉瓦乔' }
  ];

  for (const tc of searchTestCases) {
    const res = await mod.handleDeterministicFallback(tc.input);
    const content = res.content || '';
    const failedMatch = content.includes('未检索到包含');
    if (failedMatch) {
      console.log(`[CONFIRMED BUG 3] Input "${tc.input}" failed to find existing artist! Response:\n  ${content.split('\n')[0]}`);
      bugs.push({
        id: 'BUG-M3-03',
        severity: 'HIGH',
        title: `Search keyword mangling causes 0 results for natural query "${tc.input}"`,
        repro: `handleDeterministicFallback("${tc.input}")`,
        actual: content.split('\n')[0],
        expected: `Should match questions containing ${tc.mustContain}`
      });
    } else {
      console.log(`[PASSED] "${tc.input}" correctly retrieved questions.`);
    }
  }

  // Bug 4: English practice configuration commands misclassified or ignored
  console.log('\n--- Checking Bug 4: Practice Settings Natural Language Parsing ---');
  const settingsCases = [
    { input: 'Set exam time to 45 min', expectedTool: 'configure_practice_settings' },
    { input: 'Set exam to 25 questions', expectedTool: 'configure_practice_settings' }
  ];

  for (const sc of settingsCases) {
    const res = await mod.handleDeterministicFallback(sc.input);
    if (res.toolUsed !== sc.expectedTool) {
      console.log(`[CONFIRMED BUG 4] Input "${sc.input}" got toolUsed="${res.toolUsed}" instead of "${sc.expectedTool}"`);
      bugs.push({
        id: 'BUG-M3-04',
        severity: 'MEDIUM',
        title: `English settings configuration phrasing not recognized for "${sc.input}"`,
        repro: `handleDeterministicFallback("${sc.input}")`,
        actual: `toolUsed = ${res.toolUsed || 'undefined'}`,
        expected: `toolUsed = ${sc.expectedTool}`
      });
    } else {
      console.log(`[PASSED] "${sc.input}" correctly triggered configure_practice_settings.`);
    }
  }

  console.log('\n================================================================');
  console.log(` Total Confirmed Empirical Bugs: ${bugs.length}`);
  console.log('================================================================\n');

  return bugs;
}

runBugReproductions().then(bugs => {
  if (bugs.length > 0) {
    console.log('Reproducible bugs documented for handoff report.');
  }
}).catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
