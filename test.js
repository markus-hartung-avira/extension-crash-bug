const path = require('path');

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const options = new chrome.Options();
options.addArguments("load-extension=" + path.resolve('extension'));

const driver = new webdriver.Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

// on this page the an iframe from the extension will be injected
driver.get('http://www.example.org');
// this page will be redirected to an extension page and subsequently the extension will
// crash, adding a delay here will not change the behavior
driver.get('http://www.example.com');

