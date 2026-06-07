# ZenLoadBar

## A Firefox extension that displays a loading animation bar at the top of the screen while a page is loading.

[ZenLoadBar](assets/ZenLoadBar.mp4)

## How it works

- Injects a thin animated bar at `document_start` so it appears as early as possible
- Background script listens for `tabs.onUpdated` events and sends **show**/**hide** messages to the content script
- Automatically hides when the page finishes loading via `readystatechange` fallback
- Supports same-tab navigation, redirects, and BFCache restores
