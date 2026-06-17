//import playwright module
import { test, expect } from '@playwright/test';
//write a test
test('MyFirst Playwright typescript test', async ({ page }) => {
  //Go to URL
  // Launch https://the-internet.herokuapp.com/ and validate the page title
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveTitle('The Internet');
    await expect(page.locator('h1')).toContainText('Welcome to the-internet');
    await expect(page.locator('h2')).toContainText('Available Examples');
    await page.getByRole('heading', { name: 'Available Examples' }).click();    
    await page.getByRole('heading', { name: 'Welcome to the-internet' }).click();
});


