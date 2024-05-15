const { test, expect } = require('@playwright/test');

test('Sign-Up', async ({ page }) => {
    
    await page.goto('https://automationexercise.com');

    await page.click('text=Signup / Login');
    
    expect(await page.locator('text=New User Signup!').isVisible()).toBeTruthy();
    
    const registerName = page.locator('[data-qa="signup-name"]');
    await registerName.fill('Test User');
    const registerEmail = page.locator('[data-qa="signup-email"]');
    await registerEmail.fill('Most123@gmail.com');
    
    await page.click('[data-qa="signup-button"]');
    
    await page.waitForURL('https://automationexercise.com/signup');
    expect(page.url()).toEqual('https://automationexercise.com/signup');

    expect(await page.locator('text=ENTER ACCOUNT INFORMATION').isVisible()).toBeTruthy();

    await page.click('input[value="Mr"]');
   
    const nameField = page.locator('[data-qa="name"]');
    await nameField.fill('Vivat Chongsomchit');
    const emailField = page.locator('[data-qa="email"]');
    expect(await emailField.isEnabled()).toBeFalsy();
    const passwordField = page.locator('[data-qa="password"]');
    await passwordField.fill('123456');
    await page.selectOption('#days', { label: '25' });
    await page.selectOption('#months', { label: 'December'});
    await page.selectOption('#years', { label: '1997' });
    
    await page.locator("//input[@id='newsletter' and @type='checkbox']").check();
   
    await page.locator("//input[@id='optin' and @type='checkbox']").check();

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
   
    await page.click('[data-qa="create-account"]');

    await page.waitForURL('https://automationexercise.com/account_created');
    expect(page.url()).toEqual('https://automationexercise.com/account_created');

    expect(await page.locator('text=ACCOUNT CREATED!').isVisible()).toBeTruthy();
});
test('Sign-Up Existing Email', async ({ page }) => {

    await page.goto('https://automationexercise.com');

    await page.click('text=Signup / Login');

    const registerName = page.locator('[data-qa="signup-name"]');
    await registerName.fill('Test User');
    const registerEmail = page.locator('[data-qa="signup-email"]');
    await registerEmail.fill('Most123@gmail.com');
    await page.click('[data-qa="signup-button"]');

    expect(await page.locator('text=Email Address already exist!').isVisible()).toBeTruthy();
});
test('Delete Account', async ({ page }) => {
    
    await page.goto('https://automationexercise.com');

    await page.click('text=Signup / Login');
    
    expect(await page.locator('text=New User Signup!').isVisible()).toBeTruthy();
    
    const registerName = page.locator('[data-qa="signup-name"]');
    await registerName.fill('Test User');
    const registerEmail = page.locator('[data-qa="signup-email"]');
    await registerEmail.fill('Most122@gmail.com');
    
    await page.click('[data-qa="signup-button"]');
    
    await page.waitForURL('https://automationexercise.com/signup');
    expect(page.url()).toEqual('https://automationexercise.com/signup');

    expect(await page.locator('text=ENTER ACCOUNT INFORMATION').isVisible()).toBeTruthy();

    await page.click('input[value="Mr"]');
   
    const nameField = page.locator('[data-qa="name"]');
    await nameField.fill('Vivat Chongsomchit');
    const emailField = page.locator('[data-qa="email"]');
    expect(await emailField.isEnabled()).toBeFalsy();
    const passwordField = page.locator('[data-qa="password"]');
    await passwordField.fill('123456');
    await page.selectOption('#days', { label: '25' });
    await page.selectOption('#months', { label: 'December'});
    await page.selectOption('#years', { label: '1997' });
    
    await page.locator("//input[@id='newsletter' and @type='checkbox']").check();
   
    await page.locator("//input[@id='optin' and @type='checkbox']").check();

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
   
    await page.click('[data-qa="create-account"]');

    await page.waitForURL('https://automationexercise.com/account_created');
    expect(page.url()).toEqual('https://automationexercise.com/account_created');

    expect(await page.locator('text=ACCOUNT CREATED!').isVisible()).toBeTruthy();
    //--------------------------------------------------------------------------------delete account----------------------------------------------------------------
    await page.goto('https://automationexercise.com');

    await page.click('text=Signup / Login');

    const loginEmail = page.locator('[data-qa="login-email"]');
    await loginEmail.fill('Most122@gmail.com');
    const loginPassword = page.locator('[data-qa="login-password"]');
    await loginPassword.fill('123456');
    await page.click('[data-qa="login-button"]');

    await page.click('text=Delete Account');
    expect(page.url()).toEqual('https://automationexercise.com/delete_account');
    expect(await page.locator('text=ACCOUNT DELETED!').isVisible()).toBeTruthy();
});
    
