import {test, expect,Locator} from '@playwright/test';
 

test('Perform the  click action', async({page}) =>{
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    const actButtoon:Locator = page.getByRole("link",{name:"Make Appointment"});
    await actButtoon.click();
    await expect(page).toHaveTitle(/CURA Healthcare Service/);
})


test('Radio button action ', async({page}) =>{  
await page.goto("https://testautomationpractice.blogspot.com/");
const radioButton:Locator = page.getByRole('radio', { name: 'Male', exact: true });

// Chekcing the status of radio button before clicking.
console.log(await radioButton.isChecked());
expect(await radioButton.isChecked()).toBe(false);

// Checking the radio button.
await radioButton.check();

// Assertion to verify if the radio button is checked.toBeChecked() will work for any web element.
await expect(radioButton).toBeChecked(); 

// Chekcing the status of radio button before clicking.
console.log(await radioButton.isChecked());
expect(await radioButton.isChecked()).toBe(true);
});


// In playwright checkbox and radio button actions hadling is same.
test.only('Checkbox button action ', async({page}) =>{  
await page.goto("https://testautomationpractice.blogspot.com/");
const checkboxButtonloc:Locator = page.getByLabel('Sunday');

// Chekcing the status of checkbox button before clicking.
console.log(await checkboxButtonloc.isChecked());
expect(await checkboxButtonloc.isChecked()).toBe(false);

// Checking the checkbox button.
await checkboxButtonloc.check();

// Assertion to verify if the checkbox button is checked.toBeChecked() will work for any web element.
await expect(checkboxButtonloc).toBeChecked(); 

// Chekcing the status of checkbox button before clicking.
console.log(await checkboxButtonloc.isChecked());
expect(await checkboxButtonloc.isChecked()).toBe(true);

// Selecting again to uncheck the checkbox.
await checkboxButtonloc.uncheck();

// Selecting all the checkbox  and checking it is checked.
const days:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const checkboxButtons:Locator[] = days.map(day => page.getByLabel(day));
for(const checkboxButton of checkboxButtons){
    await checkboxButton.check();
    await expect(checkboxButton).toBeChecked();
}
// Uncheck last 3 three checkboxes and verify it is unchecked.
for (const checkboxButton of checkboxButtons.slice(-3)){
    await checkboxButton.uncheck();
    await expect(checkboxButton).not.toBeChecked();
}

// Just to see the final status of checkboxes while running in headed mode. It is not a good practice to have wait in the test script.
await page.waitForTimeout(5000);

});

test('Verify page title', async({page}) =>{
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle(/Playwright/);
});