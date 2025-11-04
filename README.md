Overview

This project is an end-to-end test automation framework built using Microsoft Playwright.
It validates the core functionalities of the Demoblaze web application, including:

Product browsing

Adding items to the cart

User signup/login

Order placement

### Key Features

✅ Page Object Model (POM) – modular and maintainable design  
✅ Detailed test steps and assertions using test.step()  
✅ Automatic screenshots on failure  
✅ Custom utility functions for data parsing, waits, and logging.  
✅ Cross-browser and parallel test execution.  
✅ Configurable test data via JSON or environment variables.  
✅ CI/CD-ready with GitHub Actions workflow.   

Project Structure
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

Setup

Clone the repository

git clone https://github.com/<your-username>/playwright-demoblaze.git
cd playwright-demoblaze


Install dependencies

npm install


Install Playwright browsers

npx playwright install

Running Tests

Run all tests

npx playwright test

Test Scenarios

🏠 Home Page – carousel images, navigation links, product list

🧑‍💻 Sign Up – verify new and existing user registration

🔐 Login – login/logout flow

🛒 Cart – add, verify, and remove products

Utilities

Helpers: Common reusable functions (e.g., string-to-number conversion, random data)

POM Design: Each page encapsulates its selectors and methods for easy maintenance

Screenshots: Captured automatically on test failures

📸 Test Artifacts

After each run, Playwright generates:

HTML report: playwright-report/index.html

Screenshots & videos (on failure): test-results/

To open the report:

npx playwright show-report