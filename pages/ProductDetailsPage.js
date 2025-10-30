export class ProductDetailsPage {

    constructor(page) {
        this.page = page
        this.productTitle = "//*[@id='tbodyid']/h2"
        this.productPrice = "//*[@id='tbodyid']/h3"
        this.productDescription = "//*[@id='tbodyid']/div/div/div/p"
    }

    async getProductTitle() {
        const title = await this.page.locator(this.productTitle).textContent();
        // Log it
        console.log(title?.trim());
        return title
    }

    async getProductPrice() {
        const price = ((await this.page.locator(this.productPrice).textContent()).substring(1, 5)).trim();
        // Log it
        console.log(price?.trim());
        return price

    }
    async getProductDescription() {
        const description = await this.page.locator(this.productDescription).textContent();
        // Log it
        console.log(description?.trim());
        return description
    }
}