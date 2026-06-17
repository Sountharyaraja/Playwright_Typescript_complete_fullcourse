# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter05\05_PageObjectModelTest.spec.ts >> User can purchase a product successfully
- Location: tests\Chapter05\05_PageObjectModelTest.spec.ts:10:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Sauce Labs Backpack')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText('Sauce Labs Backpack')

```

```yaml
- text: Swag Labs
- textbox "Username": sount
- textbox "Password": secret_sauce
- 'heading "Epic sadface: Username and password do not match any user in this service" [level=3]':
  - button
  - text: "Epic sadface: Username and password do not match any user in this service"
- button "Login"
- heading "Accepted usernames are:" [level=4]
- text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
- heading "Password for all users:" [level=4]
- text: secret_sauce
```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | 
  3  | export class HomePage {
  4  |     readonly page: Page;
  5  |     readonly addToCart: Locator;
  6  |     readonly menuItem: Locator;
  7  |     readonly logoutButton: Locator;
  8  | 
  9  |     constructor(page: Page) {
  10 |         this.page = page;
  11 |         this.addToCart = page.locator('#add-to-cart-sauce-labs-backpack');
  12 |         this.menuItem = page.locator("react-burger-menu-btn");
  13 |         this.logoutButton = page.getByLabel("Logout");
  14 |     }
  15 | 
  16 |     async clickOnProduct(productName: string) {
  17 |         await expect(
  18 |             this.page.getByText(productName)
> 19 |         ).toBeVisible();
     |           ^ Error: expect(locator).toBeVisible() failed
  20 |         await this.page.getByText(productName).click();
  21 |     }
  22 | 
  23 |     async clickMenuItem() {
  24 |         await this.menuItem.click();
  25 |     }
  26 | 
  27 |     async clickLogout() {
  28 |         await this.logoutButton.click();
  29 |     }
  30 |     
  31 | }
```