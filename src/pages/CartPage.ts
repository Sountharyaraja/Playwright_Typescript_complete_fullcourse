import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly checkout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkout = page.locator('#checkout');
  
    }

    async clickCheckout(productName:string) {
        await expect(
            this.page.getByText(productName)
        ).toBeVisible();
        await this.checkout.click();
    }
}