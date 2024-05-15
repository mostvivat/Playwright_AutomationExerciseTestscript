const { test, expect } = require('@playwright/test');

//TC001 - Remove product from cart 2 Items
test('Remove product from cart 2 Items', async ({ page }) => {

    await page.goto('https://automationexercise.com');

    await page.click('text=Signup / Login');

    const loginEmail = page.locator('[data-qa="login-email"]');
    await loginEmail.fill('Most123@gmail.com');
    const loginPassword = page.locator('[data-qa="login-password"]');
    await loginPassword.fill('123456');
    await page.click('[data-qa="login-button"]');

    await page.click('text=Cart');
    await page.locator('#product-1 .cart_quantity_delete').click();
    await page.locator('#product-2 .cart_quantity_delete').click();

    // refresh the page
    await page.reload();
    expect(await page.locator('tbody tr[id="product-1"]').isVisible()).toBeFalsy();
    expect(await page.locator('tbody tr[id="product-2"]').isVisible()).toBeFalsy();
});
