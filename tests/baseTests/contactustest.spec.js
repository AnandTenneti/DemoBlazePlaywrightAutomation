import { test } from '../baseTests/BaseTest'

test('Verify contact us ', async ({ headerPage, contactUsPage }) => {
    let senderEmail = "test@test.com", senderName = "Anand", senderMessage = "This is a demo message"
    await test.step('Click on Contact Us link', async () => {
        await headerPage.clickOnContactUsLink()
    })
    await test.step('Fill details and send message', async () => {
        await contactUsPage.
            sendContactMessage(senderEmail, senderName, senderMessage)
    })
})