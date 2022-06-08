# Washington Post - Paywall Blocker

This Chrome Extension allows you to bypass the Washington Post paywall on articles
 
All you need to do is clone the repo to your local machine and then go to the Chrome Extension page in Google chrome, here:
```
chrome://extensions/
```

When you are on that page you will see the "Load unpacked" button in the top left (you will need to be in "developer mode"). When you click that button point to the folder in the repo that contains the manifest.json file.  You can look at the manifest file and the background.js files and see that they are used to look at only web requests that go to washigtonpost.com urls and are only set to block one specific url that is specific to the paywall.  When you run this Chrome Extension you can go to Washington Post articles and not get blocked by the paywall.

https://www.washingtonpost.com/
