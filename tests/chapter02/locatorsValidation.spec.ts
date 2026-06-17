// https://www.saucedemo.com/
import { test, expect } from '@playwright/test';

test('Locators validation', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/locators');
    
    // get By Role
    await page.getByRole('button', { name: 'Add Item' }).click();

    //get by text
    await page.getByText('Hot Deal').click();

    //get by label
    await page.getByLabel('Choose a country', { exact: true }).first().selectOption('France');
    await page.getByLabel('Email for newsletter', { exact: true }).first().fill('sountharyaraja@gmail.com');

    //getByPlaceholder
    await page.getByPlaceholder('Search the site').fill('https://practice.expandtesting.com/locators');
    await page.getByPlaceholder('Filter by tag').fill('typescript');

    //getByAltText
    await page.getByAltText('User avatar').click();

    //getByTitle
    await page.getByTitle('Refresh content').click();
    await page.getByTitle('Settings panel').click();
    await page.pause();

    //get ByTestId
    await page.getByTestId('status-message').click();
    await page.getByTestId('user-name').getAttribute('data-testid').then(value => console.log(value));

    //css selector
    await page.locator('.legacy-css.text-primary').first().click();

    //xpath
    await page.locator("//li[text()='Task 1: Review']").click();
    const listofElements = await page.locator("//ul[@class='list-group legacy-list']/li").allInnerTexts();
    for (let i = 0; i < listofElements.length; i++) {
        console.log(listofElements[i]);
    }

    //get the table contents and print in the console
    const rows = await page.locator("//table//tr");
    for (let i = 0; i < await rows.count(); i++) {
        const values = await rows.nth(i).locator('th,td').allTextContents();
        console.log(values);
    }
});
