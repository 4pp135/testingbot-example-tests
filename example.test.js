// example.test.js
// Basic automated test example for TestingBot (Playwright)

const { chromium } = require('playwright');

(async () => {
  console.log('Starting test with TestingBot...');

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://testingbot.com');
  console.log('Page loaded successfully');

  await page.screenshot({ path: 'screenshot.png' });
  console.log('Screenshot saved');

  await browser.close();
  console.log('Test completed successfully');
})();
