import { expect, test } from '@playwright/test'
import { HeaderPage } from '../../pages/HeaderPage'
import { HomePage } from '../../pages/HomePage'
import { SignUpPage } from '../../pages/SignUpPage'

test.describe('Standalone Tests', () => {
    let homePage
    let headerPage
    let signUpPage
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        signUpPage = new SignUpPage(page)
        headerPage = new HeaderPage(page)
        await homePage.goToApplicationPage()
    })

    test('Verify existing user signup', async ({ }) => {
        await test.step('Click on SignupLink in HomePage', async () => {
            await headerPage.clickOnSignupLink()
        })
        await test.step('Verify new user signup', async () => {
            await signUpPage.verifySignUp("a", "a")
        })
        await test.step('Verify alert message displayed', async () => {
            const alertMessage = await signUpPage.verifyExistingUserAlert()
            expect(alertMessage).toBe("This user already exist.")
        })

    })
    test('Verify user signup without providing details', async ({ }) => {
        await test.step('Click on SignupLink in HomePage', async () => {
            await headerPage.clickOnSignupLink()
        })
        await test.step('Click on Signup button and verify alert message displayed', async () => {
            const alertMessage = await signUpPage.verifyUserAlert()
            expect(alertMessage).toBe("Please fill out Username and Password.")
        })
    })
})