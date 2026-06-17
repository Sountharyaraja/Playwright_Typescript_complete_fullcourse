# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter05\02_DataDrivenTestingUsingJson.spec.ts >> Login Test - Username: standard_user, Password: secret_sauce
- Location: tests\Chapter05\02_DataDrivenTestingUsingJson.spec.ts:20:13

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "undefined", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import testData from '../../test-data/qa/testdata.json'
  3  | 
  4  | type TestData = {
  5  |     "TestDataSet1": {
  6  |         Username: string,
  7  |         Password: string
  8  |     },
  9  |     "TestDataSet2": {
  10 |         Username: string,
  11 |         Password: string
  12 |     }
  13 | }
  14 | 
  15 | const typeTestData = testData as TestData;
  16 | 
  17 | for (const dataSetName in typeTestData) {
  18 |     const credentials = typeTestData[dataSetName as keyof TestData];
  19 | 
  20 |         test(`Login Test - Username: ${credentials.Username}, Password: ${credentials.Password}`, async ({ page }) => {
> 21 |             await page.goto(`${process.env.URL}`);
     |                        ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  22 |             await page.locator('[data-test="username"]').fill(credentials.Username);
  23 |             await page.locator('[data-test="password"]').fill(credentials.Password);
  24 |             await page.locator('[data-test="login-button"]').click();
  25 |             await page.getByText('Swag Labs').click();
  26 |             await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
  27 |         });
  28 | }
  29 | 
  30 | 
  31 | 
```