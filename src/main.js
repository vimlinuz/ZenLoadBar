const line = document.createElement("div");
Object.assign(line.style, {
  position: "fixed",
  top: "0",
  left: "45%",
  width: "4%",
  height: "2px",
  background: "white",
  zIndex: "999999",
  animation: "loading 1s linear infinite",
});

function show() {
  if (!line.isConnected) {
    document.documentElement.appendChild(line);
  }
}

function hide() {
  if (line.isConnected) line.remove();
}

show();

browser.runtime.onMessage.addListener((message) => {
  if (message.command === "show") show();
  if (message.command === "hide") hide();
});
