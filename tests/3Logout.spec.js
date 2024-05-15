const { test, expect } = require('@playwright/test');

test('Logout', async ({ page }) => {
    
    await page.goto('https://automationexercise.com');

    await page.click('text=Signup / Login');

    const loginEmail = page.locator('[data-qa="login-email"]');
    await loginEmail.fill('Most123@gmail.com');
    const loginPassword = page.locator('[data-qa="login-password"]');
    await loginPassword.fill('123456');
    await page.click('[data-qa="login-button"]');
    
    await page.click('text=Logout');

    expect(page.url()).toEqual('https://automationexercise.com/login');
});