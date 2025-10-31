import { expect, test } from '@playwright/test'
import { HeaderPage } from '../../pages/HeaderPage'
import { HomePage } from '../../pages/HomePage'
import { LoginPage } from '../../pages/LoginPage'

test.describe('Standalone Tests', () => {
    let homePage
    let headerPage
    let loginPage
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        headerPage = new HeaderPage(page)
        await homePage.goToApplicationPage()
    })

    test.only('Verify successful login and logout', async ({ page }) => {
        await test.step('Open login modal', async () => {
            await headerPage.clickOnLoginLink()
        })
        await test.step('Login with valid user credentials', async () => {
            await loginPage.verifyLogin("test@test.com", "test")
        })
        await test.step('Logout user', async () => {
            await headerPage.clickOnLogoutLink()
        })
    })
    test('Verify unsuccessful login with invalid user credentials', async ({page})=>{
        await test.step('Open login modal', async()=>{
            await headerPage.clickOnLoginLink()
        })
        await test.step('Login with valid user credentials', async () => {
            await loginPage.verifyLoginWithInvalidUnameAndPassword("abcd","ab")
        })
        await test.step('Verify alert message', async ()=>{
            await loginPage.verifyAlertMessage("Wrong password.")
        })
    })
})