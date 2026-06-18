import { test } from '../../src/fixture/TestFixture'
import dotenv from 'dotenv';
dotenv.config();

// const username = process.env.SAUCE_USERNAME!;
// const password = process.env.SAUCE_PASSWORD!;
// const product = process.env.productName!;
// const firstName = process.env.firstName!;
// const lastName = process.env.lastName!;
// const zipcode = process.env.Zipcode!;

test('Validate Page Fixtures with imported pages', async ({ page, homePage, loginPage,productSummaryPage, cartPage, checkoutYourInformationPage, checkoutOverviewPage, checkoutCompletePage, testData }) => {

    console.log('Test Execution started now...');
    console.log(`Product Nae:${String(testData.ModuleTestData?.Product)}`);
    console.log(`User name:${String(testData.ModuleTestData?.Username)}`);
    console.log(`password :${String(testData.ModuleTestData?.Password)}`);
    console.log(`first name:${String(testData.ModuleTestData?.Firstname)}`);
    console.log(`last name :${String(testData.ModuleTestData?.LastName)}`);
    console.log(`zip:${String(testData.ModuleTestData?.ZipCode)}`);
    //create object for all pages
    await loginPage.goToURL();
    await loginPage.loginIntoApplication(
        String(testData.ModuleTestData?.Username), String(testData.ModuleTestData?.Password)
    );
    //Create an object for home page
    await homePage.clickOnProduct(String(testData.ModuleTestData?.Product));

    //create an object for product summary page
    await productSummaryPage.clickAddToCart(String(testData.ModuleTestData?.Product));
    await productSummaryPage.clickShoppingCartLink();
    await page.pause();
    ///create an object for Your cart page
    await cartPage.clickCheckout(String(testData.ModuleTestData?.Product));

    //create an object for Checkout: Your Information page
    await checkoutYourInformationPage.addYourInformation(
        String(testData.ModuleTestData?.Firstname),
        String(testData.ModuleTestData?.LastName),
        String(testData.ModuleTestData?.ZipCode));

    //create an object for Checkout:Overview page
    await checkoutOverviewPage.clickFinish(String(testData.ModuleTestData?.Product));

    //create an object for Checkout:Complete page
    await checkoutCompletePage.verifyOrderPlaced();
    await checkoutCompletePage.clickOnBackToHome();

    //logout
    await homePage.logoutApplication();

});