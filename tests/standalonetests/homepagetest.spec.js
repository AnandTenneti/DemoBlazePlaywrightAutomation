import { expect, test } from '@playwright/test'
import { HeaderPage } from '../../pages/HeaderPage'
import { HomePage } from '../../pages/HomePage'


test.describe('Standalone Tests', () => {
    let homePage
    let headerPage
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        headerPage = new HeaderPage(page)
        await homePage.goToApplicationPage()
    })

    test('Click on Next Pagination button', async ({ }) => {
        await test.step('Scroll to the bottom of the page', async () => {
            await homePage.scrollPageToBottom()
        })
        await test.step('Navigate to the next page', async () => {
            await homePage.goToNextPage()
        })

    })
    test('Get Carousel Image', async ({ }) => {
        let currentImage, updatedImage
        await test.step('Get current carousel image', async () => {
            currentImage = await homePage.getCurrentCarouselImage()
        })
        await test.step('Go to next slide', async () => {
            await homePage.goToNextSlide()
        })
        await test.step(' Get updated carousel image', async () => {
            updatedImage = await homePage.getCurrentCarouselImage()
            console.log(updatedImage)

        })
        await test.step('Verify carousel image has changed', async () => {
            expect(updatedImage).not.toBe(currentImage)
        })

    })

    test('Get Product Category', async () => {
        const categoryName = "Phones"
        await test.step('Select Phone category', async () => {
            await homePage.selectCategories(categoryName)
        })
        await test.step('Verify number of products in category', async () => {
            const count = await homePage.getProductCountInCategory();
            console.log(`Total Products count category wise: ${count}`)
            expect(count).toBeGreaterThan(0)
        })
    })
})