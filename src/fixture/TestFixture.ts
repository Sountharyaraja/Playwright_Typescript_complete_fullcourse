import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { CheckoutYourInformationPage } from '../pages/CheckoutYourInformationPage';
import { ProductSummaryPage } from '../pages/ProductSummaryPage';
import { loadTestData } from '../utils/JsonHelper';
import { TestData } from '../interface/Module1TestData.interface';


export const test = base.extend<{
    saveLogs: void;
    homePage: HomePage;
    loginPage: LoginPage;
    cartPage: CartPage;
    checkoutCompletePage: CheckoutCompletePage;
    checkoutOverviewPage: CheckoutOverviewPage;
    checkoutPage: CheckoutPage;
    checkoutYourInformationPage: CheckoutYourInformationPage;
    productSummaryPage: ProductSummaryPage;
    testData: TestData;

}>({
    saveLogs: [async ({ }, use) => {
        console.log('Global before is running...');
        await use();
        console.log('Global afterEach is running...');
    },
    { auto: true }],
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    },
    checkoutCompletePage: async ({ page }, use) => {
        const checkoutCompletePage = new CheckoutCompletePage(page);
        await use(checkoutCompletePage);
    },
     checkoutOverviewPage: async ({ page }, use) => {
        const checkoutOverviewPage = new CheckoutOverviewPage(page);
        await use(checkoutOverviewPage);
    },
     checkoutPage: async ({ page }, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    },
     checkoutYourInformationPage: async ({ page }, use) => {
        const checkoutYourInformationPage = new CheckoutYourInformationPage(page);
        await use(checkoutYourInformationPage);
    },
     productSummaryPage: async ({ page }, use) => {
        const productSummaryPage = new ProductSummaryPage(page);
        await use(productSummaryPage);
    },
       testData: async ({ }, use) => {
        const data = await loadTestData();
        await use(data);
    }


});

export { expect } from '@playwright/test';