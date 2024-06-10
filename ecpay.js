const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://payment-ecpay.onrender.com/checkout');
  await page.waitForNavigation();
  await page.waitForTimeout(1000);
  await page.waitForSelector('#liWebATM');
  await page.click('#liWebATM');
  await page.waitForSelector('#selectWebATMBank', '10001@2000@webATM_TAISHIN');
  await page.click('#WebATMPaySubmit');
  await page.waitForTimeout(1000);
  await page.waitForSelector('#btnClose');
  await page.click('#btnClose');
//   await page.screenshot({ path: 'example.png' });

  await page.waitForNavigation();

  
  await page.waitForTimeout(50);
  await browser.close();

})();