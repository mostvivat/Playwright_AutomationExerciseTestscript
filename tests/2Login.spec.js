const { test, expect } = require('@playwright/test');

test('Login', async ({ page }) => {
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
    //expect page to be https://automationexercise.com/
    await page.waitForURL('https://automationexercise.com/');
    expect(page.url()).toEqual('https://automationexercise.com/');
    // expect page to have text "Logged in as "
     expect(await page.locator('text=Logged in as ').isVisible()).toBeTruthy();
});
//TC002 - Login Invalid email
test('Login Invalid Email', async ({ page }) => {
    // Go to https://automationexercise.com
    await page.goto('https://automationexercise.com');
    // Click text=Sign Up
    await page.click('text=Signup / Login');
    // locator to field data-qa="login-email"
    const loginEmail = page.locator('[data-qa="login-email"]');
    // fill data to emailField
    await loginEmail.fill('Most1235@gmail.com');
    // locator to field data-qa="login-password"
    const loginPassword = page.locator('[data-qa="login-password"]');
    // fill data to passwordField
    await loginPassword.fill('123456');
    // Click button that have data-qa="login-button"
    await page.click('[data-qa="login-button"]');
    //expect text Invalid email address
    expect(await page.locator('text=Invalid email address').isVisible()).toBeTruthy();
}
);
