import { expect, Locator, Page } from '@playwright/test';

export class CheckoutCompletePage {
    readonly page: Page;
    readonly orderConfirmation: Locator;
    readonly backToHome : Locator;

    constructor(page: Page) {
        this.page = page;
        this.orderConfirmation = page.getByText('Thank you for your order!');
        this.backToHome=page.locator('#back-to-products');
    }

    async verifyOrderPlaced() {
        await expect(this.orderConfirmation)
            .toHaveText('Thank you for your order!');
    }

     async clickOnBackToHome() {
        await this.backToHome.click();
    }
}