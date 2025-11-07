import { toNumber } from "../utils/utilities";
/**
 * ProductDetailsPage class encapsulates all locators and actions
 * related to the product details view in the Demoblaze web application.
 * It allows retrieving product title, price, and description from the details page.
 */
export class ProductDetailsPage {
  constructor(page) {
    this.page = page;

    // Product details locators
    this.productTitle = "//*[@id='tbodyid']/h2";
    this.productPrice = "//*[@id='tbodyid']/h3";
    this.productDescription = "//*[@id='tbodyid']/div/div/div/p";
  }

  /**
   * Retrieves the product title text displayed on the product details page.
   *
   * @returns {Promise<string>} The trimmed product title.
   */
  async getProductTitle() {
    const title = await this.page.locator(this.productTitle).textContent();
    // Log it
    console.log(title?.trim());
    return title;
  }

  /**
   * Retrieves the product price displayed on the product details page.
   * Removes the currency symbol and trims whitespace.
   * @returns {Promise<string>} The numeric price as a string.
   */
  async getProductPrice() {
    const priceText = (await this.page.locator(this.productPrice).textContent());
    const price = toNumber(priceText?.trim())
    // Log it
    console.log(price);
    return price;
  }

  /**
   * Retrieves the product description text from the product details page.
   * @returns {Promise<string>} The trimmed product description.
   */
  async getProductDescription() {
    const description = await this.page.locator(this.productDescription).textContent();
    // Log it
    console.log(description?.trim());
    return description;
  }
}
