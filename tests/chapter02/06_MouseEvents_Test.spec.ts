
//import playwright module
import { test, expect } from '@playwright/test';
//write a test
test('Mouse Actions', async ({ page }) => {
    await page.goto("https://demoqa.com/buttons");
    //click the btton
    await page.getByRole('button', { name: 'Click Me', exact:true }).click();
    await page.pause();
    await expect(page.getByText("You have done a dynamic click")).toBeVisible();

    //click right
    await page.getByRole('button', { name: 'Right Click Me', exact: true }).click({ button: 'right' });
    await expect(page.getByText("You have done a right click")).toBeVisible();

    //double click
    await page.getByRole('button', { name: 'Double Click Me', exact: true }).dblclick();
    await expect(page.getByText("You have done a double click")).toBeVisible();

    await page.goto("https://practice.expandtesting.com/hovers");
    await page.getByAltText('User Avatar').first().hover();
    await expect(page.getByText("name: user1")).toBeVisible();

    //await page.getByAltText('User Avatar').second().hover();
    await expect(page.getByText("name: user1")).toBeVisible();
});
