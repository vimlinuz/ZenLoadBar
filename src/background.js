browser.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
  if (changeInfo.status === "loading") {
    browser.tabs.sendMessage(tabId, { command: "show" }).catch(() => {});
  }
  if (changeInfo.status === "complete") {
    browser.tabs.sendMessage(tabId, { command: "hide" }).catch(() => {});
  }
});
