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

*/