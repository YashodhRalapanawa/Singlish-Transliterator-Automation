# Singlish-Transliterator-Automation

## 👨‍🎓 Student Information
- **Name:** RALAPANAWA K.B.D.M.Y.K.B
- **IT Number:** IT23757936
- **Module:** Information Technology Project Management
- **Assignment:** 01 - Playwright Testing Project

## 📋 Project Overview
This project implements automated testing for a Singlish to Sinhala transliterator using Playwright, a modern end-to-end testing framework.

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Step 1: Clone the Repository
```bash
git clone https://github.com/YashodhRalapanawa/Singlish-Transliterator-Automation.git
cd Singlish-Transliterator-Automation
```

### Step 2: Install Dependencies
```bash
npm install
```

This command will install all required dependencies including Playwright and its browsers.

### Step 3: Install Playwright Browsers
```bash
npx playwright install
```

## 🧪 Running Tests

### Run All Tests
```bash
npm test
```

### Run Tests in Headed Mode
To see the browser interaction while tests run:
```bash
npx playwright test --headed
```

### Run Specific Test File
```bash
npx playwright test tests/singlish-to-sinhala.spec.ts
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

### Run Tests with UI Mode
For interactive test exploration and debugging:
```bash
npx playwright test --ui
```

## 📊 View Test Report
After running tests, view the HTML report:
```bash
npx playwright show-report
```

## 📁 Project Structure
- `tests/` - Test files
  - `singlish-to-sinhala.spec.ts` - Main test suite for Singlish transliterator
  - `example.spec.ts` - Example test cases
- `playwright.config.ts` - Playwright configuration
- `package.json` - Project dependencies and scripts
- `playwright-report/` - Generated test reports

## 🔧 Configuration
Test configuration can be modified in `playwright.config.ts` including:
- Browser types (Chromium, Firefox, WebKit)
- Test timeout settings
- Reporter options
- Retry policies
