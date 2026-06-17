import { test, expect } from '@playwright/test';
import testData from '../../test-data/qa/testdata.json'

type TestData = {
    "TestDataSet1": {
        Username: string,
        Password: string
    },
    "TestDataSet2": {
        Username: string,
        Password: string
    }
}

const typeTestData = testData as TestData;

for (const dataSetName in typeTestData) {
    const credentials = typeTestData[dataSetName as keyof TestData];
        test(`Login Test - Username: ${credentials.Username}, Password: ${credentials.Password}`, async ({ page }) => {
            await page.goto('https://www.saucedemo.com/');
            await page.locator('[data-test="username"]').fill(credentials.Username);
            await page.locator('[data-test="password"]').fill(credentials.Password);
            await page.locator('[data-test="login-button"]').click();
            await page.getByText('Swag Labs').click();
            await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
        });
}


