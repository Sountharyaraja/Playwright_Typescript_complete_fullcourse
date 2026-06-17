
//import playwright module
import { test, expect } from '@playwright/test';
//write a test
test('Handling iframes, drag and drop', async ({ page }) => {
    await page.goto("https://jqueryui.com/droppable/");

    //iframe handling
    const iframepage=await page.frameLocator("[class='demo-frame']");
    //drag element and drop element
    const source=await iframepage.locator("#draggable");
    const target=await iframepage.locator("#droppable");

    await source.dragTo(target);
    await expect(target).toContainText('Dropped!');
});