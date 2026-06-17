import { test, expect } from '@playwright/test';

test('Visual comparison in Playwright', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveScreenshot('SauceLabsLoginPage.png');
    await page.locator('[data-test="username"]').fill('standard_user');
    await expect(page).toHaveScreenshot('SauceLabsLoginPage.png');
});

test('Element Visual comparison in Playwright', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveScreenshot ('SauceLabsLoginPage.png');
    const element = await page.locator('[class="login-box"]');
    await expect(element).toHaveScreenshot('sauceLabsLoginDetails.png');
    await page.locator('[data-test="username"]').fill('standard_user');
    await expect(element).toHaveScreenshot('sauceLabsLoginDetails.png');
});