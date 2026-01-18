const {test, expect} = require('@playwright/test');

test('OrangeHRM login using property and CSS locators', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/')

    //Xpath for username
    await page.locator('//input[@name="username"]').fill('Admin')

    //Xpath for password
    await page.locator('//input[@name="password"]').fill('admin123')

    //Xpath for login button
    await page.locator('//button[contains(@class,"orangehrm-login-button")]').click()

    //Xpath for dashboard visible
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})