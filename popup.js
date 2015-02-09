function openSelectedSites() {
    var selectedSites = document.getElementsByName("site");
    for (var i = 0; i < selectedSites.length; i++) {
        if (selectedSites[i].checked) {
            chrome.tabs.create({url: selectedSites[i].value});
        }
    }
}

function closeAllTabs() {
    chrome.tabs.query({}, function(tabs) {
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].url.indexOf("http://") != -1 ||
                tabs[i].url.indexOf("https://") != -1) {

                chrome.tabs.remove(tabs[i].id);
            }
        }
    });
}

function actionSites(selected) {
    var selectedSites = document.getElementsByName("site");
    for (var i = 0; i < selectedSites.length; i++) {
        selectedSites[i].checked = selected;
    }
}
 
document.getElementById('selectAll').addEventListener('click', function() {actionSites(true);});
document.getElementById('clearAll').addEventListener('click', function() {actionSites(false);});
document.getElementById('closeAll').addEventListener('click', closeAllTabs);
document.getElementById('open').addEventListener('click', openSelectedSites);
