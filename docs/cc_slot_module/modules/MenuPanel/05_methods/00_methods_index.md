---
id: "cc_slot_module:MenuPanel:methods:index"
title: "MenuPanel Methods Index"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "index"]
---

# 📑 MenuPanel Methods Index

---

## 1. Master Methods Overview

`MenuPanel` controls the slide-out hamburger navigation drawer, managing audio muting toggles and modal routing.

---

## 2. Methods Table

| Method | Visibility | Parameters | Return | Summary Description |
| :--- | :--- | :--- | :--- | :--- |
| [`onLoadExtend`](onLoadExtend.md) | `public` | None | `void` | Retrieves data models, sets up reactive observers for audio and drawer open states, and sets icon states. |
| [`start`](start.md) | `protected`| None | `void` | Executes initial button layout spacing adjustment. |
| [`updateButtonLayout`](updateButtonLayout.md) | `public` | None | `void` | Modifies button horizontal spacing when embedded inside iframe wrappers. |
| [`setupObserver`](setupObserver.md) | `public` | None | `void` | Watches `isMenuPanelOpen`, `isEnableBGM`, and `isEnableSFX` in data models. |
| [`init`](init.md) | `public` | None | `void` | Sets initial active states for audio on/off icon nodes without triggering sound glitches. |
| [`onEnableBGM`](onEnableBGM.md) | `public` | `isEnableBGM: boolean` | `void` | Swaps BGM icon active state and informs `soundPlayer`. |
| [`onEnableSFX`](onEnableSFX.md) | `public` | `isEnableSFX: boolean` | `void` | Swaps SFX icon active state and informs `soundPlayer`. |
| [`toggleMusic`](toggleMusic.md) | `public` | None | `void` | Emits `GameLogicUIEvents.TOGGLE_BGM` and plays click sound. |
| [`toggleSFX`](toggleSFX.md) | `public` | None | `void` | Emits `GameLogicUIEvents.TOGGLE_SFX` and plays click sound. |
| [`onShowPaytable`](onShowPaytable.md) | `public` | None | `void` | Emits `OPEN_PAY_TABLE_PANEL` and optionally auto-hides menu. |
| [`onShowInfo`](onShowInfo.md) | `public` | None | `void` | Emits `OPEN_INFO_PANEL` and optionally auto-hides menu. |
| [`onShowBetHistory`](onShowBetHistory.md) | `public` | None | `void` | Emits `OPEN_BET_HISTORY_PANEL` and optionally auto-hides menu. |
| [`onCloseMenuPanel`](onCloseMenuPanel.md) | `public` | None | `void` | Plays SFX and emits `CLOSE_MENU_PANEL`. |
| [`onDestroy`](onDestroy.md) | `public` | None | `void` | Unbinds observers on `UIManagerData` and `GameSettingData`. |
