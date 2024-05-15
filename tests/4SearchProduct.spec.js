const { test, expect } = require('@playwright/test');

test('Search All Products', async ({ page }) => { 
    // 1. Navigate to url 'http://automationexercise.com'
    await page.goto('http://automationexercise.com');
    // 2. Click on 'Products' button
    await page.click('.material-icons.card_travel');
    // click button that have id="submit_search"
    await page.click('#submit_search');
    // 3. Verify user is navigated to ALL PRODUCTS page successfully
    await expect(page).toHaveTitle('Automation Exercise - All Products');
    // 4. Verify 'ALL PRODUCTS' is visible (expected class="title text-center" to have text "ALL PRODUCTS")
    expect(await page.locator('.title.text-center').textContent()).toBe('All Products');
});
test('Search products Blue Top', async ({ page }) => {
    // 1. Navigate to url 'http://automationexercise.com'
    await page.goto('http://automationexercise.com');
    // 2. Click on 'Products' button
    await page.click('.material-icons.card_travel');
    // 3. Verify user is navigated to ALL PRODUCTS page successfully
    await expect(page).toHaveTitle('Automation Exercise - All Products');
    // 4. Enter product name in search input and click search button 
    await page.fill('#search_product', 'Blue Top');
    await page.click('#submit_search');
    // 5. Verify 'SEARCHED PRODUCTS' is visible (expexted class="title text-center" to have text "SEARCHED PRODUCTS")
    expect(await page.locator('.title.text-center').textContent()).toBe('Searched Products');
    // 6. Verify all the products related to search are visible(inside class="productinfo text-center" all item must have txt "Blue Top")
    const products = await page.locator('.productinfo.text-center');
    expect(await products.textContent()).toContain('Blue Top');
});
