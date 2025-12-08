import {test,  expect,Page, chromium , firefox} from '@playwright/test';

test('Browser context stuff', async ({  }) => {
    
    const browser  = await chromium.launch(); // Launching the browser
    const context = await browser.newContext(); // Creating a new browser context


    // Creating 2 pages (tabs) in the same context
    const page1  = await context.newPage();
    const page2  = await context.newPage();

    await  page1.goto("https://playwright.dev/");
    await  page2.goto("https://testautomationpractice.blogspot.com/") ;



});
