import { test, expect } from '../baseTests/BaseTest';

test.skip('Place order validation message', async ({ homePage, cartPage, placeOrderPage }) => {
  await test.step('Navigate to cart and open place order modal', async () => {
    await homePage.gotoCart();
  });
  await test.step('Click on Place Order button', async () => {
    await cartPage.clickOnPlaceOrderButton();
  });
  await test.step('Click on Purchase button without filling details', async () => {
    await placeOrderPage.clickOnPurchaseButton();
  });
  await test.step('Verify validation message appears', async () => {
    const alertMessage = await placeOrderPage.getAlertMessage();
    expect(alertMessage).toContain('Please fill out Name and Creditcard'); // flexible match
  });
  await test.step('Click on close button', async () => {
    await placeOrderPage.clickOnCloseButton();
  });
});

// This test is skipped because some functions require further implementation
test.skip('Place order confirmation', async ({ homePage, cartPage, placeOrderPage }) => {
  homePage.gotoCart();
  cartPage.clickOnPlaceOrderButton();
  placeOrderPage.fillUserDetails();
  placeOrderPage.confirmPurchase();

  placeOrderPage.scrollDownAndClickonPurchaseButton();
  placeOrderPage.clickOnPurchaseButton();
  placeOrderPage.clickOnOkButton();
  placeOrderPage.clickOnCloseButton();
});
