import { expect } from '@playwright/test'
export class HeaderPage {
    constructor(page) {
        this.page = page
        this.aboutus = "//a[normalize-space()='About us']"
        this.contactus = "//a[normalize-space()='Contact']"
        this.login = "a#login2"
        this.signup = "a#signin2"
        this.cart = "a#cartur"
        this.logout = "a#logout2"
    }
    /* Define the methods */
    async clickOnCartLink() {
        await this.page.locator(this.cart).click()
        await this.page.waitForLoadState('networkidle')
    }
    async clickOnLoginLink() {
        await this.page.locator(this.login).click()

    }
    async clickOnLogoutLink() {
        const logoutLink = this.page.locator(this.logout);
        await logoutLink.waitFor({ state: 'visible' });
        await logoutLink.click();
    }
    async clickOnContactUsLink() {
        await this.page.locator(this.contactus).click()
    }
    async clickOnSignupLink() {
        await this.page.locator(this.signup).click()
        await this.page.locator('#signInModal').waitFor({ state: 'visible' });
    }

    async verifyLogoutLink() {
        await expect(this.page.locator(this.logoutLink)).toBeVisible();
        await this.page.locator(this.logoutLink).click()
    }
  

}