import { test, expect } from '@playwright/test';
import path from 'path';
import { readExcelFile } from '../../src/utils/ExcelHelper';
const filePath = path.join(__dirname, '../../test-data/qa/testdata.xlsx');

const records = readExcelFile(filePath);
for (const record of records) {
    test(`Login Test - ${record.Username} and Password -${record.Password}`, async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill(record.Username);
        await page.locator('[data-test="password"]').fill(record.Password);
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
    });
}
