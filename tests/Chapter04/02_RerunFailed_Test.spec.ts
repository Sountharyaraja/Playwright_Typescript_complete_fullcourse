import { test, expect } from '@playwright/test';

test('Test 1', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByText('Swag Labs').click();
  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
});

test('Test 2', async ({ page }) => {
expect(true).toBe(true);
 });

test('Test 3', async ({ page }) => {
  expect(true).toBe(true);
});