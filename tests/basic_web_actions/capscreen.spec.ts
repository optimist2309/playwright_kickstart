import { test, expect} from '@playwright/test';

test('Screenshot example-Page Screenshot', async ({ page }) => {
await page.goto('https://playwright.dev/');
const ts = Date.now();

// Page screenshot
await page.screenshot({ path: ''+ts+'_page.png'});

});

test.only('Screenshot example- Full Page Screenshot', async ({ page }) => {
await page.goto('https://playwright.dev/');
const ts = Date.now();

// Full Page screenshot
await page.screenshot({ path: ''+ts+'full_page.png', fullPage: true});

});

test.only('Screenshot example- Locator specific Screenshot', async ({ page }) => {
await page.goto('https://playwright.dev/');
const ts = Date.now();

const logos = page.locator("img[alt='Browsers (Chromium, Firefox, WebKit)']")

// Locator  Specific screenshot
await logos.screenshot({ path: 'abc'+ts+'loc_specific.png'});

});