browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(changeInfo.status);
});

browser.runtime.onMessage.addListener((message, sender) => {
  if (message.type === "GET_TAB_INFO") {
    return browser.tabs
      .query({ active: true, currentWindow: true })
      .then((tabs) => {
        return tabs[0]; // send back to content script
      });
  }
});
