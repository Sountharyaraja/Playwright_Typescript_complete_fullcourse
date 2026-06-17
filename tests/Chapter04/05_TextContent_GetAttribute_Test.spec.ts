import { test, expect } from '@playwright/test';

test('Get Text and Get Attribute value in Playwright', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const text1=await page.locator(".login_logo").textContent();
  const finalText=text1?.trim();
  console.log(`Name is: ${finalText}`);
 const text2=await page.locator(".login_logo").innerText();
  const finalText2=text2?.trim();
  console.log(`Name is: ${finalText2}`);
  console.log(`Name is: ${text1}`);
  expect(finalText2).toBe('Swag Labs');
  await page.locator('[data-test="username"]').fill('standard_user');
  const attValue=await page.locator('[data-test="username"]').getAttribute("placeholder");
  console.log(attValue);
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByText('Swag Labs').click();
  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
});