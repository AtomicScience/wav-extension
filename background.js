chrome.tabs.onActivated.addListener(async tabInfo => {
    try {
        const responce = await chrome.tabs.sendMessage(tabInfo.tabId, "wav:get-version-info");
        chrome.action.setBadgeText(
            { text: responce.version }
        )
    } catch {
        chrome.action.setBadgeText(
            { text: '' }
        )
    }
});
