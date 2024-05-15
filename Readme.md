# AutomationExcercise Tests

# Used frameworks and technologies
- Playwright
- JavaScript

# Test cases
- [x] 1. Register user

<details>
<summary>TestStep</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com/login'
3. Verify 'New User Signup!' is visible
4. Enter name and email address
5. Click 'Signup' button
6. Verify that 'ENTER ACCOUNT INFORMATION' is visible
7. Select radio button 'Mr.'
8. Fill details: Title, Name, Email, Password, Date of birth
9. Select checkbox 'Sign up for our newsletter!'
10. Select checkbox 'Receive special offers from our partners!'
11. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
12. Click 'Create Account button'
13. Verify that 'ACCOUNT CREATED!' is visible
14. Verify that 'Logged in as username' is visible

</details>

- [x] 2. Register user with existing email

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com/login'
3. Verify 'New User Signup!' is visible
4. Enter name and already registered email address
5. Click 'Signup' button
6. Verify error 'Email Address already exist!' is visible

</details>

- [x] 3. Login user with correct email and password

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com/login'
3. Verify 'New User Signup!' is visible
4. Verify 'Login to your account' is visible
5. Enter correct email address and password
6. Click 'login' button
7. Verify that 'Logged in as Test' is visible

</details>

- [x] 4. Login User with incorrect email and password

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com/login'
3. Verify 'New User Signup!' is visible
4. Verify 'Login to your account' is visible
5. Enter incorrect email address and password
6. Click 'login' button
7. Verify error 'Your email or password is incorrect!' is visible

</details>

- [x] 5. Logout user

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com/login'
3. Verify 'New User Signup!' is visible
4. Enter correct email address and password
5. Click 'login' button
6. Verify that 'Logged in as username' is visible
7. Click 'Logout' button
8. Verify that user is logged out

</details>

- [x] 6. Contact Us Form

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com/contact_us'
3. Verify 'GET IN TOUCH' is visible
4. Enter name, email, subject and message
5. Click 'Submit' button
6. Click OK button
7. Verify success message 'Success! Your details have been submitted successfully.' is visible

</details>

- [x] 7. Verify All Products and product detail page

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com/products'
3. Verify user is navigated to ALL PRODUCTS page successfully
4. The products list is visible
5. Navigate to url 'http://automationexercise.com/product_details/1'
6. User is landed to product detail page
7. Verify that detail detail is visible: product name, category name, price, image, brand, availability, condition

</details>

- [x] 8. Search product

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com/products'
3. Enter product name in search input and click search button
4. Verify 'SEARCHED PRODUCTS' is visible
5. Verify all the products related to search are visible

</details>

- [x] 9. Add products to cart

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com/products'
3. Verify that products list page is visible
5. Hover over first product and click 'Add to cart'
6. Click 'Continue Shopping' button
7. Hover over second product and click 'Add to cart'
8. Click 'View Cart' button
9. Verify both products are added to Cart
10. Verify their prices, quantity and total price

</details>

- [x] 10. Place order

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com/login'
3. Login with correct email and password
4. Add first product to cart
5. Verify that cart page is displayed
6. Click Proceed To Checkout
7. Verify Address Details and Review Your Order
8. Enter description in comment text area and click 'Place Order'
9. Enter payment details: Name on Card, Card Number, CVC, Expiration date
10. Click 'Pay and Confirm Order' button
11. Verify success message 'Your order has been placed successfully!'

</details>

- [x] 11. Remove product from cart

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com/products'
3. Add products to cart
4. Click 'Cart' button
5. Verify that cart page is displayed
6. Click 'X' button corresponding to particular product
7. Verify that product is removed from the cart

</details>

- [X] 12. View category page

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'https://automationexercise.com/category_products/1'
3. Verify that category page is displayed and confirm text 'WOMEN - DRESS PRODUCTS'
4. On left side bar, click on any sub-category link of 'Men' category
5. Verify that user is navigated to that category page

</details>

- [x] 13. View brand page

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com/products'
3. Verify that Brands are visible on left side bar
4. Click on first brand name
5. Verify that user is navigated to brand page and brand products are displayed

</details>

- [x] 14. Add review for product

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com/product_details/1'
3. Verify 'Write Your Review' is visible
4. Enter name, email and review
5. Click 'Submit' button
6. Verify success message 'Thank you for your review.'

</details>

- [x] 15. Verify Scroll Up using 'Arrow' button and Scroll Down functionality

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down page to bottom
5. Verify that arrow button is visible
6. Click on arrow at bottom right side to move upward
7. Verify that arrow button is not visible

</details>

# What's next?
- [x] creating users accounts through API
- [x] deleting users accounts through API