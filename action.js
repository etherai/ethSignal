document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('openPane').addEventListener('click', function(evt) {
	    chrome.tabs.create({windowId: window.id, url:chrome.extension.getURL('etherSignal.html')});
	}, false);
}, false);
