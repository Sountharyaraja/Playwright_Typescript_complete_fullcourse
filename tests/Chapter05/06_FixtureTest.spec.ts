import {test} from '../../src/fixtures/TestFixture'
//import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { HomePage } from '../../src/pages/HomePage';
import { ProductSummaryPage } from '../../src/pages/ProductSummaryPage';
import { CartPage } from '../../src/pages/CartPage';
import { CheckoutYourInformationPage } from '../../src/pages/CheckoutYourInformationPage';
import { CheckoutOverviewPage } from '../../src/pages/CheckoutOverviewPage';
import { CheckoutCompletePage } from '../../src/pages/CheckoutCompletePage';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.SAUCE_USERNAME!;
const password = process.env.SAUCE_PASSWORD!;
const product = process.env.productName!;
const firstName = process.env.firstName!;
const lastName = process.env.lastName!;
const zipcode = process.env.Zipcode!;

test('Implementing fixture in playwright', async ({ page }) => {
    
    console.log('Test Execution started...')
    await page.setViewportSize({
        width: 1536,
        height: 645,
    }),

    console.log(page.viewportSize());

    console.log('Test Execution started now...');
    //create object for all pages
    const loginPage = new LoginPage(page);
    await loginPage.goToURL();
    await loginPage.loginIntoApplication(
        username, password
    );
    //Create an object for home page
    const homePage = new HomePage(page);
    await homePage.clickOnProduct(product);

    //create an object for product summary page
    const productSummaryPage = new ProductSummaryPage(page);
    await productSummaryPage.clickAddToCart(product);
    await productSummaryPage.clickShoppingCartLink();
    await page.pause();
    ///create an object for Your cart page
    const cartPage = new CartPage(page);
    await cartPage.clickCheckout(product);

    //create an object for Checkout: Your Information page
    const checkoutYourInformationPage = new CheckoutYourInformationPage(page);
    await checkoutYourInformationPage.addYourInformation(
        firstName, lastName, zipcode);

    //create an object for Checkout:Overview page
    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    await checkoutOverviewPage.clickFinish(product);

    //create an object for Checkout:Complete page
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await checkoutCompletePage.verifyOrderPlaced();
    await checkoutCompletePage.clickOnBackToHome();

    //logout
    await homePage.logoutApplication();

    console.log('Test Execution ended...')

});