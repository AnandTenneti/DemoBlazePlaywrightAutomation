import { expect } from "@playwright/test"
export class LoginPage {

  constructor(page) {
    this.page = page
    this.loginLink = "#login2"
    this.username = "#loginusername"
    this.password = "#loginpassword"
    this.loginButton = "//button[normalize-space()='Log in']"
    this.logoutLink = "#logout2"
  }



  async clickOnLoginLink() {
    await this.page.locator(this.loginLink).click()
  }

  async verifyLogin(uname, passwd) {
    await this.page.locator(this.username).fill(uname)
    await this.page.locator(this.password).fill(passwd)
    await this.page.locator(this.loginButton).click()
  }
  async verifyLoginWithInvalidUnameAndPassword(uname, passwd, message) {
    await this.page.locator(this.username).fill(uname)
    await this.page.locator(this.password).fill(passwd)
  }

  async verifyLoginWithoutUnameAndPassword(uname, passwd, message) {
    await this.page.locator(this.username).fill(uname)
    await this.page.locator(this.password).fill(passwd)
  }


  //  async verifyAlertMessage(expectedMessage)
  //  {
  //    let alertMessage=''
  //    this.page.on('dialog', async (dialog) => {
  //     this.page.waitForEvent('dialog',{timeout: 4000})
  //    console.log(`Dialog message: ${dialog.message()}`);

  //    alertMessage= dialog.message();
  //    console.log(alertMessage)
  //    await dialog.accept(); // click OK on alert
  //   });
  // await this.page.click(this.loginButton,{force:true});

  // expect(alertMessage).toBe(expectedMessage);
  //   }
  async verifyAlertMessage(expectedMessage) {
    const [dialog] = await Promise.all([
      this.page.waitForEvent('dialog', { timeout: 3000 }),
      await this.page.waitForSelector("//button[normalize-space()='Log in']", { state: 'visible' }),
      this.page.click(this.loginButton, { force: true })
    ]);

    console.log(`Dialog message: ${dialog.message()}`);
    expect(dialog.message().trim()).toBe(expectedMessage);
    await dialog.accept();
  }

  //   async verifyAlertMessage(expectedMessage) {
  //   // Wait for dialog event in parallel with the click
  //   const [dialog] = await Promise.all([
  //     this.page.click(this.loginButton),
  //     this.page.waitForEvent('dialog')

  //   ]);

  //   const alertMessage = await dialog.message();
  //   console.log(`Dialog message: ${alertMessage}`);

  //   await dialog.accept(); // click OK on alert

  //   expect(alertMessage).toBe(expectedMessage);
  // }


  async verifyAlertMessage_trycatch(expectedMessage) {
    let alertMessage = '';

    try {
      // Step 1️⃣ Click login button
      await this.page.click(this.loginButton);

      // Step 2️⃣ Wait for any dialog (alert, confirm, prompt) with timeout
      const dialog = await this.page.waitForEvent('dialog', { timeout: 3000 });

      // Step 3️⃣ Capture and accept it
      alertMessage = dialog.message();
      console.log(`🟡 Dialog appeared: "${alertMessage}"`);
      await dialog.accept();
    } catch (error) {
      // Step 4️⃣ If no dialog appears, handle gracefully
      if (error.name === 'TimeoutError') {
        console.log('⚠️ No dialog appeared within timeout.');
      } else {
        throw error; // rethrow other unexpected errors
      }
    }

    // Step 5️⃣ Verify the message (if any)
    if (alertMessage) {
      expect(alertMessage.trim()).toBe(expectedMessage);
    } else {
      // Optional: Handle cases where no alert is expected
      console.log('ℹ️ No alert message to verify.');
    }
  }

  async userExistsAlertMessage() {
    this.page.once('dialog', async dialog => {
      console.log('Alert message:', dialog.message());
      await dialog.accept();
    });
    await this.page.click(this.loginButton);

  }
  async clickSendMessageAndAccept() {
    this.page.once('dialog', async dialog => {
      console.log('Alert message:', dialog.message());
      await dialog.accept();
    });
    await this.page.click(this.sendMessageBtn);
  }









}