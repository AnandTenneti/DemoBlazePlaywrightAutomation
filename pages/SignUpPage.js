/**
 * SignUpPage class handles all elements and actions
 * related to the user registration (Sign-Up) functionality
 * on the Demoblaze web application.
 */
export class SignUpPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.username = 'input#sign-username';
    this.password = 'input#sign-password';
    this.signUpBtn = "//button[normalize-space()='Sign up']";
  }

  /**
   * Fills in the username and password fields on the sign-up form.
   * @param {string} username - The desired username for sign-up.
   * @param {string} password - The desired password for sign-up.
   * @returns {Promise<void>}
   */
  async verifySignUp(username, password) {
    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.password).fill(password);
  }
  /**
   * Clicks the "Sign Up" button and handles the alert dialog
   * for an existing user scenario (e.g., "This user already exists.").
   * @returns {Promise<string>} The text message displayed in the alert dialog.
   */
  async verifyExistingUserAlert() {
    const dialogPromise = new Promise((resolve) => {
      this.page.once('dialog', async (dialog) => {
        const message = dialog.message();
        console.log(`Alert message: ${message}`);
        await dialog.accept();
        resolve(message);
      });
    });

    await this.page.click(this.signUpBtn);
    const alertMessage = await dialogPromise;
    await this.page.waitForTimeout(2000);

    return alertMessage;
  }
  async verifyUserAlert() {
    const dialogPromise = new Promise((resolve) => {
      this.page.once('dialog', async (dialog) => {
        const message = dialog.message();
        console.log(`Alert message: ${message}`);
        await dialog.accept();
        resolve(message);
      });
    });

    await this.page.click(this.signUpBtn);
    const alertMessage = await dialogPromise;
    await this.page.waitForTimeout(2000);

    return alertMessage;
  }
}
