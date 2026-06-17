import { test, expect } from '@playwright/test';

test('Read ENV file config', async ({ page }) => {
  await page.goto(`${process.env.SAUCELABSURL}`);
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByText('Swag Labs').click();
  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
});