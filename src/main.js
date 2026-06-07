const style = document.createElement("style");
style.textContent = `
  @keyframes loading {
    0%   { left: -10%; width: 10%; }
    50%  { left: 35%;  width: 25%; }
    100% { left: 110%; width: 10%; }
  }
`;

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
  const root = document.documentElement;
  if (!root) { requestAnimationFrame(show); return; }
  if (!style.isConnected) root.appendChild(style);
  if (!line.isConnected) root.appendChild(line);
}

function hide() {
  if (style.isConnected) style.remove();
  if (line.isConnected) line.remove();
}

browser.runtime.onMessage.addListener((message) => {
  if (message.command === "show") show();
  if (message.command === "hide") hide();
});

document.addEventListener("readystatechange", () => {
  if (document.readyState === "complete") hide();
});

window.addEventListener("pageshow", (e) => {
  if (e.persisted) show();
});

show();
