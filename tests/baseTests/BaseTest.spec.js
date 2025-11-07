
import { test as base } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage'
import { HeaderPage } from '../../pages/HeaderPage';
import { HomePage } from '../../pages/HomePage'
import { ProductDetailsPage } from '../../pages/ProductDetailsPage'
import { ContactUs } from '../../pages/ContactUsPage';
import { CartPage } from '../../pages/CartPage';
import {PlaceOrder} from '../../pages/PlaceOrder'
import { categoryData } from '../../testdata/testdata';


// Extend Playwright's base test
export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  headerPage: async ({ page }, use) => {
    const headerPage = new HeaderPage(page);
    await use(headerPage);
  },
  productDetailsPage: async ({ page }, use) => {
    const productDetailsPage = new ProductDetailsPage(page);
    await use(productDetailsPage);
  },
  contactUsPage: async ({ page }, use) => {
    const contactUsPage = new ContactUs(page);
    await use(contactUsPage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
  placeOrderPage: async ({ page }, use) => {
    const placeOrderPage = new PlaceOrder(page);
    await use(placeOrderPage);
  },
});
test.beforeEach(async ({loginPage, headerPage, homePage }) => {
  await homePage.goToApplicationPage()
  await headerPage.clickOnLoginLink()
  await loginPage.verifyLogin("test@test.com", "test")
});
test.afterEach(async ({ page, headerPage }) => {
  await headerPage.clickOnLogoutLink()
})

// Export expect for convenience
export { expect } from '@playwright/test';
