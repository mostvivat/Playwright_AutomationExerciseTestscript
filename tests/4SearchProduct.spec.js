const { test, expect } = require('@playwright/test');

test('Search All Products', async ({ page }) => { 

    await page.goto('http://automationexercise.com');

    await page.click('.material-icons.card_travel');

    await page.click('#submit_search');

    await expect(page).toHaveTitle('Automation Exercise - All Products');
    expect(await page.locator('.title.text-center').textContent()).toBe('All Products');
});
test('Search products Blue Top', async ({ page }) => {

    await page.goto('http://automationexercise.com');

    await page.click('.material-icons.card_travel');
    await expect(page).toHaveTitle('Automation Exercise - All Products');

    await page.fill('#search_product', 'Blue Top');
    await page.click('#submit_search');
    
    expect(await page.locator('.title.text-center').textContent()).toBe('Searched Products');
    // all item must have text "Blue Top")
    const products = page.locator('.productinfo.text-center');
    expect(await products.textContent()).toContain('Blue Top');
});
