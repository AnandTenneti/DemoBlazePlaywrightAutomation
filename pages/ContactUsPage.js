export class ContactUs {

    constructor(page) {
        this.page = page
        this.contactEmail = "input#recipient-email"
        this.contactName = "input#recipient-name"
        this.message = "textarea#message-text"
        this.sendMessageBtn = "//button[normalize-space()='Send message']"
        this.closeBtn = "(//button[text()='Close'])[1]"
    }

    async sendMessageToSite(email, name, demommessage) {
        await this.page.locator(this.contactEmail).fill(email)
        await this.page.locator(this.contactName).fill(name)
        await this.page.locator(this.message).fill(demommessage)
         this.page.once('dialog', async dialog => {
            console.log('Alert message:', dialog.message());
            await dialog.accept();
        });
        await this.page.click(this.sendMessageBtn);
    }
    // async clickSendMessageAndAccept() {
    //     this.page.once('dialog', async dialog => {
    //         console.log('Alert message:', dialog.message());
    //         await dialog.accept();
    //     });
    //     await this.page.click(this.sendMessageBtn);
    // }
    async clickOnCloseButton() {
        await this.page.locator(this.closeBtn).click()
    }


}