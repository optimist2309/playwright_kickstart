/*
Playwright Test comes with a few built-in reporters for different needs and ability to provide custom reporters. 
The easiest way to try out built-in reporters is to pass --reporter

npx playwright test --reporter=line

For more control, you can specify reporters programmatically in the configuration file.

import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: 'line',
});

Multiple reporters

import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['json', {  outputFile: 'test-results.json' }]
  ],
});

import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['html', { open: 'never' }]],
});

nstall allure-playwright using a package manager of your choice. For example:

npm install -D allure-playwright
Usage
Add allure-playwright as the reporter in the Playwright configuration file:

import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: "allure-playwright",
});
Or, if you want to use more than one reporter:

import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [["line"], ["allure-playwright"]],
});
Or pass the same values via the command line:

npx playwright test --reporter=line,allure-playwright


Dot reporter
Dot reporter is very concise - it only produces a single character per successful test run. It is the default on CI and useful where you don't want a lot of output.

npx playwright test --reporter=dot

playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: 'dot',
});

Blob reporter
Blob reports contain all the details about the test run and can be used later to produce any other report. Their primary function is to facilitate the merging of reports from sharded tests.

npx playwright test --reporter=blob

By default, the report is written into the blob-report directory in the package.json directory or current working directory (if no package.json is found).

The report file name looks like report-<hash>.zip or report-<hash>-<shard_number>.zip when sharding is used. The hash is an optional value computed from --grep, --grepInverted, --project, testConfig.tag and file filters passed as command line arguments. The hash guarantees that running Playwright with different command line options will produce different but stable between runs report names. The output file name can be overridden in the configuration file or passed as 'PLAYWRIGHT_BLOB_OUTPUT_FILE' environment variable.
*/