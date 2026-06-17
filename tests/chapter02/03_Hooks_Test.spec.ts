//import playwright module
import { test, expect } from '@playwright/test';
//write a test
test.beforeAll(async () => {
    console.log("This will run before all the tests");
});

test.afterAll(async () => {
    console.log("This will run after all the tests");
});

test.beforeEach(async ({page}) => {
    console.log("This will run before each test");
    await page.goto('https://the-internet.herokuapp.com/');
});

test.afterEach(async () => {
    console.log("This will run after each test");
});

test('Test 1', async ({ page }) => {
        console.log("test1 running");

  //Go to URL
  // Launch https://the-internet.herokuapp.com/ and validate the page title
    await expect(page).toHaveTitle('The Internet');
    await expect(page.locator('h1')).toContainText('Welcome to the-internet');
    await expect(page.locator('h2')).toContainText('Available Examples');
    await page.getByRole('heading', { name: 'Available Examples' }).click();    
    await page.getByRole('heading', { name: 'Welcome to the-internet' }).click();
});

test('Test 2', async ({ page }) => {
  //Go to URL
          console.log("test2 running");

  // Launch https://the-internet.herokuapp.com/ and validate the page title
   // await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveTitle('The Internet');
    await expect(page.locator('h1')).toContainText('Welcome to the-internet');
    await expect(page.locator('h2')).toContainText('Available Examples');
    await page.getByRole('heading', { name: 'Available Examples' }).click();    
    await page.getByRole('heading', { name: 'Welcome to the-internet' }).click();
});
