const { test, expect } = require('@playwright/test');

test('Sign-Up', async ({ page }) => {
    // Go to https://automationexercise.com
    await page.goto('https://automationexercise.com');
    // Click text=Sign Up
    await page.click('text=Signup / Login');
    // Verify 'New User Signup!' is visible
    expect(await page.locator('text=New User Signup!').isVisible()).toBeTruthy();
    // Enter name and email address
    const registerName = page.locator('[data-qa="signup-name"]');
    await registerName.fill('Test User');
    const registerEmail = page.locator('[data-qa="signup-email"]');
    await registerEmail.fill('Most123@gmail.com');
    // Click 'Signup' button
    await page.click('[data-qa="signup-button"]');
    //expect page to be https://automationexercise.com/signup
    await page.waitForURL('https://automationexercise.com/signup');
    expect(page.url()).toEqual('https://automationexercise.com/signup');
    // Verify that 'ENTER ACCOUNT INFORMATION' is visible
    expect(await page.locator('text=ENTER ACCOUNT INFORMATION').isVisible()).toBeTruthy();
    // Select radio button 'Mr.'
    await page.click('input[value="Mr"]');
    // Fill details: Title, Name, Email, Password, Date of birth
    const nameField = page.locator('[data-qa="name"]');
    await nameField.fill('Vivat Chongsomchit');
    const emailField = page.locator('[data-qa="email"]');
    expect(await emailField.isEnabled()).toBeFalsy();
    const passwordField = page.locator('[data-qa="password"]');
    await passwordField.fill('123456');
    await page.selectOption('#days', { label: '25' });
    await page.selectOption('#months', { label: 'December'});
    await page.selectOption('#years', { label: '1997' });
    // Select checkbox 'Sign up for our newsletter!'
    await page.locator("//input[@id='newsletter' and @type='checkbox']").check();
    // Select checkbox 'Receive special offers from our partners!'
    await page.locator("//input[@id='optin' and @type='checkbox']").check();
    // Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    const firstName =  page.locator('[data-qa="first_name"]');
    await firstName.fill('Vivat');
    const lastName =  page.locator('[data-qa="last_name"]');
    await lastName.fill('Chongsomchit');
    const company =  page.locator('[data-qa="company"]');
    await company.fill('KMUTNB');
    const address = page.locator('[data-qa="address"]');
    await address.fill('Bangkok');
    const address2 = page.locator('[data-qa="address2"]');
    await address2.fill('HW');
    await page.selectOption('#country', { label: 'Canada' });
    const state = page.locator('[data-qa="state"]');
    await state.fill('California');
    const city = page.locator('[data-qa="city"]');
    await city.fill('Los Angeles');
    const zipcode = page.locator('[data-qa="zipcode"]');
    await zipcode.fill('12345');
    const mobileNumber = page.locator('[data-qa="mobile_number"]');
    await mobileNumber.fill('0971595373');
    // Click 'Create Account button'
    await page.click('[data-qa="create-account"]');
    // Verify page to be https://automationexercise.com/account_created
    await page.waitForURL('https://automationexercise.com/account_created');
    expect(page.url()).toEqual('https://automationexercise.com/account_created');
    // Verify that 'ACCOUNT CREATED!' is visible
    expect(await page.locator('text=ACCOUNT CREATED!').isVisible()).toBeTruthy();
});
//TC002 - Verify alredy registered email
test('Sign-Up Existing Email', async ({ page }) => {
    // Go to https://automationexercise.com
    await page.goto('https://automationexercise.com');
    // Click text=Sign Up
    await page.click('text=Signup / Login');
    // locator to field data-qa="signup-name"
    const registerName = page.locator('[data-qa="signup-name"]');
    // fill data to nameField
    await registerName.fill('Test User');
    // locator to field data-qa="signup-email"
    const registerEmail = page.locator('[data-qa="signup-email"]');
    // fill data to emailField
    await registerEmail.fill('Most123@gmail.com');
    // Click button that have data-qa="signup-button"
    await page.click('[data-qa="signup-button"]');
    //expect text Email Address already exist!
    expect(await page.locator('text=Email Address already exist!').isVisible()).toBeTruthy();
});
test('Delete Account', async ({ page }) => {
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
    // Click text=Delete Account
    await page.click('text=Delete Account');
    // Expect   page to be https://automationexercise.com/delete_account
    expect(page.url()).toEqual('https://automationexercise.com/delete_account');
    // expect page to have text "ACCOUNT DELETED!"
    expect(await page.locator('text=ACCOUNT DELETED!').isVisible()).toBeTruthy();
});
    
