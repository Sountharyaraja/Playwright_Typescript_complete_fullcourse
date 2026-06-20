# Playwright TypeScript Complete Full Course

A comprehensive guide to automated testing using **Playwright** and **TypeScript**. This project covers all aspects of test automation, from basic page interactions to advanced patterns like Page Object Model (POM).

## 📚 Course Chapters

- **Chapter 05**: Page Object Model Test Pattern
- Advanced test scenarios and best practices
- Allure reporting integration
- JUnit and JSON test reports

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Running Tests

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/Chapter05/05_PageObjectModelTest.spec.ts

# Run in headed mode (see browser)
npx playwright test --headed

# Run in debug mode
npx playwright test --debug

# Run with specific browser
npx playwright test --project=chromium
```

## 📊 Test Reports

### Allure Report
```bash
# Generate Allure report
npm run test:allure

# View report
npx allure serve allure-results
```

### JUnit Report
- Reports generated in: `junit-test-report.xml`

### JSON Report
- Reports generated in: `json-test-report.json`

## 📁 Project Structure

```
├── tests/                    # Test files
│   └── Chapter05/           # Chapter 5 tests (POM pattern)
├── src/                     # Page objects and utilities
├── test-data/               # Test data files
├── test-results/            # Test execution results
├── allure-results/          # Allure report data
├── allure-report/           # Allure HTML report
├── playwright.config.ts     # Playwright configuration
└── tsconfig.json            # TypeScript configuration
```

## 🔧 Configuration

### Playwright Config (`playwright.config.ts`)
- Multiple browser support (Chromium, Firefox, WebKit)
- Parallel test execution
- Retry logic for flaky tests
- Screenshot and video on failure

### TypeScript Config (`tsconfig.json`)
- Strict type checking enabled
- ES2020 target

## 📝 Key Features

- ✅ Page Object Model (POM) pattern
- ✅ Multi-browser testing (Chrome, Firefox, Safari)
- ✅ Parallel test execution
- ✅ Comprehensive test reporting (Allure, JUnit, JSON)
- ✅ Trace and video recording on failure
- ✅ TypeScript for type safety

## 🛠️ Scripts

```json
{
  "test": "playwright test",
  "test:headed": "playwright test --headed",
  "test:debug": "playwright test --debug",
  "test:allure": "allure generate allure-results --clean -o allure-report"
}
```

## 📚 Learning Path

1. Basic element interactions
2. Navigation and page handling
3. Advanced selectors and locators
4. Page Object Model implementation
5. Test reporting and CI/CD integration

## 🐛 Troubleshooting

### "failed to push" error
- Run `git pull origin main --allow-unrelated-histories`
- Then run `git push origin main`

### Tests failing locally
- Update Playwright: `npm install -D @playwright/test@latest`
- Reinstall browsers: `npx playwright install`

## 📖 Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright TypeScript Documentation](https://playwright.dev/docs/intro)
- [Page Object Model Best Practices](https://playwright.dev/docs/pom)

## 📄 License

This project is for educational purposes.

## 👤 Author

Sountharyaraja

## **Project History**

- **Initial setup & README:** Added this comprehensive README with install/run instructions, reporting, and project structure.
- **Git fix (push):** Resolved rejected push by merging remote history (`git pull origin main --allow-unrelated-histories`) and successfully pushed changes.
- **Playwright config updates:** Updated `playwright.config.ts` to start browsers maximized:
  - Set `use.viewport = null` and added `launchOptions.args = ['--start-maximized']`.
  - Sanitized device descriptor to remove `deviceScaleFactor` when using `viewport: null` to avoid Playwright errors.
- **Test data fixes:**
  - QA test data: updated `test-data/qa/testdata.json` to include `ModuleTestData` (Product, names, zipcode).
  - Dev test data: renamed `test-data/dev/Module1TestData,json` → `Module1TestData.json` and fixed the top-level key to `ModuleTestData`.
- **JSON loader fix:** Updated `src/utils/JsonHelper.ts` to correctly derive `TEST_EXECUTION_ENV` with `process.env.TEST_EXECUTION_ENV || 'qa'` and to merge JSON files in the chosen environment folder.

## **How to verify the main fixes**

- Verify test-data loads for `dev`:
```bash
# From project root (reads .env TEST_EXECUTION_ENV)
npx playwright test tests/Chapter05/08_RunTestBasedOnENV.spec.ts --headed
```

- Manually confirm dev data loads (example Node check):
```bash
node -e "require('dotenv').config({path:'./.env'}); process.env.TEST_EXECUTION_ENV='dev'; const { loadTestData } = require('./src/utils/JsonHelper'); loadTestData().then(d=>console.log(JSON.stringify(d.ModuleTestData,null,2)))"
```

- Check screen resolution (Windows PowerShell):
```powershell
Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.Screen]::PrimaryScreen.Bounds.Size
```

If you want, I can commit and push this README update for you. Otherwise run `git add README.md && git commit -m "docs: update README with
 project history" && git push`.
 
