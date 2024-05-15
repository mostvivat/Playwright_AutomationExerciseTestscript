const { test, expect } = require('@playwright/test');

//TC001 - Remove product from cart 2 Items
test('Remove product from cart 2 Items', async ({ page }) => {
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
    await page.click('text=Cart');
    // Locator to button that have class="cart_delete" that have id="product-1"
    await page.locator('#product-1 .cart_quantity_delete').click();
    // Locator to button that have class="cart_delete" that have id="product-2"
    await page.locator('#product-2 .cart_quantity_delete').click();
    // refresh the page
    await page.reload();
    // Expect inside tbody tag to not have tr tag id="product-1",id="product-2"
    expect(await page.locator('tbody tr[id="product-1"]').isVisible()).toBeFalsy();
    expect(await page.locator('tbody tr[id="product-2"]').isVisible()).toBeFalsy();
});
