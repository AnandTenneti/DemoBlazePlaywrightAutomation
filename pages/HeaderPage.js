import { expect } from '@playwright/test';
/**
 * HeaderPage class encapsulates all user interactions and elements
 * related to the navigation bar of the Demoblaze web application.
 * This includes actions such as navigating to Cart, Login, Signup,
 * Contact Us, and performing Logout.
 */
export class HeaderPage {
  constructor(page) {
    this.page = page;

    // Header navigation locators
    this.aboutus = "//a[normalize-space()='About us']";
    this.contactus = "//a[normalize-space()='Contact']";
    this.login = 'a#login2';
    this.signup = 'a#signin2';
    this.cart = 'a#cartur';
    this.logout = 'a#logout2';
  }

  /**
   * Clicks on the Cart link in the header and waits for the page to fully load.
   * Useful for navigating to the cart page after adding products.
   *
   * @returns {Promise<void>}
   */
  async clickOnCartLink() {
    await this.page.locator(this.cart).click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Clicks on the Login link in the header to open the login modal.
   * @returns {Promise<void>}
   */
  async clickOnLoginLink() {
    await this.page.locator(this.login).click();
  }

  /**
   * Clicks on the Logout link after ensuring it is visible.
   * Ensures a reliable logout action by waiting for the link to appear first.
   *
   * @returns {Promise<void>}
   */
  async clickOnLogoutLink() {
    const logoutLink = this.page.locator(this.logout);
    await logoutLink.waitFor({ state: 'visible' });
    await logoutLink.click();
  }
  /**
   * Clicks on the "Contact Us" link in the header to open the contact form modal.
   * @returns {Promise<void>}
   */
  async clickOnContactUsLink() {
    await this.page.locator(this.contactus).click();
  }

  /**
   * Clicks on the Signup link and waits for the signup modal to become visible.
   * @returns {Promise<void>}
   */
  async clickOnSignupLink() {
    await this.page.locator(this.signup).click();
    await this.page.locator('#signInModal').waitFor({ state: 'visible' });
  }

  /**
   * Verifies that the Logout link is visible and performs a logout action.
   * Typically used after successful login to confirm logout functionality.
   * @returns {Promise<void>}
   */
  async verifyLogoutLink() {
    await expect(this.page.locator(this.logoutLink)).toBeVisible();
    await this.page.locator(this.logoutLink).click();
  }
}
