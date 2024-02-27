# Mindera Tech Accelerator for Playwright

This Git repository is a tech accelerator which can be used as a starting point when using Playwright to write automation tests.  It's pre-configured and you can be up and running, writing tests within a matter of minutes, instead of doing hours of repetitive config and setup.

## STEP 1: Download the repository

> WARNING: **DO NOT** *Clone* or *Fork* this repository. You will use the code in this repository to create your own repository later on in your own GitHub account, so just download it for now. 

1. On the [repository page](https://github.com/Mindera/tech-accelerator-test-playwright), click the green **Code** button.

2. In the menu that appears, click **Download ZIP**. The entire repository will be downloaded to your device as a zipped file.

3. Unzip the downloaded file to a new folder called **Source** on your machine, I recommend putting it in your documents folder.

## STEP 2: Install Microsoft Visual Studio Code

If you've never done this before then I recommend following [this guide](https://code.visualstudio.com/learn/get-started/basics)

## STEP 3: Install dependencies

1. Open the new code in VS Code.  

    > NOTE: You open a folder, not a file, in VS Code, so open the new *tech-accelerator-test-playwright* folder (or whatever name you've renamed it to for your new project)

2. Open a Terminal by pressing CTRL+`. More details on the Terminal [can be found here](https://code.visualstudio.com/docs/terminal/basics)

3. Run the following commands in the terminal:

```
npm install
npx playwright install 
```

## STEP 4: Run tests test

This project has been setup to test the [Swag Labs demo website](https://www.saucedemo.com/) created by Sauce Labs. It's a handy little shopping cart website which has multiple test users and allows you to try out different automation testing techniques

There's a number of ways that you can run the test suite.  

> NOTE: It's set up to run [*headless*](https://www.softwaretestinghelp.com/headless-browser-testing/) by default so that it can run in a [GitHub CI Pipeline](https://playwright.dev/docs/ci). This means that it runs without showing a browser window

### Basic
Headless without displaying a browser, the quickest way to run the tests. Not good if things fail though as it's hard to work out what went wrong
```
npx playwright test
```

### Headed
This runs and displays a browser window which shows you what the tests are doing
```
npx playwright test --project chromium --headed
```

### Debug 
Opens a browser window and a debug dialog. Allows you to step though the tests code line by line and debug what heach line is doing or not doing if the test fails. [See more information on this here](https://playwright.dev/docs/debug#playwright-inspector)
```
npx playwright test --project chromium --debug
```

### Advanced User Interface
This opens the new Playwright user interface and allows you to run individual tests or whole test suites. [See more information on this here](https://playwright.dev/docs/test-ui-mode)
```
npx playwright test --project chromium --ui
```

## STEP 5: Get familiar with the Playwright project
This project thas been set up to use some industry best practices which are recommended when setting up your own Playwright automation test project. 

### Page Object Model
The Page Object Model is a design pattern widely used in test automation to create more maintainable and scalable test suites.

Here's two good resources for learning about Page Object Models:

1. [LambdaTest Blog Post](https://www.lambdatest.com/learning-hub/playwright-page-object-model)
2. [Playwright documentation](https://playwright.dev/docs/pom)

The two key folders in this project which you'll be using are the __*tests*__ and __*pages*__ folders.

### Datasets
Another best practice is to keep your test data in one manageable place. It encourages re-use of data and improves overall data manageability, as errors do occur when you have so called *magic* data spread around the code with no real understanding of why it's there.

[This guide](https://medium.com/@tpshadinijk/improve-maintainability-in-playwright-scripts-with-test-data-json-ec3ffc8174e5) explains the use of data sets well

The data for this project is kept in the __*datasets*__ folder

### Reporting
It's good to have nicely formated reports for your tests. This is especially useful when they are ran in a pipeline and the results are reviewed some time after.  We've included [Allure Reports](https://allurereport.org/docs/playwright/) with this Playwright setup, it's a really easy to use reporting tool. Check out the [user guide on it here](https://allurereport.org/docs/playwright/)

### Other Best Practices

There are a number of test automation best practices. Here's the ones that [Playwright Recommends](https://playwright.dev/docs/best-practices)
