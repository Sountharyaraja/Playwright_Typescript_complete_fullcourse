import { expect, Locator, Page } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addProductToCart(productName: string) {
        const product = this.page.getByText(productName);
        await product.locator('button').click();
    }
}