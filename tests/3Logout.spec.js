const { test, expect } = require('@playwright/test');

test('Logout', async ({ page }) => {
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
    // Click button that have data-qa="login-button"
    await page.click('[data-qa="login-button"]');
    // Click text=Logout
    await page.click('text=Logout');
    //expect page to be https://automationexercise.com/
    expect(page.url()).toEqual('https://automationexercise.com/login');
});