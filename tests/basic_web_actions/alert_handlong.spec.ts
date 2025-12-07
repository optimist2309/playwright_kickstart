/*
alert(), confirm(), prompt() dialogs
By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. 
However, you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.

page.on('dialog', dialog => dialog.accept());
await page.getByRole('button').click();

page.on('dialog') listener must handle the dialog. Otherwise your action will stall, be it locator.click() or something else. 
That's because dialogs in Web are modals and therefore block further page execution until they are handled.

If there is no listener for page.on('dialog'), all dialogs are automatically dismissed.

*/

import {test, expect,Locator} from '@playwright/test';

test('Simple Alert Handling', async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog', dialog => {
        
        console.log(dialog.type()); // Retrieving the type of dialog.
        expect( dialog.type()).toBe("alert"); // Verifying the type of dialog
        
        console.log(dialog.message());  // Message text in the dialog
        expect( dialog.message()).toBe("I am an alert box!"); // Verifying the message text
        
        dialog.accept() // To accept the dialog
         });

    await page.locator("#alertBtn").click(); // Clicking this button will trigger an alert dialog.
    });

test.only('Confirm Alert Handling', async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog', dialog => {
        
        console.log(dialog.type()); // Retrieving the type of dialog.
        expect( dialog.type()).toBe("confirm"); // Verifying the type of dialog
        
        console.log(dialog.message());  // Message text in the dialog
        expect( dialog.message()).toBe("Press a button!"); // Verifying the message text
        
        dialog.accept() // To accept the dialog
         });
        await page.locator("#confirmBtn").click(); // Clicking this button will trigger an alert dialog.
    });

test.only('Confirm Alert Handling-2', async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog', dialog => {
        
        console.log(dialog.type()); // Retrieving the type of dialog.
        expect( dialog.type()).toBe("confirm"); // Verifying the type of dialog
        
        console.log(dialog.message());  // Message text in the dialog
        expect( dialog.message()).toBe("Press a button!"); // Verifying the message text
        
        dialog.dismiss() // To dissming the dialog
         });

    await page.locator("#confirmBtn").click(); // Clicking this button will trigger an alert dialog.
    });