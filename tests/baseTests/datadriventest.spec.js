import { test, expect } from './BaseTest.spec';
import { categoryData, loginData } from '../../testdata/testdata';

test.describe('🧩 Data-driven test: Category search results', () => {
  for (const data of categoryData) {
    test(`Verify "${data.name}" category has ${data.expectedCount} products`, async ({
      loginPage,
      headerPage,
      homePage,
    }) => {
      await test.step('Login to the application', async () => {
        await loginPage.verifyLogin('test@test.com', 'test');
      });

      await test.step(`Select the category "${data.name}"`, async () => {
        await homePage.selectCategories(data.name);
      });

      await test.step('Fetch and validate product count', async () => {
        const count = await homePage.getProductCountInCategory();
        console.log(`Category: ${data.name}, Found: ${count}`);
        expect(count).toBe(data.expectedCount);
      });
    });
  }
});

test.describe('🔐 Data-driven test: Login test results', () => {
  for (const data of loginData) {
    test.only(`Verify login with username "${data.email}" and password "${data.password}"`, async ({
      loginPage,
    }) => {
      await test.step(`Attempt to login as ${data.email}`, async () => {
        await loginPage.verifyLogin(data.email, data.password);
      });

      await test.step('Validate login outcome', async () => {
        // You can add more validation here, like checking for a successful login message or redirect.
        // Example:
        // await expect(page.locator('#logout')).toBeVisible();
      });
    });
  }
});
