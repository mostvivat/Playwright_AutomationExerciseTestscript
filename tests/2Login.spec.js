const { test, expect } = require('@playwright/test');

test('Login', async ({ page }) => {
    
    await page.goto('https://automationexercise.com');

    await page.click('text=Signup / Login');

    const loginEmail = page.locator('[data-qa="login-email"]');
    await loginEmail.fill('Most123@gmail.com');
    const loginPassword = page.locator('[data-qa="login-password"]');
    await loginPassword.fill('123456');
    await page.click('[data-qa="login-button"]');

    await page.waitForURL('https://automationexercise.com/');
    expect(page.url()).toEqual('https://automationexercise.com/');
    expect(await page.locator('text=Logged in as ').isVisible()).toBeTruthy();
});
test('Login Invalid Email', async ({ page }) => {

    await page.goto('https://automationexercise.com');
    
    await page.click('text=Signup / Login');
    
    const loginEmail = page.locator('[data-qa="login-email"]');
    await loginEmail.fill('Most1235@gmail.com');
    const loginPassword = page.locator('[data-qa="login-password"]');
    await loginPassword.fill('123456');
    await page.click('[data-qa="login-button"]');

    expect(await page.locator('text=Invalid email address').isVisible()).toBeTruthy();
}
);
