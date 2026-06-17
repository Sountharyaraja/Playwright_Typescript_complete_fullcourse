import { test, expect } from '@playwright/test';

test('Validate checkbox and radio button', async ({ page }) => {
  await page.goto('https://jqueryui.com/checkboxradio/');
  //radio button
  const iframe=await page.frameLocator("[class='demo-frame']");
  await expect(iframe.locator("[for='radio-1']")).not.toBeChecked();
  await iframe.locator("[for='radio-1']").check();
  await expect(iframe.locator("[for='radio-1']")).toBeChecked();

});