import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page:Page;
    readonly usernameTextbox: Locator;
    readonly passwordTextbox: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        
        //Elements
        this.usernameTextbox=page.locator("#user-name");
        this.passwordTextbox=page.locator("#password");
        this.loginButton=page.locator("#login-button");

    }

    //Methods
    async goToURL(){
        await this.page.goto(`${process.env.SAUCELABSURL}`);
    }

    async loginIntoApplication(userName:string,password:string){
        await expect(this.usernameTextbox).toBeVisible();
        await this.usernameTextbox.fill(userName);
        await this.passwordTextbox.fill(password);
        await this.loginButton.click();

    }

}

