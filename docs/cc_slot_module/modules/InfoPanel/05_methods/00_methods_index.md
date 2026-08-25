---
id: "cc_slot_module:InfoPanel:methods:index"
title: "InfoPanel Methods Index"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "methods", "index"]
---

# 📑 InfoPanel Methods Index

---

## 1. Methods Table

| Method | Visibility | Parameters | Return | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| [`onLoadExtend`](onLoadExtend.md) | `public` | None | `void` | Binds node events, PageView listeners, and observers. |
| [`setupObserver`](setupObserver.md) | `public` | None | `void` | Watches UIManagerData.isInfoOpen. |
| [`showInfoPanel`](showInfoPanel.md) | `public` | `isActive: boolean` | `void` | Toggles popup modal animation. |
| [`onEnable`](onEnable.md) | `public` | None | `void` | Calls onResetPageView() and resetInfo(). |
| [`pageViewEvent`](pageViewEvent.md) | `public` | None | `void` | Page-turning callback updating buttons and title. |
| [`next`](next.md) | `public` | None | `void` | Advances PageView to next page. |
| [`previous`](previous.md) | `public` | None | `void` | Navigates PageView to previous page. |
| [`activeButtons`](activeButtons.md) | `public` | `id: number` | `void` | Enables/disables boundary navigation buttons. |
| [`resetInfo`](resetInfo.md) | `public` | None | `void` | Resets page index to 0 and scrolls to top. |
| [`onExit`](onExit.md) | `public` | None | `void` | Emits CLOSE_INFO_PANEL. |
| [`onResetPageView`](onResetPageView.md) | `public` | None | `void` | Toggles pageView active state next tick to fix geometry bugs. |
| [`onDestroy`](onDestroy.md) | `public` | None | `void` | Releases observer bindings. |
