import {test,  expect,Page, chromium} from '@playwright/test';

test('Multiple tab[New tab] handling in action', async ({  }) => {
    
    const browser  = await chromium.launch(); // Launching the browser
    const context = await browser.newContext(); // Creating a new browser context
    
    const page1  = await context.newPage();
    await page1.goto("https://the-internet.herokuapp.com/windows") ;
    
    const [childpage] = await Promise.all([context.waitForEvent('page'),page1.locator("a[href='/windows/new']").click()])

    const allPages = context.pages();
    console.log("Number of pages ",allPages.length);

    // Print titles of all pages
    console.log("Parent page title ",await allPages[0].title());
    console.log("Child page title ",await allPages[1].title());

    // Print titles of all pages- Approach 2
    console.log("Parent page title ",await page1.title());
    console.log("Child page title ",await childpage.title());

});

test.only('Popup tab handling in action', async ({ browser }) => {

    //const browser  = await chromium.launch(); // Launching the browser
    const context = await browser.newContext(); // Creating a new browser context
    
    const page1  = await context.newPage();
    await page1.goto("https://testautomationpractice.blogspot.com/") ;
    const [popupPage] = await Promise.all([context.waitForEvent('popup'),page1.locator("#PopUp").click()])

    const allPages = context.pages();
    console.log("Number of pages ",allPages.length);

    // Print titles of all pages
    console.log("Parent page title ",await allPages[0].title());
    console.log("Child page title ",await allPages[1].title());

    // Print titles of all pages- Approach 2
    console.log("Parent page title ",await page1.title());
    //console.log("Child page title ",await childpage.title());


});
