(async () => {
  const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  const response = await chrome.tabs.sendMessage(tab.id, "wav:get-version-info");
  chrome.runtime.lastError;
  console.log(response);

  document.getElementById("header").innerText = response.version
  chrome.action.setBadgeText(
    { text: response.version }
  )
})();