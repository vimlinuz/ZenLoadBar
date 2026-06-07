(async () => {
  const [tab] = await browser.tabs.query({
    active: true,
    currentWindow: true,
  });
  while (true) {
    if (tab.status === "complete") {
      await browser.tabs.sendMessage(tab.id, { command: "reset" });
      document.head.removeChild(style);
      document.head.removeChild(line);
      break;
    }
  }
})();
// async function getCurrentTab() {
//   return browser.tabs.getCurrent();
// }
//
// (async () => {
//   while (true) {
//     const currentTab = await getCurrentTab();
//     if (currentTab.status === "complete") {
//     }
//   }
// })();
//
// // browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
// //   browser.tabs.sendMessage(tabs[0].id, { action: "removeElements" });
// // });
// function doTabLoadedStuff(tabId, changeInfo, tabInfo) {
//   if (changeInfo.status != "complete") return;
//   console.log("Page loaded in tab " + tabId);
// }
// browser.tabs.onUpdated.addListener(doTabLoadedStuff, {
//   urls: ["https://vimlinuz.github.io/mdecho"],
//   properties: ["status"],
// });
