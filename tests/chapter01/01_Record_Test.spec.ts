import { test, expect } from '@playwright/test';

test('GitHub Login Validation', async ({ page }) => {

  await test.step('Navigating to URL', async () => {
    await page.goto('https://github.com/');
  });

  await test.step('Enter Username and Password', async () => {
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('testing');
    await page.getByRole('textbox', { name: 'Password' }).fill('testing212');
  });

  await test.step('Click on Signin', async () => {
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  });

  await test.step('Validate the error message', async () => {
    await expect(page.getByRole('alert'))
      .toContainText('Incorrect username or password.');
  });

});