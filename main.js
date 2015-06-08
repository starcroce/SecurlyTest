var tabId = "";

chrome.tabs.onCreated.addListener(function(tab) {
    tabId = tab.id;
    console.log(tabId);
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var url = changeInfo.url;
    console.log(tabId, url);
});