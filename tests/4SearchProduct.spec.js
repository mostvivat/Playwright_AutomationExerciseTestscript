const { test, expect } = require('@playwright/test');

test('TC001_Verify valid data sign-up', async ({ page }) => {
    // 1. Navigate to url 'http://automationexercise.com'
    await page.goto('http://automationexercise.com');
    // 4. Click on 'Products' button
    await page.click('.material-icons.card_travel');

    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    await expect(page.getByText('ALL PRODUCTS')).toBeVisible();

    // 6. Enter product name in search input and click search button
    // await page.getByPlaceholder('Search Product').fill(productName);
    // await page.getByRole('button', { name: '' }).click();
    // or:
    await page.type('#search_product', 'Men Tshirt');
    await page.click('#submit_search');

    // 7. Verify 'SEARCHED PRODUCTS' is visible
    await expect(
      page.getByRole('heading', { name: 'Searched Products' })
    ).toBeVisible();
    // or:
    const verifyTitleText = await page.locator('h2.title.text-center');
    await expect(verifyTitleText).toContainText('Searched Products');

    // 8. Verify all the products related to search are visible
    await expect(page.getByText('Searched Products  Added! Your product has been added to cart. View Cart Contin')).toBeVisible();
  });