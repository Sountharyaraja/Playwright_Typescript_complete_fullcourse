import { expect, Locator, Page } from '@playwright/test';

export class ProductSummaryPage {
    readonly page: Page;
    readonly addToCart: Locator;
    readonly shoppingCartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCart = page.locator('#add-to-cart');
        this.shoppingCartLink = page.locator("#shopping_cart_container");
    }

    async clickAddToCart(productName:string) {
        await expect(
            this.page.getByText(productName)
        ).toBeVisible();
        await this.addToCart.click();
    }

    async clickShoppingCartLink() {
        await expect(this.shoppingCartLink).toBeEnabled();
        await this.shoppingCartLink.click();
    }
}