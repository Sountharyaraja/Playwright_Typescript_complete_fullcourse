import { test, expect } from '@playwright/test';

test('Timeouts in Playwright', async ({ page }) => {
 //test timeout
    test.setTimeout(1*60*1000);
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click({timeout:1000});
  await page.getByText('Swag Labs').click();
  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labss',{timeout:5000});
  //test timeout
  await page.waitForTimeout(60000);
});