export class HomePage {

    constructor(page) {
        this.page = page
        this.productList = "//*[@id='tbodyid']/div/div/div/h4/a"
        this.addToCartBtn = "//a[normalize-space()='Add to cart']"
        this.cart = "#cartur"
        this.categories = "a#itemc"
        this.results = "div#tbodyid>div>div>a"
        this.carouselNextButton = "a.carousel-control-next"
        this.carouselPrevButton = "a[data-slide='prev']"
        this.carouselImage = "div.carousel-item.active>img[alt]"
        this.nextButton = "button#next2"
        this.prevButton = "button#prev2"
    }

    async goToApplicationPage() {
        await this.page.goto("https://demoblaze.com/")
    }

    async checkProductInCart(productName) {
        const productsInCart = await this.page.$$(this.noOfProducts)
        for (const product of productsInCart) {
            console.log(await product.textContent())
            if (productName === await product.textContent()) {
                return true;
                break;
            }
        }
    }

    async selectCategories(categoryName) {
        const categories = this.page.locator(this.categories);
        const count = await categories.count();

        for (let i = 0; i < count; i++) {
            const text = (await categories.nth(i).textContent())?.trim();
            console.log(text);
            if (text === categoryName) {
                await categories.nth(i).click();
                break;
            }
        }
        await this.page.waitForTimeout(4000)
    }
    async getProductCountInCategory() {
        const products = await this.page.locator(this.results)
        await this.page.waitForTimeout(4000)
        return await products.count();
    }

    async addProductToCart(productName) {
        // Wait for the list to appear
        await this.page.waitForSelector(this.productList);

        // Create a locator for all products
        const products = this.page.locator(this.productList);
        const count = await products.count();
        console.log(count)

        for (let i = 0; i < count; i++) {
            const name = (await products.nth(i).textContent())?.trim();


            if (name === productName) {
                console.log(name)
                // Click the matching product
                await products.nth(i).click();

                // Handle "added" dialog if it appears
                this.page.once('dialog', async dialog => {
                    this.page.waitForTimeout(5000)
                    if (dialog.message().includes('added')) {
                        await dialog.accept();
                    }
                });

                // Click "Add to Cart" button
                await this.page.locator(this.addToCartBtn).click();
                break;
            }
        }
    }

    async clickOnAProduct(productName) {
        // Wait for the list to appear
        await this.page.waitForSelector(this.productList);

        // Create a locator for all products
        const products = this.page.locator(this.productList);
        const count = await products.count();
        console.log(count)

        for (let i = 0; i < count; i++) {
            const name = (await products.nth(i).textContent())?.trim();
            if (name === productName) {
                // Click the matching product
                await products.nth(i).click();
                break;
            }
        }
    }
    async gotoCart() {
        await this.page.locator(this.cart).click();
        await this.page.waitForTimeout(4000)
        //await this.page.locator('#tbodyid').waitFor({ state: 'visible' }); // Wait for cart table
    }
    // async gotoCart() {
    //     await this.page.locator(this.cart).click()
    //     await this.page.waitForTimeout(4000)
    // }
    //    async gotoCart() {
    //     await Promise.all([
    //         this.page.waitForLoadState('networkidle'),
    //         this.page.locator(this.cart).click()
    //     ]);

    // Wait for a stable element that appears only in cart
    //     await this.page.locator('#tbodyid').waitFor({ state: 'visible' });
    // }

    async goToNextSlide() {
        const cnextButton = await this.page.locator(this.carouselNextButton)
        await cnextButton.waitFor({ state: 'visible' })
        console.log('Clicking on Carousel next button')
        await cnextButton.click()
        await this.page.waitForTimeout(4000)
    }
    async goToPreviousSlide() {
        const prevButton = await this.page.locator(this.prevButton)
        await prevButton.waitFor({ state: 'visible' })
        console.log('Click on Carousel Prev button')
        await prevButton.click()

    }

    async getCurrentCarouselImage() {
        const locator = this.page.locator(this.carouselImage);
        await locator.waitFor({ state: 'visible' });
        const currentImageSrc = await locator.getAttribute('src');
        console.log('Current carousel image:', currentImageSrc);
        return currentImageSrc;
    }

    async scrollPageToBottom() {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        console.log('Scrolling to the bottom of the page')
    }

    async goToNextPage() {
        const nextButton = await this.page.locator(this.nextButton)
        await nextButton.waitFor({ state: 'visible' })
        await nextButton.click()
    }


}