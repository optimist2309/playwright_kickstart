import {test,  expect,Page} from '@playwright/test';

test('Keyboard actions in action', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/") ;

    // Focus on the text area
    await page.locator("#input1").focus();

    // Type text with keyboard actions
    await page.keyboard.insertText("Hello hi bye bye");

    // Select all text (Ctrl + A) and copy (Ctrl + C)
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.press('C');
    await page.keyboard.up('Control');

    // Tab to the next input field
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Paste the copied text (Ctrl + V)
    await page.keyboard.down('Control');
    await page.keyboard.press('V');
    await page.keyboard.up('Control');


    // Tab to the next input field
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');


    // Paste the copied text (Ctrl + V)
    await page.keyboard.down('Control');
    await page.keyboard.press('V');
    await page.keyboard.up('Control');

});

test.only('Above action with lesser code', async ({ page }) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/") ;  

    // Focus on the text area
    await page.locator("#input1").focus();

    // Type text with keyboard actions
    await page.keyboard.insertText("Hello hi bye bye");

    // Select all text (Ctrl + A) and copy (Ctrl + C), Tab to next field and Paste (Ctrl + V)
   await page.keyboard.press('Control+A');
   await page.keyboard.press('Control+C');
    
   await page.keyboard.press('Tab');
   await page.keyboard.press('Tab');
   await page.keyboard.press('Control+V');

   await page.keyboard.press('Tab');
   await page.keyboard.press('Tab');
   await page.keyboard.press('Control+V');

   await page.waitForTimeout(5000);
});

