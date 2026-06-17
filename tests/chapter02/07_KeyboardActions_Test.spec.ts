//import playwright module
import { test, expect } from '@playwright/test';
//write a test
test('Keyboard Actions', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/key_presses?");
    await page.locator("#target").fill("TAB");
    await page.locator("#target").press("Tab");
    await expect(page.locator("#result")).toHaveText("You entered: TAB");
    await page.locator("#target").fill("enter");
    await page.pause();
    await page.locator("#target").press("Enter");
    await expect(page.locator("#result")).toHaveText("You entered: Enter");
    await page.locator("#target").press("Control+A");
    await expect(page.locator("#result")).toHaveText("You entered: A");
    await page.locator("#target").press("Delete");
    await expect(page.locator("#result")).toHaveText("You entered: Delete");
});