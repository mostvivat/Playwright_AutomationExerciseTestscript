const { test, expect } = require('@playwright/test');

test('Add product to cart 4 Items', async ({ page }) => {
    // Go to https://automationexercise.com
    await page.goto('https://automationexercise.com');
    // Click text=Sign Up
    await page.click('text=Signup / Login');
    // locator to field data-qa="login-email"
    const loginEmail = page.locator('[data-qa="login-email"]');
    // fill data to emailField
    await loginEmail.fill('Most123@gmail.com');
    // locator to field data-qa="login-password"
    const loginPassword = page.locator('[data-qa="login-password"]');
    // fill data to passwordField
    await loginPassword.fill('123456');
    // Click button that have data-qa=login-button
    await page.click('[data-qa="login-button"]');
    // Click text=Products
    await page.click('text=Products');
    // Click button that have data-product-id="1" 
    await page.click('[data-product-id="1"]');
    // Expect class="modal show' to be visible
    expect(await page.locator('.modal show').isVisible());
    // Click text=Continue Shopping
    await page.click('text=Continue Shopping');
    // Click button that have data-product-id="2" 
    await page.click('[data-product-id="2"]');
    // Click text=Continue Shopping
    await page.click('text=Continue Shopping');
    // Click button that have data-product-id="3" 
    await page.click('[data-product-id="3"]');
    // Click text=Continue Shopping
    await page.click('text=Continue Shopping');
    // Click button that have data-product-id="4" 
    await page.click('[data-product-id="4"]');
    // Click text=View Cart
    await page.click('text=View Cart');
    // wait page to load https://automationexercise.com/view_cart
    await page.waitForURL('https://automationexercise.com/view_cart');
    // expect inside tbody tag to  have tr tag id="product-1",id="product-2",id="product-3",id="product-4"
    expect(await page.locator('tbody tr[id="product-1"]').isVisible()).toBeTruthy();
    expect(await page.locator('tbody tr[id="product-2"]').isVisible()).toBeTruthy();
    expect(await page.locator('tbody tr[id="product-3"]').isVisible()).toBeTruthy();
    expect(await page.locator('tbody tr[id="product-4"]').isVisible()).toBeTruthy();
});
    