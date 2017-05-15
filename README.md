# Extension crash bug

The extension will inject an iframe wiht source iframe.html into every page and redirect
any request to example.com to redirect.html.

When just manually testing this everything seems to work fine, but when run with selenium
the extension will crash when trying to open example.com.

### running the example

1. Install node.js (I used version 7.1.0)
2. Add chromedriver to the path (I tried with versions 2.27 and 2.29)
3. `npm install` to install webdriver dependencies
4. `node test.js` to run the example

### Notes

I initially noticed this with java bindings, adding any timeouts before navigating to the blocked page does not have any effect, navigating first to a page where the iframe is not injected however prevents the extension from crashing
