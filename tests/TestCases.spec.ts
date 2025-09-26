import { test, expect } from '@playwright/test';

test('Swag Labs Test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);

});
 
test('TEST_001', async ({ page }) => {
//Open the website
  await page.goto('https://www.saucedemo.com/');

//use data set instead of id
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  
  await page.getByRole('button', { name: 'Login' }).click();

  await page.screenshot({ path: 'Login.png', fullPage:true});

  //Sleep
  await page.waitForTimeout(5000); // Waits for 5 seconds

})

test('TEST_002', async({page}) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('Test1');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  
  await page.getByRole('button', { name: 'Login' }).click();

  await page.screenshot({ path:'InvalidCredentials.png', fullPage:true})

  await page.waitForTimeout(3000);
})

test('TEST_003', async({page}) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('password');
  
  await page.getByRole('button', { name: 'Login' }).click();

  await page.screenshot({ path:'InvalidCredentials1.png', fullPage:true})

  await page.waitForTimeout(3000);
})

test('TEST_004', async({page}) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  
  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.getByAltText('Sauce Labs Backpack').click(); // For images that are clickable

  await page.getByRole('button', { name: 'Add to cart' }).click();
  
  await page.screenshot({ path:'AddtoCart.png', fullPage:true})

  await page.waitForTimeout(5000);
})

test('TEST_005', async({page}) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  
  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.getByAltText('Sauce Labs Backpack').click(); // For images that are clickable

  await page.getByRole('button', { name: 'Add to cart' }).click();

  await page.getByRole('button', { name: 'Remove' }).click();
  
  await page.screenshot({ path:'RemovetoCart.png', fullPage:true})

  await page.waitForTimeout(5000);
})

test('TEST_006', async({page}) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  
  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.getByAltText('Sauce Labs Backpack').click(); // For images that are clickable

  await page.screenshot({ path:'Description.png', fullPage:true})

  await page.waitForTimeout(5000);
})

test('TEST_007', async({page}) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  
  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.getByAltText('Sauce Labs Backpack').click(); // For images that are clickable

  await page.getByRole('button', { name: 'Add to cart' }).click();

  await page.locator('//*[@id="shopping_cart_container"]/a').click();

  await page.getByRole('button', { name: 'Checkout' }).click();
  
  await page.getByPlaceholder('First Name').fill('Sauce');
  await page.getByPlaceholder('Last Name').fill('Demo');
  await page.getByPlaceholder('Zip/Postal Code').fill('3535');
  
  await page.screenshot({ path:'EnterAddress.png', fullPage:true})

  await page.waitForTimeout(5000);
})

test('TEST_008', async({page}) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  
  await page.getByRole('button', { name: 'Login' }).click();

  await page.locator('//*[@id="shopping_cart_container"]/a').click();

  await page.getByRole('button', { name: 'Checkout' }).click();
  
  await page.getByPlaceholder('First Name').fill('Sauce');
  await page.getByPlaceholder('Last Name').fill('Demo');
  await page.getByPlaceholder('Zip/Postal Code').fill('3535');

  await page.getByRole('button', { name: 'Continue' }).click(); 

  await page.getByRole('button', { name: 'Finish' }).click();
  
  await page.screenshot({ path:'NullProduct.png', fullPage:true})

  await page.waitForTimeout(5000);
})

test('TEST_009', async({page}) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  
  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.getByAltText('Sauce Labs Backpack').click(); // For images that are clickable

  await page.getByRole('button', { name: 'Add to cart' }).click();

  await page.locator('//*[@id="shopping_cart_container"]/a').click();

  await page.getByRole('button', { name: 'Checkout' }).click();
  
  await page.getByPlaceholder('First Name').fill('Sauce');
  await page.getByPlaceholder('Last Name').fill('Demo');
  await page.getByPlaceholder('Zip/Postal Code').fill('3535');

    await page.getByRole('button', { name: 'Continue' }).click(); 

  await page.getByRole('button', { name: 'Finish' }).click();
  
  await page.screenshot({ path:'Checkout.png', fullPage:true})

  await page.waitForTimeout(5000);
})