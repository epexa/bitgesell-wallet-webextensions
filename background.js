chrome.action.onClicked.addListener(() => {
	// chrome.tabs.create({ url: 'index.html' });
	chrome.windows.create({
		type: 'popup',
		url: 'index.html',
		width: 1300,
		height: 700
	});
});