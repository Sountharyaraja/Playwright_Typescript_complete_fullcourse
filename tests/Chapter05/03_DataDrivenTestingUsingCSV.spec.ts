import { test, expect } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';
import path from 'path';

type TestRecords = {
    Username: string;
    Password: string;
};

const records: TestRecords[] = parse(
    fs.readFileSync(
        path.join(__dirname, '../../test-data/qa/testdata.csv')),
    {
        columns: true,
        skip_empty_lines: true,
    }
) as TestRecords[];

for (const record of records) {
     test(`Login Test - ${record.Username} and Password -${record.Password}`, async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill(record.Username);
        await page.locator('[data-test="password"]').fill(record.Password);
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
    });
}
