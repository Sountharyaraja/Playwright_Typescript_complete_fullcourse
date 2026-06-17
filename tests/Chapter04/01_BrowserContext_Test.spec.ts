import { test, expect } from '@playwright/test';

test('Multiple browser/tabs in Playwright Typescript', async ({ page, browser }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByText('Swag Labs').click();
  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
  
  // Creating new context 
  const context2=await browser.newContext();
  const page2= await context2.newPage();
  
  await page2.goto('https://www.saucedemo.com/');
  await page2.locator('[data-test="username"]').fill('standard_user');
  await page2.locator('[data-test="password"]').fill('secret_sauce');
  await page2.locator('[data-test="login-button"]').click();
  await page2.getByText('Swag Labs').click();
  await expect(page2.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
  
  //create new tab
  const newTab= await context2.newPage();
  await newTab.goto('https://www.saucedemo.com/');
  await newTab.locator('[data-test="username"]').fill('standard_user');
});