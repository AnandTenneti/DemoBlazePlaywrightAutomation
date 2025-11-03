import { test, expect } from '../baseTests/BaseTest.spec'

let productName = "Nexus 6"
let productPositionInCart=1

test.beforeEach(async ({ homePage }) => {
    await homePage.addProductToCart(productName)
    await homePage.gotoCart()
});

test('Verify Product added to cart', async ({ cartPage }) => {
    await expect(await cartPage.isProductInCart(productName)).toBeTruthy()
})

test('Get product details', async ({ cartPage }) => {
    let sumOfProductPricesInCart, totalPrice
    await test.step('Get the sum of all prices of items in the cart', async () => {
        sumOfProductPricesInCart = await cartPage.getProductPrice()
    })
    await test.step('Get total price in the cart', async () => {
        totalPrice = await cartPage.getTotalPrice()
    })
    await test.step('Verify sum of individual prices of products and the total price', async () => {
        expect(sumOfProductPricesInCart).toBe(totalPrice)
    })
})

test('Delete selected product by name', async ({ cartPage }) => {
    await cartPage.deleteProductByName(productName)
})

test('Delete selected product by index', async ({ cartPage }) => {
    await cartPage.deleteProductByIndex(productPositionInCart)
})