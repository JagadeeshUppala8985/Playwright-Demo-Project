const { test, expect } = require('@playwright/test');

test('Open Browser', async ({ page }) => {
    await page.goto('');

    await expect(page.locator('h1'))
        .toHaveText('Ultimate Test Automation Practice Page - Master Edition');
});


test('Fill the form', async ({ page }) => {

    await page.goto('');

    const firstName = page.getByLabel('First Name');

    await firstName.fill('Jagadeesh');

    const data = await firstName.inputValue();

    expect(data).toBe('Jagadeesh');
    

});

