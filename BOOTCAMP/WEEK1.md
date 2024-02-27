# Test Automation Bootcamp - **Week 1**
Welcome to the test automation bootcamp. This is a self led activity which runs over 4 weeks with the support of learning together with a group. 

The aim of the bootcamp is to teach the skills needed to do test automation using the popular Playwright test automation tool and Typescript.  You do not need any programming skills to do this bootcamp. 

## What you're going to learn in Week 1
1. Installing Visual Studio Code and getting to know it
2. Downloading a project from GitHub
3. Opening and running a Playwright test suite
4. The key elements of a Playwright test suite
5. Best practices, including the Page Object Model
6. Using locators to get elements on a web page

## Getting Development Environment Setup
To start off you need to get the code from GitHub and install Visual Studio Code. This is all detailed in the [**README.md**](https://github.com/Mindera/tech-accelerator-test-playwright/blob/main/README.md) file in this repository.

Follow all the instructions in **Steps 1 to 3**

If you've never used Visual Studio Code before then watch [this quick introduction video](https://www.youtube.com/watch?v=B-s71n0dHUk) to get familiar with it.

## Running Your First Test
Now that we've got the code and installed the application which we'll run it with, lets try running the test suite and see what it does.

Again using the [**README.md**](https://github.com/Mindera/tech-accelerator-test-playwright/blob/main/README.md) file in this repository, follow **Step 3** to install the necessary dependencies. This will automatically install all of the Node modules (third party code libraries) and also install Playwright libraries. 

Then follow **Step 4** using the **Headed** option so that you can view what the test is doing. Then try the **Debug** option and step through the code one line at a time using the *Step Over* button (or F10)

## Understanding What's In The Project
In the [**README.md**](https://github.com/Mindera/tech-accelerator-test-playwright/blob/main/README.md) file, **Step 5** has a lot of details about the Playwright Project and teaches you the basics of best practices. Read through this section and familiarise yourself with the concepts. Do not worry about the programming language specifics at this point, we'll look into those next week.

## Lets Look At What Locators Are
Locators are used to get access to different elements on your website, such as text and buttons.  Once you've got a locator, you can do things like enter text, click and perform tests upon the elements. 

First you need to understand how to inspect elements in your browser, so that you can dig into the code and find test-data id's and identify which kind of locator you're going to need to access the elements on the website. [This guide explains really well how to inspect elements within your website](https://blog.hubspot.com/website/how-to-inspect).

Playwright's own documentation has a [great guide on locators](https://playwright.dev/docs/locators), read through this and familiarise yourself with how they work. The main one you'll use at first is **getByTestId()**.

## If You Got This Far...

Well done for following through all the step above. I hope you've enjoyed setting up the project and running your first playwright test. 

The fun bit starts now, starting to learn how to write tests and learning the basics of the Javascript and Typescript programming languages.

If you're wanting to dive a little deeper at this point and get a headstart on next weeks lessons, watch this [Playwright Tutorial Crash Course](https://www.youtube.com/watch?v=Ov9e_F8I5zc) by Dilpreet Johal. It'll give you a good overview of Playwright and programming elements. Don't worry if you don't understand everything, we'll be going through them in more detail in the following weeks.
