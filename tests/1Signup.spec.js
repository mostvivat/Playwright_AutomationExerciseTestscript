const { test, expect } = require('@playwright/test');

//TC001 - Verify the New User Signup! text is displayed when user clicks on the Signup / Login button
// test('TC001_Verify the New User Signup! is visible', async ({ page }) => {
//     // Go to https://automationexercise.com
//     await page.goto('https://automationexercise.com');
//     // Click text=Sign Up
//     await page.click('text=Signup / Login');

//     //verify New User Signup! text
//     expect(await page.locator('text=New User Signup!').isVisible()).toBeTruthy();
// });
//TC002 - Verify 
test('TC001_Verify valid data sign-up', async ({ page }) => {
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
    //expect page to be https://automationexercise.com/signup
    await page.waitForURL('https://automationexercise.com/signup');
    expect(page.url()).toEqual('https://automationexercise.com/signup');
    //click on radio button that have value="Mr"
    await page.click('input[value="Mr"]');
    // locator to field data-qa="name"
    const nameField = page.locator('[data-qa="name"]');
    // fill data to nameField
    await nameField.fill('Vivat Chongsomchit');
    // locator to field data-qa="email"
    const emailField = page.locator('[data-qa="email"]');
    // verify this field must disabled
    expect(await emailField.isEnabled()).toBeFalsy();
    // locator to field data-qa="password"
    const passwordField = page.locator('[data-qa="password"]');
    // fill data to passwordField
    await passwordField.fill('123456');
    // Select option with value '25' in dropdown with id 'days'
    await page.selectOption('#days', { label: '25' });
    // Select option with text 'December' in dropdown with id 'months'
    await page.selectOption('#months', { label: 'December' });
    // Select option with value '1997' in dropdown with id 'years'
    await page.selectOption('#years', { label: '1997' });
    // locator to field id = newsletter
    await page.locator("//input[@id='newsletter' and @type='checkbox']").check();
    // expect this field to be checked
    expect(await page.locator("//input[@id='newsletter' and @type='checkbox']")).toBeChecked();
    // locator to field id = optin
    await page.locator("//input[@id='optin' and @type='checkbox']").check();
    // expect this field to be checked
    expect(await page.locator("//input[@id='optin' and @type='checkbox']")).toBeChecked();
    //locator to button that have data-qa="first_name"
    const firstName =  page.locator('[data-qa="first_name"]');
    // fill data to firstName
    await firstName.fill('Vivat');
    //locator to button that have data-qa="last_name"
    const lastName =  page.locator('[data-qa="last_name"]');
    // fill data to lastName
    await lastName.fill('Chongsomchit');
    //locator to button that have data-qa="company"
    const company =  page.locator('[data-qa="company"]');
    // fill data to company
    await company.fill('KMUTNB');
    //locator to button that have data-qa="address"
    const address = page.locator('[data-qa="address"]');
    // fill data to address
    await address.fill('KMUTNB');
    //locator to button that have data-qa="address2"
    const address2 = page.locator('[data-qa="address2"]');
    // fill data to address2
    await address2.fill('HW');
    //locator to button that have data-qa="country"
    await page.selectOption('#country', { label: 'Canada' });
    //locator to button that have data-qa="state" and fill data to state
    const state = page.locator('[data-qa="state"]');
    await state.fill('California');
    //locator to button that have data-qa="city" and fill data to city
    const city = page.locator('[data-qa="city"]');
    await city.fill('Los Angeles');
    //locator to button that have data-qa="zipcode" and fill data to zipcode
    const zipcode = page.locator('[data-qa="zipcode"]');
    await zipcode.fill('12345');
    //locator to button that have data-qa="mobile_number" and fill data to mobile_number
    const mobileNumber = page.locator('[data-qa="mobile_number"]');
    await mobileNumber.fill('0971595373');
    // click button that have data-qa="create-account"
    await page.click('[data-qa="create-account"]');
    // expect page to be https://automationexercise.com/account_created
    await page.waitForURL('https://automationexercise.com/account_created');
    expect(page.url()).toEqual('https://automationexercise.com/account_created');
    // expect page to have text "ACCOUNT CREATED!"
    expect(await page.locator('text=ACCOUNT CREATED!').isVisible()).toBeTruthy();
});
//TC002 - Verify alredy registered email
test('TC002_Verify already registered email', async ({ page }) => {
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
test('TC003_Delete account', async ({ page }) => {
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
    
