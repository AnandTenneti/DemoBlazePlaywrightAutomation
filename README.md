# Playwright DemoBlaze Automation

## 📘 Overview

This project is an end-to-end test automation framework built using Microsoft Playwright.
It validates the core functionalities of the Demoblaze web application, including:

*   🛍️ Product browsing

*   🧺 Adding items to the cart

*   🔐 User signup & login

*   💳 Order placement

## ⚙️ Key Features
| Feature                                   | Description                                           |
| ----------------------------------------- | ----------------------------------------------------- |
| ✅ **Page Object Model (POM)**             | Modular, maintainable, and reusable test design       |
| 🧩 **Detailed Test Steps**                | Clear reporting using `test.step()` for traceability  |
| 📸 **Automatic Screenshots**              | Captures screenshots on failures for easier debugging |
| 🌐 **Cross-Browser & Parallel Execution** | Run tests faster across multiple browsers             |
| ⚙️ **Configurable Test Data**             | Supports JSON files or environment variables          |
| 🔄 **Custom Utility Functions**           | Includes helpers for waits, data parsing, and logging |
| ✅ **CI/CD Ready**                        | Integrated with GitHub Actions workflow               |


## Project Structure

```
playwright-demoblaze/
├── package.json # Project metadata
├── pages # Page Object Model classes
├── tests # All Playwright test files 
├── playwright.config.js # Playwright configuration
├── testdata # Input/test data
└── utils # Custom utility functions
├── package-lock.json
├── playwright-report/index.html  # HTML report
├── test-results/ # Screenshots and videos
├── README.md
```

## Test Structure

This project follows the Page Object Model (POM) design pattern.

### Folder Overview
- `pages/` – Page Object classes (locators + actions)
- `tests/` – Test specifications
- `testdata/` – Test input data (JSON)
- `utils/` – Helper utilities


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
