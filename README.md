Overview

This project is an automated end-to-end testing framework built using Microsoft Playwright
.
It validates the core functionalities of the Demoblaze
 web application, including product browsing, adding to cart, user signup/login, and order placement.

The framework is designed for:

Cross-browser testing (Chromium, Firefox, WebKit)

Scalable test organization using Page Object Model (POM)

Easy integration with CI/CD pipelines

Reusable utilities and helpers# DemoBlazePlaywrightAutomation

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

