chrome.webRequest.onCompleted.addListener(
	function (details) {
		for (var i = 0; i < details.responseHeaders.length; i++) {
			if (details.responseHeaders[i].name === 'X-Nette-Error-Log') {
				chrome.tabs.create({
					url: 'file://' + details.responseHeaders[i].value
				});
				break;
			}
		}
	},
	{urls: ['<all_urls>']},
	['responseHeaders']
);
