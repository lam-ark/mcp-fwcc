---
id: "cc_slot_module:AutoSpinPanel:methods:index"
title: "AutoSpinPanel Methods Index"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "methods", "index"]
---

# 📑 AutoSpinPanel Methods Index

---

## 1. Master Methods Overview

`AutoSpinPanel` manages the bottom-sheet drawer for selecting automated spin round counts in mobile portrait mode.

---

## 2. Methods Table

| Method | Visibility | Parameters | Return | Summary Description |
| :--- | :--- | :--- | :--- | :--- |
| [`onLoadExtend`](onLoadExtend.md) | `public` | None | `void` | Binds `UIManagerData` observer, dynamically instantiates auto-spin number options, and sets up lifecycle hooks. |
| [`setupObserver`](setupObserver.md) | `public` | None | `void` | Observes `UIManagerData.isAutoSpinPanelOpen` to toggle popup drawer animations. |
| [`init`](init.md) | `public` | None | `void` | Reads `AutoSpinPanelConfig.AUTO_SPIN_NUMBERS` and instantiates `AutoSpinNumber` prefabs into `numberHolder`. |
| [`setDefaultSelectedIndex`](setDefaultSelectedIndex.md) | `public` | None | `void` | Sets initial highlighted selection to the last index (or default round limit). |
| [`onSelectAutoSpin`](onSelectAutoSpin.md) | `public` | `index: number` | `void` | Updates selection state, plays click SFX, and toggles highlight frames on all option items. |
| [`onStartAutoSpin`](onStartAutoSpin.md) | `public` | None | `void` | Emits `GameLogicUIEvents.START_AUTO_SPIN` with chosen round count and dismisses the panel. |
| [`onAutoSpinPanelOpen`](onAutoSpinPanelOpen.md) | `public` | `isOpen: boolean` | `void` | Toggles popup open/close animation. |
| [`closePanel`](closePanel.md) | `public` | None | `void` | Plays audio feedback and closes the drawer. |
| [`onDestroy`](onDestroy.md) | `public` | None | `void` | Releases all observer subscriptions on `UIManagerData`. |
