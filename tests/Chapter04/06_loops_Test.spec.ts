import { test, expect } from '@playwright/test';

test('Iteration', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.getByText('Swag Labs').click();
    await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
    const products = await page.$$(".inventory_item_name")
    for (const product of products) {
        const text = await product.textContent();
        console.log(`Text from the 2nd loop is:"${text}`);
    }
    console.log(`========================================`);
    for (let i = 0; i < products.length; i++) {
        const text2 = await products[i].textContent();
        console.log(`Text from the 2nd loop is:"${text2}`);
    }
    console.log(`========================================`);
    const products2 = await page.locator(".inventory_item_name");
    const count = await products2.count();
    for (let i = 0; i < count; i++) {
        const text3 = await products2.nth(i).textContent();
        console.log(`Text from the 3rd loop is:"${text3}`);
    }
});