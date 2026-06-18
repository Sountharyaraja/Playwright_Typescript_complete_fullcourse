import {test} from '../../src/fixture/TestFixture'
import dotenv from 'dotenv';
dotenv.config();

const username = process.env.SAUCE_USERNAME!;
const password = process.env.SAUCE_PASSWORD!;
const product = process.env.productName!;
const firstName = process.env.firstName!;
const lastName = process.env.lastName!;
const zipcode = process.env.Zipcode!;

test('Validate Page Fixtures with imported pages', async ({ page, homePage, loginPage,
    productSummaryPage,cartPage,checkoutYourInformationPage,checkoutOverviewPage,checkoutCompletePage}) => {
    console.log(page.viewportSize());

    console.log('Test Execution started now...');
    //create object for all pages
    await loginPage.goToURL();
    await loginPage.loginIntoApplication(
        username, password
    );
    //Create an object for home page
    await homePage.clickOnProduct(product);

    //create an object for product summary page
    await productSummaryPage.clickAddToCart(product);
    await productSummaryPage.clickShoppingCartLink();
    await page.pause();
    ///create an object for Your cart page
    await cartPage.clickCheckout(product);

    //create an object for Checkout: Your Information page
    await checkoutYourInformationPage.addYourInformation(
        firstName, lastName, zipcode);

    //create an object for Checkout:Overview page
    await checkoutOverviewPage.clickFinish(product);

    //create an object for Checkout:Complete page
    await checkoutCompletePage.verifyOrderPlaced();
    await checkoutCompletePage.clickOnBackToHome();

    //logout
    await homePage.logoutApplication();
});