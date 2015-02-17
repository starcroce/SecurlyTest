function openSelectedSites() {
    var selectedSites = document.getElementsByTagName("input");
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

function actionSites(selected, type) {
    var selectedSites, i;
    if (type == "all") {
        selectedSites = document.getElementsByTagName("input");
        for (i = 0; i < selectedSites.length; i++) {
            selectedSites[i].checked = selected;
        }
    } else if (type == "porn") {
        selectedSites = document.getElementsByName("sexual");
        for (i = 0; i < selectedSites.length; i++) {
            selectedSites[i].checked = selected;
        }
    } else if (type == "search") {
        selectedSites = document.getElementsByName("search");
        for (i = 0; i < selectedSites.length; i++) {
            selectedSites[i].checked = selected;
        }
    }
}
 
document.getElementById('selectAll').addEventListener('click', function() {actionSites(true, "all");});
document.getElementById('clearAll').addEventListener('click', function() {actionSites(false, 'all');});

document.getElementById('selectSex').addEventListener('click', function() {actionSites(true, "porn");});
document.getElementById('clearSex').addEventListener('click', function() {actionSites(false, "porn");});

document.getElementById('selectSearch').addEventListener('click', function() {actionSites(true, "search");});
document.getElementById('clearSearch').addEventListener('click', function() {actionSites(false, "search");});

document.getElementById('closeAll').addEventListener('click', closeAllTabs);
document.getElementById('open').addEventListener('click', openSelectedSites);
