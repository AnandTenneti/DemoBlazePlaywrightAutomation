export class ContactUs {
  constructor(page) {
    this.page = page;
    // Locators
    this.contactEmail = 'input#recipient-email';
    this.contactName = 'input#recipient-name';
    this.message = 'textarea#message-text';
    this.sendMessageBtn = "//button[normalize-space()='Send message']";
    this.closeBtn = "(//button[text()='Close'])[1]";
  }

  /**
   * Sends a contact message through the website's contact form.
   * Fills in the user's email, name, and message fields, then submits the form.
   * Handles the alert dialog that appears after submission by logging its message
   * and accepting it.
   *
   * @param {string} email - The email address to enter in the contact form.
   * @param {string} name - The sender's name.
   * @param {string} demommessage - The message to send.
   * @returns {Promise<void>}
   */

  async sendContactMessage(email, name, demommessage) {
    await this.page.locator(this.contactEmail).fill(email);
    await this.page.locator(this.contactName).fill(name);
    await this.page.locator(this.message).fill(demommessage);
    this.page.once('dialog', async (dialog) => {
      console.log('Alert message:', dialog.message());
      await dialog.accept();
    });
    await this.page.click(this.sendMessageBtn);
  }
  async clickOnCloseButton() {
    await this.page.locator(this.closeBtn).click();
  }
}
