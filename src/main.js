const line = document.createElement("div");
Object.assign(line.style, {
  position: "fixed",
  top: "0",
  left: "0",
  width: "10%",
  height: "2px",
  background: "linear-gradient(90deg, transparent, #fff 50%, transparent)",
  zIndex: "999999",
  animation: "loading 1.5s ease-in-out infinite",
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
