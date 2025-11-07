/**
 * HomePage class encapsulates all locators and user actions
 * related to the Demoblaze home page, including product navigation,
 * category selection, cart operations, and carousel controls.
 */
export class HomePage {
  constructor(page) {
    this.page = page;

    // Locators
    this.productList = "//*[@id='tbodyid']/div/div/div/h4/a";
    this.addToCartBtn = "//a[normalize-space()='Add to cart']";
    this.cart = '#cartur';
    this.categories = 'a#itemc';
    this.results = 'div#tbodyid>div>div>a';
    this.carouselNextButton = 'a.carousel-control-next';
    this.carouselPrevButton = "a[data-slide='prev']";
    this.carouselImage = 'div.carousel-item.active>img[alt]';
    this.nextButton = 'button#next2';
    this.prevButton = 'button#prev2';
  }

  /**
   * Navigates to the Demoblaze homepage.
   * @returns {Promise<void>}
   */
  async goToApplicationPage() {
    await this.page.goto('https://demoblaze.com/');
  }

  /**
   * Checks if a given product exists in the cart.
   * @param {string} productName - The name of the product to verify.
   * @returns {Promise<boolean>} True if the product is found, otherwise false.
   */
  async checkProductInCart(productName) {
    const productsInCart = await this.page.$$(this.noOfProducts);
    for (const product of productsInCart) {
      console.log(await product.textContent());
      if (productName === (await product.textContent())) {
        return true;
        break;
      }
    }
  }

  /**
   * Selects a category by its name from the category list.
   * @param {string} categoryName - The category to select.
   * @returns {Promise<void>}
   */
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
    await this.page.waitForTimeout(4000);
  }

  /**
   * Gets the total number of products visible in the current category.
   * @returns {Promise<number>} The number of products.
   */
  async getProductCountInCategory() {
    const products = await this.page.locator(this.results);
    await this.page.waitForTimeout(4000);
    return await products.count();
  }

  /**
   * Adds a specified product to the shopping cart.
   * Waits for the "Add to cart" alert and accepts it.
   * @param {string} productName - The product name to add to the cart.
   * @returns {Promise<void>}
   */
  async addProductToCart(productName) {
    // Wait for the list to appear
    await this.page.waitForSelector(this.productList);

    // Create a locator for all products
    const products = this.page.locator(this.productList);
    const count = await products.count();
    console.log(count);

    for (let i = 0; i < count; i++) {
      const name = (await products.nth(i).textContent())?.trim();

      if (name === productName) {
        console.log(name);
        // Click the matching product
        await products.nth(i).click();

        // Handle "added" dialog if it appears
        this.page.once('dialog', async (dialog) => {
          this.page.waitForTimeout(5000);
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

  /**
   * Clicks on a product from the product list by name to open its details page.
   * @param {string} productName - The name of the product to open.
   * @returns {Promise<void>}
   */
  async clickOnAProduct(productName) {
    // Wait for the list to appear
    await this.page.waitForSelector(this.productList);

    // Create a locator for all products
    const products = this.page.locator(this.productList);
    const count = await products.count();
    console.log(count);

    for (let i = 0; i < count; i++) {
      const name = (await products.nth(i).textContent())?.trim();
      if (name === productName) {
        // Click the matching product
        await products.nth(i).click();
        break;
      }
    }
  }

  /**
   * Navigates to the cart page from the header.
   * @returns {Promise<void>}
   */
  async gotoCart() {
    await this.page.locator(this.cart).click();
    await this.page.waitForTimeout(4000);
  }

  /**
   * Clicks on the "Next" button in the homepage carousel.
   * @returns {Promise<void>}
   */
  async goToNextSlide() {
    const cnextButton = await this.page.locator(this.carouselNextButton);
    await cnextButton.waitFor({ state: 'visible' });
    console.log('Clicking on Carousel next button');
    await cnextButton.click();
    await this.page.waitForTimeout(4000);
  }

  /**
   * Clicks on the "Previous" button in the homepage carousel.
   * @returns {Promise<void>}
   */
  async goToPreviousSlide() {
    const prevButton = await this.page.locator(this.prevButton);
    await prevButton.waitFor({ state: 'visible' });
    console.log('Click on Carousel Prev button');
    await prevButton.click();
  }

  /**
   * Gets the currently visible carousel image source.
   *
   * @returns {Promise<string>} The image source URL.
   */
  async getCurrentCarouselImage() {
    const locator = this.page.locator(this.carouselImage);
    await locator.waitFor({ state: 'visible' });
    const currentImageSrc = await locator.getAttribute('src');
    console.log('Current carousel image:', currentImageSrc);
    return currentImageSrc;
  }

  /**
   * Scrolls the webpage to the bottom.
   * @returns {Promise<void>}
   */
  async scrollPageToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    console.log('Scrolling to the bottom of the page');
  }

  /**
   * Clicks the "Next" button on the product pagination section.
   * @returns {Promise<void>}
   */
  async goToNextPage() {
    const nextButton = await this.page.locator(this.nextButton);
    await nextButton.waitFor({ state: 'visible' });
    await nextButton.click();
  }
}
