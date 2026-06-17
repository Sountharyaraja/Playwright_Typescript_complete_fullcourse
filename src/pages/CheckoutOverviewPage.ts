import { expect, Locator, Page } from '@playwright/test';

export class CheckoutOverviewPage {
    readonly page: Page;
    readonly finish: Locator;

    constructor(page: Page) {
        this.page = page;
        this.finish = page.locator("#finish");
    }

    async clickFinish(productName: string) {
        await expect(
            this.page.getByText(productName)
        ).toBeVisible();
        await this.finish.click();
    }
}