import { expect, Locator, Page } from '@playwright/test';

export class CheckoutYourInformationPage {
    readonly page: Page;
    readonly firstNameTextbox: Locator;
    readonly lastNameTextbox: Locator;
    readonly postalCodeTextbox: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameTextbox = page.getByPlaceholder("First Name");
        this.lastNameTextbox = page.getByPlaceholder("Last Name");
        this.postalCodeTextbox = page.getByPlaceholder("Zip/Postal Code");
        this.continueButton = page.locator("#continue");
    }

    async addYourInformation(firstname: string, lastname: string, postalcode: string) {
        await expect(this.firstNameTextbox).toBeVisible();
        await this.firstNameTextbox.fill(firstname);
        await this.lastNameTextbox.fill(lastname);
        await this.postalCodeTextbox.fill(postalcode);
        await this.continueButton.click();
    }
}