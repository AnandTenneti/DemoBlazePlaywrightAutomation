import { test, expect } from '../tests/BaseTest.spec'

test('Place order validation message', async ({ homePage, cartPage, placeOrderPage }) => {
    homePage.gotoCart()
    cartPage.clickOnPlaceOrderButton()
    placeOrderPage.clickOnPurchaseButton()
    placeOrderPage.clickOnCloseButton()

})
test.skip('Place order confirmation', async ({ homePage, cartPage, placeOrderPage }) => {
    homePage.gotoCart()
    cartPage.clickOnPlaceOrderButton()
    placeOrderPage.fillUserDetails()
    placeOrderPage.confirmPurchase()
    //placeOrderPage.scrollDownAndClickonPurchaseButton()
    //placeOrderPage.clickOnPurchaseButton()
    placeOrderPage.clickOnOkButton()
    //placeOrderPage.clickOnCloseButton()
})