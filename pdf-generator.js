const puppeteer = require('puppeteer');
const host = 'browser.crane.io';
const token = 'CRANE-TOKEN';

(async () => {
    const browser = await puppeteer.connect({
        browserWSEndpoint: `ws://${host}?token=${token}`
    });
    const page = await browser.newPage()
    await page.goto('https://crane-test-page.s3.amazonaws.com/index.html')
    await page.pdf({path: 'crane.pdf', format: 'A4'})
    await browser.close()
})()