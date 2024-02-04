import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page'
import { ProductListingPage } from '../pages/product-listing.page'
import { loginDetails } from '../datasets/login-details';
import { allure } from 'allure-playwright';

test.beforeEach('Setup reporting', async ({ page}) => {
  await allure.parentSuite("Shopping page");
  await allure.suite("Login");
  await page.goto('/'); 
});

test('Login with standard user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productListingPage = new ProductListingPage(page);
  await loginPage.login(loginDetails.standard.username, loginDetails.standard.password);
  await productListingPage.validateShoppingCartExists();
});
