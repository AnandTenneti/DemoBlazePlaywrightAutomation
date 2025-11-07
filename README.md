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
🚧 CI/CD-ready with GitHub Actions workflow.

## Project Structure

```
📂 DemoBlazePlaywrightAutomation
┣ 📂 tests # All Playwright test files
┣ 📂 pages # Page Object Model classes
┣ 📂 utils # Custom utility functions (waits, logs, etc.)
┣ 📂 testdata # Input/test data (JSON files)
┣ 📂 screenshots # Captured screenshots on failure
┣ 📄 playwright.config.ts # Playwright configuration
┣ 📄 package.json
┗ 📄 README.md

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
