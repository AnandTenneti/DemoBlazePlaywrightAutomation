import { toNumber } from "../utils/utilities"
export class CartPage {
    constructor(page) {
        this.page = page
        this.noOfProducts = "//tbody[@id='tbodyid']/tr"
        this.productNames = "//tbody[@id='tbodyid']/tr/td[2]"
        this.productPrices = "tbody#tbodyid>tr>td:nth-child(3)"
        this.deleteButton = "//tbody[@id='tbodyid']/tr/td[4]"
        this.placeOrderButton = "//button[normalize-space()='Place Order']"
        this.categories = "a#itemc"
        this.totalPrice = "h3#totalp"
    }

    async deleteProductByName(prodName) {
        await this.page.waitForTimeout(4000);
        const products = this.page.locator(this.noOfProducts);
        const count = await products.count();
        for (let i = 0; i < count; i++) {
            const productName = await products.nth(i).locator('xpath=/td[2]').textContent();
            if (productName === prodName) {
                await products.nth(i).locator('xpath=/td[4]/a').click()
                console.log(`Deleted product: ${prodName}`);
                break
            }

        }
        await this.page.waitForTimeout(5000)
    }

    async deleteProductByIndex(position) {
        const productDeleteLink = this.page.locator(`//tbody[@id='tbodyid']/tr[${position}]/td[4]/a`);

        // Wait for the delete link to be visible and clickable
        await productDeleteLink.waitFor({ state: 'visible' });

        // Click the delete link
        await productDeleteLink.click();

        // Wait for the product row to be removed (instead of using fixed timeouts)
        await this.page.waitForSelector(`//tbody[@id='tbodyid']/tr[${position}]`, { state: 'detached', timeout: 5000 });
    }

    async getProductPrice() {
        let sum = 0;

        await this.page.waitForTimeout(4000);

        // Get all product rows
        const products = this.page.locator(this.noOfProducts);
        const count = await products.count();
        console.log(`Number of products: ${count}`);

        for (let i = 0; i < count; i++) {
            // Locate the 3rd column in each row (price column)
            const priceText = await products.nth(i).locator('xpath=/td[3]').textContent();

            // Convert price to number (remove currency symbols or spaces if any)
            const productPrice = toNumber(priceText)

            console.log(productPrice);
            sum += productPrice;
        }

        console.log(`Total Price Sum: ${sum}`);
        return sum
    }

    async isProductInCart(productName) {
        const products = this.page.locator(this.noOfProducts);
        const count = await products.count();

        for (let i = 0; i < count; i++) {
            const name = (await products.nth(i).locator('xpath=/td[2]').textContent())?.trim();
            if (name === productName.trim()) {
                return true;
            }
        }
        return false;
    }

    async checkProductInCartAndDelete(productName) {
        const productsInCart = await this.page.$$(this.noOfProducts)
        for (const product of productsInCart) {
            console.log(await product.textContent())
            if (productName === await product.textContent()) {
                await this.page.locator(this.deleteButton).click()
                break;
            }
        }
    }
    async clickOnPlaceOrderButton() {
        await this.page.waitForLoadState('domcontentloaded');

        // Wait explicitly for the button to be visible and enabled
        const placeOrderBtn = this.page.locator(this.placeOrderButton);
        await placeOrderBtn.waitFor({ state: 'visible' });

        // Now safely click
        await placeOrderBtn.click();
    }

    async getTotalPrice() {
        const totalPriceTextContent = await this.page.locator(this.totalPrice).textContent()
        return toNumber(totalPriceTextContent)
    }
}

