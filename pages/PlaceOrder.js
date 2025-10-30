export class PlaceOrder {
    constructor(page) {
        this.page = page
        this.name = "input#name"
        this.country = "input#country"
        this.city = "input#city"
        this.card = "input#card"
        this.month = "input#month"
        this.year = "input#year"
        this.purchaseButton = "//button[normalize-space()='Purchase']"
        this.closeBtn = "(//button[text()='Close'])[3]"
        this.okButton = "button.confirm"
    }

    async clickOnPurchaseButton() {
        this.page.once('dialog', async dialog => {
            console.log('Alert message:', dialog.message());
            await dialog.accept();
        });
        await this.page.locator(this.purchaseButton).click()
    }

    async scrollDownAndClickonPurchaseButton() {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await this.page.locator(this.purchaseBtn).click()
    }

    async clickOnCloseButton() {
        await this.page.locator(this.closeBtn).click()
    }

    // async fillUserDetails() {
    //     await this.page.locator(this.name).fill("Anand")
    //     await this.page.locator(this.card).fill("1234")
    // }
    async fillUserDetails() {
        //  await this.page.waitForSelector(this.name, { state: 'visible' });
        await this.page.fill(this.name, 'Anand');
        await this.page.fill(this.country, 'India');
        await this.page.fill(this.city, 'Chennai');
        await this.page.fill(this.card, '123456789012');
        await this.page.fill(this.month, '10');
        await this.page.fill(this.year, '2025');
    }

    async clickOnOkButton() {
        await this.page.locator(this.okButton).click()
        // await this.page.waitForTimeout(1000);

        // // Get all open pages from the browser context
        // const allPages = this.page.context().pages();

        // // Identify homepage (adjust URL as needed)
        // const homePage = allPages.find(p => p.url().includes('demoblaze.com/index.html'));

        // // Close all windows except homepage
        // for (const p of allPages) {
        //     if (p !== homePage) {
        //         await p.close().catch(() => { }); // ignore if already closed
        //     }
        // }

        // // Bring homepage to front
        // if (homePage) {
        //     await homePage.bringToFront();
        //     this.page = homePage; // update reference if you're in a POM class
        // }
    }
    async confirmPurchase() {
        await this.page.click(this.purchaseButton);
        await this.page.waitForSelector('.sweet-alert', { state: 'visible' });
        const successText = await this.page.textContent('.sweet-alert');
        console.log('Purchase confirmation:', successText);
    }

    async closeWindowAndReturn(mainPage) {
        await this.page.close(); // close current place order tab/window
        await mainPage.bringToFront(); // focus back to main window
    }
}