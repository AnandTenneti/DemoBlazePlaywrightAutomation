export class SignUpPage {
    constructor(page) {
        this.page = page
        this.username = "input#sign-username"
        this.password = "input#sign-password"
        this.signUpBtn = "//button[normalize-space()='Sign up']"
    }

    async verifySignUp(username, password) {
        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).fill(password)
    }

    // async verifyExistingUserAlert() {
    //     this.page.once('dialog', async dialog => {
    //         console.log('Alert message:', dialog.message());
    //         await dialog.accept();
    //     });
    //     await this.page.click(this.signUpBtn);
    //     await this.page.waitForTimeout(4000)

    // }
    async verifyExistingUserAlert() {
    const dialogPromise = new Promise(resolve => {
        this.page.once('dialog', async dialog => {
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
    const dialogPromise = new Promise(resolve => {
        this.page.once('dialog', async dialog => {
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
