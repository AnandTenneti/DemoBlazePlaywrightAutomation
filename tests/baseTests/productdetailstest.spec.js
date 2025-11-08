import { test, expect } from '../baseTests/BaseTest';

test('Get Product Details', async ({ homePage, productDetailsPage }) => {
  let price = 650;
  let title = 'Nexus 6';
  let description
  await test.step('Click on a product', async () => {
    await homePage.clickOnAProduct('Nexus 6');
  });
  await test.step('Get product title', async () => {
    title = await productDetailsPage.getProductTitle();
  });
  await test.step('Get product price', async () => {
    price = await productDetailsPage.getProductPrice();
  });
  await test.step('Get product description', async () => {
    description = await productDetailsPage.getProductDescription();
  });
  await test.step('Verify product details', async () => {
    expect(title, 'Product title mismatch').toBe(title);
    expect(price, 'Product price mismatch').toBe(price);
    expect(description, 'Product description is empty').toBeTruthy();
  });
});
