function openSelectedSites() {
    var selectedSites = document.getElementsByName("site");
    for (var i = 0; i < selectedSites.length; i++) {
        if (selectedSites[i].checked) {
            chrome.tabs.create({url: selectedSites[i].value});
        }
    }
}

function actionSites(selected) {
    var selectedSites = document.getElementsByName("site");
        for (var i = 0; i < selectedSites.length; i++) {
            selectedSites[i].checked = selected;
        }
}
 
document.getElementById('open').addEventListener('click', openSelectedSites);
document.getElementById('selectAll').addEventListener('click', function() {actionSites(true);});
document.getElementById('clearAll').addEventListener('click', function() {actionSites(false);});
