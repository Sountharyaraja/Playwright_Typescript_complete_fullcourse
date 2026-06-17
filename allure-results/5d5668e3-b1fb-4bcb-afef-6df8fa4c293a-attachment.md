# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter05\01_ReadENVFile_Test.spec.ts >> Read ENV file config
- Location: tests\Chapter05\01_ReadENVFile_Test.spec.ts:3:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "undefined", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Read ENV file config', async ({ page }) => {
> 4  |   await page.goto(`${process.env.URL}`);
     |              ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  5  |   await page.locator('[data-test="username"]').fill('standard_user');
  6  |   await page.locator('[data-test="password"]').fill('secret_sauce');
  7  |   await page.locator('[data-test="login-button"]').click();
  8  |   await page.getByText('Swag Labs').click();
  9  |   await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
  10 | });
```