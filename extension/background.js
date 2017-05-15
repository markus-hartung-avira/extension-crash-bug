chrome.webRequest.onBeforeRequest.addListener((details) => {
  return { redirectUrl: chrome.extension.getURL('redirect.html') };
}, {
  urls: ['*://*.example.com/*']
}, ['blocking']);
