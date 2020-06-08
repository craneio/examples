const puppeteer = require('puppeteer');
const host = 'browser.crane.io';
const token = 'CRANE-TOKEN';

async function ssr(url) {
    const browser = await puppeteer.connect({
        browserWSEndpoint: `ws://${host}?token=${token}`
    });
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'networkidle0'});
  const html = await page.content(); // serialized HTML of page DOM.
  await browser.close();
  return html;
}

ssr('https://crane-test-page.s3.amazonaws.com/index.html')