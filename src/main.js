// const line = document.createElement("div");
//
// Object.assign(line.style, {
//   position: "fixed",
//   top: "0",
//   // (100-10)/2
//   left: "45%",
//   width: "10%",
//   height: "2px",
//   background: "white",
//   zIndex: "999999",
// });
//
// document.body.appendChild(line);

const line = document.createElement("div");

Object.assign(line.style, {
  position: "fixed",
  top: "0",
  left: "45%",
  // width: "10%",
  height: "2px",
  background: "white",
  zIndex: "999999",
  animation: "loading 1s linear infinite",
});

const style = document.createElement("style");
style.textContent = `
  @keyframes loading {
    from {
      width: 0%;
    }
    to {
      width: 10%;
    }
  }
`;

document.head.appendChild(style);
document.body.appendChild(line);

async function reset(tab) {
  await browser.scripting.removeCSS({
    target: { tabId: tab.id },
    css: hidePage,
  });
  await browser.tabs.sendMessage(tab.id, { command: "reset" });
}
