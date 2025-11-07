import { expect } from '@playwright/test';
export class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.username = '#loginusername';
    this.password = '#loginpassword';
    this.loginButton = "//button[normalize-space()='Log in']";
  }

  /**
   * Performs a valid login attempt by entering credentials
   * and clicking the "Log in" button.
   * @param {string} uname - The username or email to log in.
   * @param {string} passwd - The user's password.
   * @returns {Promise<void>}
   */
  async verifyLogin(uname, passwd) {
    await this.page.locator(this.username).fill(uname);
    await this.page.locator(this.password).fill(passwd);
    await this.page.locator(this.loginButton).click();
  }

  /**
   * Fills in invalid username and password fields to simulate a failed login attempt.
   * The method only inputs data — use `verifyAlertMessage()` to handle the alert.
   * @param {string} uname - The invalid username.
   * @param {string} passwd - The invalid password.
   * @returns {Promise<void>}
   */
  async verifyLoginWithInvalidUnameAndPassword(uname, passwd, message) {
    await this.page.locator(this.username).fill(uname);
    await this.page.locator(this.password).fill(passwd);
  }

  /**
   * Attempts login without providing username and password.
   * Only fills the fields (if any), does not click the button.
   * @param {string} uname - Empty or undefined username.
   * @param {string} passwd - Empty or undefined password.
   * @returns {Promise<void>}
   */
  async verifyLoginWithoutUnameAndPassword(uname, passwd, message) {
    await this.page.locator(this.username).fill(uname);
    await this.page.locator(this.password).fill(passwd);
  }

  /**
   * Handles and verifies alert dialogs triggered during invalid login attempts.
   * Asserts the alert text matches the expected message and accepts it.
   * @param {string} expectedMessage - The expected alert dialog message.
   * @returns {Promise<void>}
   */
  async verifyAlertMessage(expectedMessage) {
    const [dialog] = await Promise.all([
      this.page.waitForEvent('dialog', { timeout: 3000 }),
      await this.page.waitForSelector("//button[normalize-space()='Log in']", { state: 'visible' }),
      this.page.click(this.loginButton, { force: true }),
    ]);

    console.log(`Dialog message: ${dialog.message()}`);
    expect(dialog.message().trim()).toBe(expectedMessage);
    await dialog.accept();
  }
}
