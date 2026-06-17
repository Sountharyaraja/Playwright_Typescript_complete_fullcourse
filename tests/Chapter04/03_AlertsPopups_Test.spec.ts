import { test, expect } from '@playwright/test';

test('Handling Alert Popups in Playwright', async ({ page }) => {
  await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
  page.once('dialog',dialog=>{
        dialog.accept();
        console.log(`Alert Message is: ${dialog.message()}`);
        console.log(`Dialog type is: ${dialog.type()}`);

  });
    await page.getByText('See an example alert',{exact:true}).click();

});

test('Handling Popups in Playwright', async ({ page }) => {
  await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
  page.once('dialog',dialog=>{
        dialog.dismiss();
        console.log(`Alert Message is: ${dialog.message()}`);
        console.log(`Dialog type is: ${dialog.type()}`);
  });
    await page.getByText('See a sample confirm',{exact:true}).click();

});

test('Handling Prompts in Playwright', async ({ page }) => {
  await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
  page.once('dialog',async(dialog)=>{
        await dialog.accept("Playwright Test");
        console.log(`Popup Message is: ${dialog.message()}`);
        console.log(`Dialog type is: ${dialog.type()}`);

  });
    await page.getByText('See a sample prompt',{exact:true}).click();

});