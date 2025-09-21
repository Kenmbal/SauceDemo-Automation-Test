import { test, expect } from '@playwright/test';

test('Swag Labs Test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);
  
  //use data set instead of id
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  
  //Sleep
  await page.waitForTimeout(5000); // Waits for 5 seconds

});

