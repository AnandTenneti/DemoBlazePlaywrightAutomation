import { toNumber } from '../utils/utilities';
/**
 * CartPage class encapsulates all operations and locators
 * related to the shopping cart page in the Demoblaze application.
 */
export class CartPage {
  constructor(page) {
    this.page = page;
    // Locators
    this.noOfProducts = "//tbody[@id='tbodyid']/tr";
    this.productNames = "//tbody[@id='tbodyid']/tr/td[2]";
    this.productPrices = 'tbody#tbodyid>tr>td:nth-child(3)';
    this.deleteButton = "//tbody[@id='tbodyid']/tr/td[4]";
    this.placeOrderButton = "//button[normalize-space()='Place Order']";
    this.categories = 'a#itemc';
    this.totalPrice = 'h3#totalp';
  }

  /**
   * Deletes product by specifying the product name of the item in the cart
   * @param {string} prodName -- name of the product in the cart
   */

  async deleteProductByName(prodName) {
    await this.page.waitForTimeout(4000);
    const products = this.page.locator(this.noOfProducts);
    const count = await products.count();
    for (let i = 0; i < count; i++) {
      const productName = (await products.nth(i).locator('xpath=/td[2]').textContent()).trim();
      if (productName === prodName) {
        await products.nth(i).locator('xpath=/td[4]/a').click();
        console.log(`Deleted product: ${prodName}`);
        break;
      }
    }
    await this.page.waitForTimeout(5000);
  }

  /**
   * Deletes product by specifying the position of the item in the cart
   * @param {integer} position -- position of the element in the cart
   */
  async deleteProductByIndex(position) {
    const productDeleteLink = this.page.locator(`//tbody[@id='tbodyid']/tr[${position}]/td[4]/a`);

    // Wait for the delete link to be visible and clickable
    await productDeleteLink.waitFor({ state: 'visible' });

    // Click the delete link
    await productDeleteLink.click();

    // Wait for the product row to be removed (instead of using fixed timeouts)
    await this.page.waitForSelector(`//tbody[@id='tbodyid']/tr[${position}]`, {
      state: 'detached',
      timeout: 5000,
    });
  }
  /**
   *  Calculates and returns the total sum of all product prices
   * listed in the cart.
   * Waits briefly for the cart to load before computing.
   * @returns {Promise<number>} The total price of all products in the cart.
   */
  async calculateTotalProductPrice() {
    let sum = 0;
    // Wait for cart items to render
    await this.page.waitForTimeout(4000);

    // Get all product rows
    const products = this.page.locator(this.noOfProducts);
    const count = await products.count();
    console.log(`Number of products: ${count}`);

    for (let i = 0; i < count; i++) {
      // Locate the 3rd column in each row (price column)
      const priceText = await products.nth(i).locator('xpath=/td[3]').textContent();

      // Convert price to number (remove currency symbols or spaces if any)
      const productPrice = toNumber(priceText);

      console.log(productPrice);
      sum += productPrice;
    }

    console.log(`Total Price Sum: ${sum}`);
    return sum;
  }
  /**
   * Verifies whether a specific product is present in the cart.
   * Iterates through all product rows and checks if any product name
   * matches the provided `productName`.
   *
   * @param {string} productName - The name of the product to verify in the cart.
   * @returns {Promise<boolean>} Returns `true` if the product exists in the cart, otherwise `false`.
   */
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
    const productsInCart = await this.page.$$(this.noOfProducts);
    for (const product of productsInCart) {
      console.log(await product.textContent());
      if (productName === (await product.textContent())) {
        await this.page.locator(this.deleteButton).click();
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

  /**
   * Retrieves the total price displayed in the cart summary section.
   * Extracts the text content from the total price element, converts it
   * to a numeric value, and returns the result.
   *
   * @returns {Promise<number>} The total price as a numeric value.
   */
  async getTotalPrice() {
    // Get the total price text from the specified locator
    const totalPriceTextContent = await this.page.locator(this.totalPrice).textContent();
    
    // Convert text to a number using the utility function toNumber()
    return toNumber(totalPriceTextContent);
  }
}
