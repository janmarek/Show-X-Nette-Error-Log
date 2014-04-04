chrome.webRequest.onCompleted.addListener(
	function (details) {
		for (var i = 0; i < details.responseHeaders.length; i++) {
			var headerName = details.responseHeaders[i].name;
			if (headerName === 'X-Nette-Error-Log' || headerName === 'X-Tracy-Error-Log') {
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
