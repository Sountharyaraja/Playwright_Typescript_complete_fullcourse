import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameTextbox: Locator;
    readonly passwordTextbox: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        //Elements
        this.usernameTextbox = page.locator("#user-name");
        this.passwordTextbox = page.locator("#password");
        this.loginButton = page.locator("#login-button");
    }

    //Methods
    async goToURL() {
        if (process.env.TEST_EXECUTION_ENV == 'qa') {
            await this.page.goto(`${process.env.SAUCELABSURL}`);
            console.log(`Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`)
        } else if (process.env.TEST_EXECUTION_ENV == 'dev') {
            await this.page.goto(`${process.env.SAUCELABSURL}`);
            console.log(`Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`)
        }
    }

    async loginIntoApplication(userName: string, password: string) {
        await expect(this.usernameTextbox).toBeVisible();
        await this.usernameTextbox.fill(userName);
        await this.passwordTextbox.fill(password);
        await this.loginButton.click();
    }
}

