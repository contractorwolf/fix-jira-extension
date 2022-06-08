// background.js
console.log('%c Jira Fixer Started ', 'background: #ADD8E6; color: #ffffff; font-weight bold; font-size: 30px; padding: 10px; font-family: verdana;');

//blocks main paywall api check
// chrome.webRequest.onBeforeRequest.addListener((d) => { return { cancel: true }; }, { urls:[
//     "https://www.washingtonpost.com/pwapiv2/article"
// ]}, ["blocking"]);

// fires when the pageload is complete
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
        console.log('---------------page load complete----------------');
    }
});
