# Test Automation Bootcamp - **Week 2**
Now you're competed [week 1](https://github.com/Mindera/tech-accelerator-test-playwright/blob/main/BOOTCAMP/WEEK1.md) of the bootcamp and you've got VSCode installed and the test project working, lets take a look at the test script in a bit more detail and see how it works.

## What you're going to learn in Week 2
1. What makes up a test script
2. What is an import
3. What is a function
4. A closer look at the test.beforeEach function
5. A closer look at the test function
6. Creating a new test
8. How to run just the new test

## What makes up a test script
Hopefully by now you've found the following file "tests/login.spec.ts". This is our one and only test script at the moment. Let's take a closer look at this file and see what it contains.

Lets take a look at the test script

```
1   import { test } from '@playwright/test';
2   import { LoginPage } from '../pages/login.page'
3   import { ProductListingPage } from '../pages/product-listing.page'
4   import { loginDetails } from '../datasets/login-details';
5   import { allure } from 'allure-playwright';
6
7   test.beforeEach('Setup reporting', async ({ page}) => {
8     await allure.parentSuite("Shopping page");
9     await allure.suite("Login");
10    await page.goto('/'); 
11  });
12
13  test('Login with standard user', async ({ page }) => {
14    const loginPage = new LoginPage(page);
15    const productListingPage = new ProductListingPage(page);
16    await loginPage.login(loginDetails.standard.username, loginDetails.standard.password);
17    await productListingPage.validateShoppingCartExists();
18  });
```

### Import
First we have the import section:

```
1   import { test } from '@playwright/test';
2   import { LoginPage } from '../pages/login.page'
3   import { ProductListingPage } from '../pages/product-listing.page'
4   import { loginDetails } from '../datasets/login-details';
5   import { allure } from 'allure-playwright';
```

This is where we import functionality from other files and modules (code libraries). Lets take a look at the first import statement and break it down a little:

| import          | { test }        | from '@playwright/test';                  |
| :-------------- | :-------------- | :---------------------------------------- |
| Lets import the | 'test' function | from the @playwright module's test folder |

You can import more than one piece of functionality (function) at a time by separating them by commas. For example:

```
1   import { test, expect } from '@playwright/test';
```

The following line imports a file which we've added to the project. 

```
2   import { LoginPage } from '../pages/login.page'
```

The "..." indicates to go back up one folder from our current folder "tests".  Then go to the "pages" folder and use the "login.page.ts" file. Note that we don't have to add the ".ts" file type. 

### Before Each

Next we have the beforeEach section:

```
7   test.beforeEach('Setup reporting', async ({ page}) => {
8     await allure.parentSuite("Shopping page");
9     await allure.suite("Login");
10    await page.goto('/'); 
11  });
```

This section allows us to set up test conditions before each test is run. In the example above it is setting up Allure reporting headers and then calling a function "goto" on the page which navigates to a desired website location. As we're calling it with '/' it will go to the default home page which is set in the plawright.config.ts file under baseUrl
```
51  use : {
52    baseURL: "https://www.saucedemo.com/",
```

Remember that before each test block is run, this beforeEach function will be called. When we test, we want to reset to a default state, so that our test is clean and not compromised by previous interactions on the website. 

### Tests

Now that we have everything set up, we're ready for the tests. 

```
13  test('Login with standard user', async ({ page }) => {
14    const loginPage = new LoginPage(page);
15    const productListingPage = new ProductListingPage(page);
16    await loginPage.login(loginDetails.standard.username, loginDetails.standard.password);
17    await productListingPage.validateShoppingCartExists();
18  });
```

In this test script there's only one test which checks if you can login with a standard user.  

Now is a good time to look at what a function is as they are one of the core building blocks in all programming languages. [Read this guide](https://www.tutorialsteacher.com/javascript/javascript-function) and try out the examples. [Another good guide too](https://www.w3schools.com/js/js_functions.asp).

```
13  test('Login with standard user', async ({ page }) => {
```

This is a special Playwright function called test.  You call it and pass in two parameters.  

The first is some descriptive text so that on the test report you know what the test did. In this case 'Login with standard user'

The second is an [arrow function](https://www.freecodecamp.org/news/javascript-arrow-functions-in-depth/) which contains the test.  Any code within this function will be run when this step in the test is called.

```
14    const loginPage = new LoginPage(page);
```

This line creates a new instance of our page object (in this case the LoginPage) 

```
15    const productListingPage = new ProductListingPage(page);
```

We also want to use the ProductListingPage page object too

```
16    await loginPage.login(loginDetails.standard.username, loginDetails.standard.password);
```

Now we call a function on the LoginPage page object called login. 

You'll notice that we've passing in username and password. These are stored in a loginDetails file.  If we take a look at the top of the file we'll see there's the following import:

```
4   import { loginDetails } from '../datasets/login-details';
```

This allows us to access the details stored in 'login-details.ts' within the 'datasets' folder. We'll take a look at that file in more detail in next weeks bootcamp. 

The final line in our test is

```
17    await productListingPage.validateShoppingCartExists();
```

Which calls the function validateShoppingCartExists() on the ProductListingPage page object. 

### Page Objects

Lets take a closer look at the page objects we've mentioned about. First at the LoginPage.

```
1   import { expect, type Locator, type Page  } from '@playwright/test';
2
3   export class LoginPage  {
4       readonly page: Page;
5       readonly username: Locator;
6       readonly password: Locator;
7       readonly loginButton: Locator;
8       readonly shoppingCart: Locator;
9
10      constructor(page: Page) {
11          this.page = page;
12          this.username = page.getByTestId('username');
13          this.password = page.getByTestId('password');
14          this.loginButton = page.getByTestId('login-button');
15          this.shoppingCart = page.locator('#shopping_cart_link');
16      }
17
18      async login(username: string, password: string) {
19          await this.username.isVisible();
20          await this.username.fill(username);   
21          await this.password.fill(password);
22          await this.loginButton.click();
23      }
24  }
```

Let's take a closer look at the file...

Line 1 imports some important playwright functions we want to use from the Playwright test module.

```
1   import { expect, type Locator, type Page  } from '@playwright/test';
```

You can learn more about what [import is here](https://tutorials.yax.com/articles/javascript/import/), also read about what export does as we're going to be using that next.

```
3   export class LoginPage  {
```

This exports our page object class so that others can use the functions within it. 

```
4       readonly page: Page;
5       readonly username: Locator;
6       readonly password: Locator;
7       readonly loginButton: Locator;
8       readonly shoppingCart: Locator;
```
Here we declare the locators as variables, so that we can use them later.  You can read more about what [readonly means here](https://www.squash.io/tutorial-readonly-vs-const-in-typescript/) 

Note that the variables are declared outside of the constructor and other functions, so that they have full class scope and can be used by any functions. 

Next we have a constructor, this is called when you create a new instance of this class. You can see the new instance of the class being created here in login.spec.ts:

```
14    const loginPage = new LoginPage(page);
```

Lets take a look at the constructor now

```
10      constructor(page: Page) {
11          this.page = page;
12          this.username = page.getByTestId('username');
13          this.password = page.getByTestId('password');
14          this.loginButton = page.getByTestId('login-button');
15          this.shoppingCart = page.locator('#shopping_cart_link');
16      }
```

As you can see from the 'new LoginPage(page);' above, when creating a new instance of the class you pass in the object page, which can be seen in the constructor being received as a variable. 

We then store the page variable passed in so that it can be used by other functions. 

```
11          this.page = page;
```

Then the other variables are initialised with locators. Watch these videos which will explain locators, what they are and how to find the values for them within the webpage you are testing. [Locator basics](https://www.youtube.com/watch?v=dqw0OY4R6Hw) and [Built in locator locator helper functions](https://www.youtube.com/watch?v=Yqyhkk5Tr3E)


Finally we have a function which is exported by this page object and can be called by our test script to do something useful

```
18      async login(username: string, password: string) {
19          await this.username.isVisible();
20          await this.username.fill(username);   
21          await this.password.fill(password);
22          await this.loginButton.click();
23      }
```

We will look at this in more detail in week 3 bootcamp and we will also be creating a new function and adding more tests. 
