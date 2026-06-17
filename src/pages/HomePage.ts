import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly addToCart: Locator;
    readonly menuItem: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCart = page.locator('#add-to-cart-sauce-labs-backpack');
        this.menuItem = page.locator("#react-burger-menu-btn");
        this.logoutButton = page.locator('#logout_sidebar_link');
    }

    async clickOnProduct(productName: string) {
        await expect(
            this.page.getByText(productName)
        ).toBeVisible();
        await this.page.getByText(productName).click();
    }

    async clickMenuItem() {
        await this.menuItem.click();
    }

    async clickLogout() {
        await this.logoutButton.click();
    }

    async logoutApplication(){
        await this.clickMenuItem();
        await this.clickLogout();
    }

}