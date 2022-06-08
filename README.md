# Jira Announcement Blocker

This Chrome Extension blocks the annoying JIRA announcement banner in yellow at the top of the screen.  For me this banner was useless and took up too much visual space. If you remove this extension you will see the announcements banner again. 

![alt text](https://github.com/contractorwolf/fix-jira-extension/blob/master/images/github/jira-announcement-banner.PNG?raw=true)
 
All you need to do is clone the repo to your local machine and then go to the Chrome Extension page in Google chrome, here:
```
chrome://extensions/
```

When you are on that page you will see the "Load unpacked" button in the top left (you will need to be in "developer mode"). When you click that button point to the folder in the repo that contains the manifest.json file.  You can look at the manifest file and the background.js files and see that they are used to look at only web requests that go to washigtonpost.com urls and are only set to block one specific url that is specific to the paywall.  When you run this Chrome Extension it will hide the yellow announcement banner.

