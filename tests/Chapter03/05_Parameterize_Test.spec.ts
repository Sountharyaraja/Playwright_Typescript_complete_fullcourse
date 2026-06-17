import { test, expect } from '@playwright/test';


const userNames=['standard_user','visual_user','problem_user'];

for(const username of userNames ){

test(`Parameterize Tests in Playwright ${username}`, async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByText('Swag Labs').click();
  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
});
}