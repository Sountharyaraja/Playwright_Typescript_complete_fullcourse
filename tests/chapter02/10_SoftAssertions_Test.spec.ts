//import playwright module
import { test, expect } from '@playwright/test';
//write a test
test('Soft Assertions handling', async ({ page }) => {
    await page.goto("https://jqueryui.com/datepicker/");
    //iframe handling 
    const iframePage = await page.frameLocator(".demo-frame");
    //click on datepicker input field - hardcoding value
    // await iframePage.locator("#datepicker").fill('06/08/2026');

    //Dynamic date selection
    await expect(iframePage.locator("#datepicker")).toBeVisible();
    await expect(iframePage.locator("#datepicker")).toBeEditable();
    await iframePage.locator("#datepicker").click();
    await iframePage.locator(".ui-datepicker-today").click();
    await page.pause();
    await iframePage.locator("#datepicker").clear();
    await expect(iframePage.locator("#datepicker")).toBeEmpty();
    await expect(iframePage.locator("#datepicker")).toBeEnabled();
    await iframePage.locator("#datepicker").click();
    await iframePage.getByTitle("Prev").click();
    await iframePage.locator('text="15"').click();

    //to have url, title, text assertion
    await expect(page).toHaveURL('https://jqueryui.com/datepicker//');
    await expect.soft(page).toHaveTitle('Datepicker | jQuery UI');
    await expect(page.locator('h1')).toHaveText('Datepicker');
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h1')).toBeDisabled();


});