function hello() {
    var selectedSites = document.getElementsByName("site");
    for (var i = 0; i < selectedSites.length; i++) {
        if (selectedSites[i].checked) {
            chrome.tabs.create({url: selectedSites[i].value});
        }
    }
}
 
document.getElementById('clickme').addEventListener('click', hello);
