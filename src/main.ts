import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  headless: false,
});

await browser.newPage();
await new Promise(resolve => setTimeout(resolve, 5000));
await browser.close();
