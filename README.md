<h1>Overview</h1>

**This project is an automated end-to-end testing framework built using Microsoft Playwright
.
It validates the core functionalities of the Demoblaze
 web application, including product browsing, adding to cart, user signup/login, and order placement.

The framework is designed for:

- Cross-browser testing (Chromium, Firefox, WebKit)

- Scalable test organization using Page Object Model (POM)

- Easy integration with CI/CD pipelines

- Reusable utilities and helpers# DemoBlazePlaywrightAutomation**

Project Structure

```
playwright-demoblaze/
├── pages/
│   ├── HomePage.js
│   ├── HeaderPage.js
│   ├── SignUpPage.js
│   ├── CartPage.js
│   └── ProductPage.js
│
├── tests/
│   ├── standalone/
│   │   ├── signup.spec.js
│   │   ├── placeorder.spec.js
│   │   └── carousel.spec.js
│   └── regression/
│       └── fullflow.spec.js
│
├── utils/
│   ├── helpers.js
│   ├── testData.js
│   └── logger.js
│
├── playwright.config.js
├── package.json
├── README.md
└── .github/
    └── workflows/
        └── playwright.yml
```

<h3>Setup</h3>

#### 1. Clone the repository

git clone https://github.com/<your-username>/playwright-demoblaze.git
cd playwright-demoblaze

#### 2. Install dependencies

       npm install

### 3. Install Playwright browsers

       npx playwright install

<h3>Running tests</h3>

### Run all tests

     npx playwright test

### Test Scenarios

The suite includes automated tests for:

🏠 Home Page – carousel images, navigation links, product list

🧑‍💻 Sign Up – verify existing/new user registration

🔐 Login – login/logout flow

🛒 Cart – add, verify, and remove products

### Utilities

Helpers: Common reusable functions (e.g., convert strings to numbers, random data).

POM Design: Each page contains its own selectors and methods for easy maintenance.

Screenshots: Captured automatically on test failures.

🧩 Key Features
```
✅ Page Object Model (POM) – modular and maintainable
✅ Test Steps & Assertions – descriptive test flow with Playwright’s test.step()
✅ Automatic screenshots on failure
✅ Custom utility functions for data parsing, waits, and logging
✅ Cross-browser & parallel test execution
✅ Configurable test data via JSON or environment variables
✅ CI/CD ready with example GitHub Actions workflow ```

📸 Test Artifacts

After each run, Playwright stores:

HTML reports: playwright-report/index.html

Screenshots & videos (on failure): test-results/

To open the report:

    npx playwright show-report