# Playwright DemoBlaze Automation

## 📘 Overview

This project is an end-to-end test automation framework built using Microsoft Playwright.
It validates the core functionalities of the Demoblaze web application, including:

*   🛍️ Product browsing

*   🧺 Adding items to the cart

*   🔐 User signup & login

*   💳 Order placement

## ⚙️ Key Features

✅ Page Object Model (POM) – modular and maintainable design  
✅ Detailed test steps and assertions using test.step()  
✅ Automatic screenshots on failure  
✅ Custom utility functions for data parsing, waits, and logging.  
✅ Cross-browser and parallel test execution.  
✅ Configurable test data via JSON or environment variables.  
✅ CI/CD-ready with GitHub Actions workflow.

## Project Structure

```
playwright-demoblaze/
.
├── package-lock.json
├── package.json
├── pages
│   ├── CartPage.js
│   ├── ContactUsPage.js
│   ├── HeaderPage.js
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── PlaceOrder.js
│   ├── ProductDetailsPage.js
│   └── SignUpPage.js
├── playwright-report
│   ├── data
│   │   └── fb2c80521cdcda9b08033de051975060e06b9fcb.md
│   └── index.html
├── playwright.config.js
├── README.md
├── test-results
│   └── baseTests-productdetailstest-Get-Product-Details-chromium
│       └── error-context.md
├── tests
│   ├── baseTests
│   │   ├── BaseTest.spec.js
│   │   ├── carttest.spec.js
│   │   ├── contactustest.spec.js
│   │   ├── placeordertest.spec.js
│   │   └── productdetailstest.spec.js
│   ├── datadriventest.spec.js
│   ├── example.spec.js
│   ├── homepagetest.spec.js
│   ├── logintest.spec.js
│   └── standalonetests
│       ├── homepagetest.spec.js
│       ├── logintest.spec.js
│       └── signuptest.spec.js
└── utils
    ├── testdata.js
    └── utilities.js

```

## Installation

```
# Clone the respository
git clone https://github.com/<your-username>/playwright-demoblaze.git

# Navigate to the project directory
cd playwright-demoblaze

# Install dependencies
    npm install

```

## Running Tests

```
# Run all tests
    npx playwright test

# Run a specific test
    npx playwright test tests/logintest.spec.js

# Run in headed mode (visible browser)
    npx playwright test --headed

# Generate and view report
    npx playwright show-report
```

## Test Scenarios

| Area              | Description                                     |
| ----------------- | ----------------------------------------------- |
| 🏠 **Home Page**  | Carousel images, navigation links, product list |
| 🧑‍💻 **Sign Up**    | Validate new and existing user registration     |
| 🔐 **Login**      | Login and logout flow                           |
| 🛒 **Cart**       | Add, verify, and remove products                |


## Utilities

**🧩 Helpers** – Common reusable functions (e.g., string-to-number conversion, random data generation)

**🧱 Page Object Model (POM)** – Each page encapsulates selectors and actions

**📸 Screenshots** – Captured automatically on test failures

## 📸 Test Artifacts

After each run, Playwright generates:

*   **🧾 HTML Report**: playwright-report/index.html

*   **📸 Screenshots & Videos**: Stored in test-results/

To open the report:

```
    npx playwright show-report
```
