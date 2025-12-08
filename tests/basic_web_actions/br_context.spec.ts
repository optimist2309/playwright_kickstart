import {test,  expect,Page, chromium , firefox} from '@playwright/test';

// Browser >>>>> context >>> page

// Brwser ----> chromoium , firefox , webkit

// Context ---->> user profile[Multiple context can be created in a browser]

// page ---->> new tab , window, popup

test('Browser context stuff', async ({ context }) => {
const page  = await context.newPage();
await  page.goto("https://testautomationpractice.blogspot.com/") ;
});

test('Another Browser context stuff', async ({ browser }) => {
    const context = await browser.newContext();
    const page  = await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/") ;
    });

    test('One more Browser context stuff', async ({  }) => {
    const browser  = await chromium.launch();
    const context = await browser.newContext();
    const page  = await context.newPage();
    await  page.goto("https://testautomationpractice.blogspot.com/") ;

});

test('One more Browser context stuff-3', async ({  }) => {
    const browser  = await firefox.launch();
    const context = await browser.newContext();
    const page  = await context.newPage();
    await  page.goto("https://testautomationpractice.blogspot.com/") ;

});

test('One more Browser context stuff-2', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/") ;
    await page.waitForTimeout(5000)
});


