import { test, expect } from '@playwright/test';

test('EndtoEnd', async({page}) => {

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