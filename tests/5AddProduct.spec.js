const { test, expect } = require('@playwright/test');

test('Add product to cart 4 Items', async ({ page }) => {

    await page.goto('https://automationexercise.com');
  
    await page.click('text=Signup / Login');

    const loginEmail = page.locator('[data-qa="login-email"]');
    await loginEmail.fill('Most123@gmail.com');
    const loginPassword = page.locator('[data-qa="login-password"]');
    await loginPassword.fill('123456');
    await page.click('[data-qa="login-button"]');

    await page.click('text=Products');

    await page.click('[data-product-id="1"]')
    //verify popup modal is visible
    expect(await page.locator('.modal show').isVisible());
    await page.click('text=Continue Shopping');

    await page.click('[data-product-id="2"]');
    await page.click('text=Continue Shopping');

    await page.click('[data-product-id="3"]');
    await page.click('text=Continue Shopping');

    await page.click('[data-product-id="4"]');
    await page.click('text=View Cart');

    // wait page to load https://automationexercise.com/view_cart
    await page.waitForURL('https://automationexercise.com/view_cart');

    
    expect(await page.locator('tbody tr[id="product-1"]').isVisible()).toBeTruthy();
    expect(await page.locator('tbody tr[id="product-2"]').isVisible()).toBeTruthy();
    expect(await page.locator('tbody tr[id="product-3"]').isVisible()).toBeTruthy();
    expect(await page.locator('tbody tr[id="product-4"]').isVisible()).toBeTruthy();
});
    