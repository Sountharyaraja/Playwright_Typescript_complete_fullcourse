//import playwright module
import { test, expect } from '@playwright/test';
//write a test
test('Capture screenshot', async ({ page }) => {
  //Go to URL
  // Launch https://the-internet.herokuapp.com/ and validate the page title
    await page.goto('https://www.saucedemo.com/inventory.html');
   
    //element screenshot
    await page.locator("//div[text()='Swag Labs']").screenshot({
        path: './screenshots/swagLabs1.png'});

    // page screenshot
    await page.screenshot({path: './screenshots/swagLabs2.png'});
    
    // full page screenshot
    await page.screenshot({path: './screenshots/swagLabs3.png', fullPage: true});
   
});


