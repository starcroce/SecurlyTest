function loadSites() {
    chrome.tabs.create({url: "http://www.securly.com"});
    chrome.tabs.create({url: "http://www.amazon.com"});
    chrome.tabs.create({url: "https://www.youtube.com/results?search_query=porn"});
    chrome.tabs.create({url: "https://www.youtube.com/results?search_query=simpsons"});
    chrome.tabs.create({url: "http://www.maxim.com"});
}

chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.query({}, function(tabs) {
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].url.indexOf("http://") != -1 ||
                tabs[i].url.indexOf("https://") != -1) {

                chrome.tabs.remove(tabs[i].id);
            }
        }
    });

    loadSites();
});