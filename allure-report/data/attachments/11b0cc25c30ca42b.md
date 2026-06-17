# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter04\04_TestReports_Test.spec.ts >> RegressionTesting >> Annotation Test 4
- Location: tests\Chapter04\04_TestReports_Test.spec.ts:37:10

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('[data-test="primary-header"]')
Expected substring: "Swag Labss"
Received string:    "Open MenuAll ItemsAboutLogoutReset App StateClose MenuSwag Labs"
Timeout: 10000ms

Call log:
  - Expect "toContainText" with timeout 10000ms
  - waiting for locator('[data-test="primary-header"]')
    23 × locator resolved to <div class="primary_header" data-test="primary-header">…</div>
       - unexpected value "Open MenuAll ItemsAboutLogoutReset App StateClose MenuSwag Labs"

```

```yaml
- button "Open Menu"
- img "Open Menu"
- text: Swag Labs
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('SmokeTesting', () => {
  4  |     test('Annotation Test 1', async ({ page }) => {
  5  |         await page.goto('https://www.saucedemo.com/');
  6  |         await page.locator('[data-test="username"]').click();
  7  |         await page.locator('[data-test="username"]').fill('standard_user');
  8  |         await page.locator('[data-test="password"]').fill('secret_sauce');
  9  |         await page.locator('[data-test="login-button"]').click();
  10 |         await page.getByText('Swag Labs').click();
  11 |         await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
  12 |     });
  13 | });
  14 | 
  15 | test.describe('RegressionTesting', () => {
  16 | 
  17 |     test('Annotation Test 2', async ({ page }) => {
  18 |         await page.goto('https://www.saucedemo.com/');
  19 |         await page.locator('[data-test="username"]').click();
  20 |         await page.locator('[data-test="username"]').fill('standard_user');
  21 |         await page.locator('[data-test="password"]').fill('secret_sauce');
  22 |         await page.locator('[data-test="login-button"]').click();
  23 |         await page.getByText('Swag Labs').click();
  24 |         await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
  25 |     });
  26 | 
  27 |     test('Annotation Test 3', async ({ page }) => {
  28 |         await page.goto('https://www.saucedemo.com/');
  29 |         await page.locator('[data-test="username"]').click();
  30 |         await page.locator('[data-test="username"]').fill('standard_user');
  31 |         await page.locator('[data-test="password"]').fill('secret_sauce');
  32 |         await page.locator('[data-test="login-button"]').click();
  33 |         await page.getByText('Swag Labs').click();
  34 |         await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
  35 |     });
  36 | 
  37 |      test('Annotation Test 4', async ({ page }) => {
  38 |         await page.goto('https://www.saucedemo.com/');
  39 |         await page.locator('[data-test="username"]').click();
  40 |         await page.locator('[data-test="username"]').fill('standard_user');
  41 |         await page.locator('[data-test="password"]').fill('secret_sauce');
  42 |         await page.locator('[data-test="login-button"]').click();
  43 |         await page.getByText('Swag Labs').click();
> 44 |         await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labss');
     |                                                                    ^ Error: expect(locator).toContainText(expected) failed
  45 |     });
  46 | });
  47 | 
  48 | 
  49 | 
```