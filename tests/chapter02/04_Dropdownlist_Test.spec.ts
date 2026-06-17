//import playwright module
import { test, expect } from '@playwright/test';

test('Handling dropdown lists', async ({ page }) => {
await page.goto('https://practice.expandtesting.com/');

//click on dropdown list
await page.getByText('Dropdown List').click();

//select by value
await page.locator("select[id='dropdown']").selectOption('1');
await expect(page.locator("select[id='dropdown']")).toHaveValue('1');
await page.locator("select[id='elementsPerPageSelect']").selectOption('20');
await expect(page.locator("select[id='elementsPerPageSelect']")).toHaveValue('20');
await page.locator('#country').selectOption('IN');
await expect(page.locator('#country')).toHaveValue('IN');

//select by label
await page.locator("select[id='dropdown']").selectOption({label:'Option 1'});
const selectedOption1=await page.locator("select[id='dropdown']").inputValue();
await expect(selectedOption1).toBe('1');
await page.locator("select[id='elementsPerPageSelect']").selectOption({label:'50'});
const selectedOption2=await page.locator("select[id='elementsPerPageSelect']").inputValue();
await expect(selectedOption2).toBe('50');
await page.locator('#country').selectOption({label: 'Aland Islands'});
const selectedOption3=await page.locator('#country').inputValue();
console.log(selectedOption3);

//select by index
await page.locator("select[id='elementsPerPageSelect']").selectOption({index:0});
await expect(page.locator("select[id='elementsPerPageSelect']")).toHaveValue('10');
await page.locator("select[id='elementsPerPageSelect']").selectOption({index:2});
await expect(page.locator("select[id='elementsPerPageSelect']")).toHaveValue('50');
await page.locator('#country').selectOption({index: 3});
await expect(page.locator('#country')).toHaveValue('AL');

//get all the list of elements
const options1=await page.locator("select[id='dropdown']").allTextContents();
    options1.forEach(option => {
        console.log(option);
    });

//get all the list of elements
const listOfPages=await page.locator("select[id='elementsPerPageSelect']").allInnerTexts();
for(let i=0;i<listOfPages.length;i++){
    console.log(listOfPages[i]);
}

//get all country names
const listOfCountries=await page.locator("select[id='country']").allInnerTexts();
for(let i=0;i<listOfCountries.length;i++){
    console.log(listOfCountries[i]);
}
});