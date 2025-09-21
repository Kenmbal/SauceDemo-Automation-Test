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
  
  //create a variable for btn
  const login = page.locator('[data-test="login-button"]');
  await login.click();

  await page.screenshot({ path: 'Login.png', fullPage:true});

  //Sleep
  await page.waitForTimeout(5000); // Waits for 5 seconds

})

test('TEST_002', async({page}) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('Test1');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  
  const login = page.locator('[data-test="login-button"]');
  await login.click();

  await page.screenshot({ path:'InvalidCredentials.png', fullPage:true})

  await page.waitForTimeout(3000);
})