# **Playwright Automation - OrangeHRM Login Project**

## Overview

This project automates the **Login** functionality of the **OrangeHRM** web application using **Playwright with JavaScript**.

Key highlights include:

* Using **XPath selectors** to locate web elements
* Automating user actions: entering **Username** and **Password**, clicking **Login**
* Validating successful login by checking the **URL** after login
* Simple, maintainable automation for core login functionality

This project is ideal for learning Playwright basics, element handling, and post-login validation.

---

## Test Scenario Covered

### 1️⃣ Login Flow Validation

* Navigate to the **OrangeHRM login page**
* Locate **Username** and **Password** fields using XPath
* Enter valid credentials
* Click the **Login** button
* Assert that the current URL matches the expected dashboard URL after login

---

## Tech Stack

| Component     | Description                                   |
| ------------- | --------------------------------------------- |
| **Framework** | Playwright                                    |
| **Language**  | JavaScript (ES6)                              |
| **Selectors** | XPath                                         |
| **Browser**   | Chromium (default), supports Firefox & WebKit |
| **Approach**  | Direct scripting + Assertions on URL          |

---

## Step-by-Step Setup

### 1️⃣ Create Project Folder

```bash
mkdir Playwright_OrangeHRM
cd Playwright_OrangeHRM
```

### 2️⃣ Initialize Node Project

```bash
npm init -y
```

### 3️⃣ Install Playwright

```bash
npm install playwright --save-dev
```

### 4️⃣ Install Test Runner (Optional)

```bash
npm install @playwright/test --save-dev
```

### 5️⃣ Run Playwright Tests

* Open a test file (e.g., `loginTest.spec.js`)
* Execute:

```bash
npx playwright test
```

* Or run in headed mode to see browser interactions:

```bash
npx playwright test --headed
```

---

## Folder Structure

```
Playwright_OrangeHRM/
│
├── tests/
│   └── loginTest.spec.js            # Test file containing login automation
├── package.json
├── package-lock.json
├── playwright.config.js             # Playwright configuration file (optional)
└── README.md
```

---

## Key Features

* XPath-based element locators for precise targeting
* Automated entry of **username** and **password**
* Login button click automation
* URL validation after login to confirm successful authentication
* Simple and easy-to-understand Playwright automation flow

---
