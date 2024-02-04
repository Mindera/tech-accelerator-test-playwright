import { defineConfig, devices } from '@playwright/test';
import * as os from "os";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */


export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,
  expect: {
    timeout: 5000
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers:5,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['dot'], // -> console
    ['list'], //  -> JSON
    [
      "allure-playwright",
      {
        detail: true,
        suiteTitle: true,
        environmentInfo: {
          framework: "playwright",
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,          
        },
      },
    ],
    ['json', {outputFile: 'allure-results/report.json'}]
  ],
 
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use : {
    baseURL: "https://www.saucedemo.com/",
    headless: true,
    viewport: { width: 1280, height: 900 },
    screenshot: "on",
    video: "on",
    ignoreHTTPSErrors: true,
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
    testIdAttribute: 'data-test',
},

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

   /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    /*{
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
