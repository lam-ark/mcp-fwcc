---
id: "cc_slot_module:SettingPanel:methods:index"
title: "SettingPanel Methods Index"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "index"]
---

# 📑 SettingPanel Methods Index

---

## 1. Methods Table

| Method | Visibility | Parameters | Return | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| [`onLoadExtend`](onLoadExtend.md) | `public` | None | `void` | Binds data model references and observers. |
| [`setupObserver`](setupObserver.md) | `public` | None | `void` | Observes isSettingsOpen, isEnableBGM, isEnableSFX. |
| [`start`](start.md) | `public` | None | `void` | Calls init(). |
| [`init`](init.md) | `public` | None | `void` | Synchronizes toggle checkmarks and sets initialized to true. |
| [`onEnableBGM`](onEnableBGM.md) | `public` | `isEnableBGM: boolean` | `void` | Updates bgmToggle and soundPlayer BGM state. |
| [`onEnableSFX`](onEnableSFX.md) | `public` | `isEnableSFX: boolean` | `void` | Updates sfxToggle and soundPlayer SFX state. |
| [`onSettingOpen`](onSettingOpen.md) | `public` | `isActive: boolean` | `void` | Toggles popup modal animation. |
| [`onSfxToggle`](onSfxToggle.md) | `public` | None | `void` | Emits TOGGLE_SFX and plays click SFX. |
| [`onBgmToggle`](onBgmToggle.md) | `public` | None | `void` | Emits TOGGLE_BGM and plays click SFX. |
| [`onExit`](onExit.md) | `public` | None | `void` | Emits CLOSE_SETTINGS_PANEL. |
| [`onShowJackpotHistory`](onShowJackpotHistory.md) | `public` | None | `void` | Emits OPEN_JACKPOT_HISTORY_PANEL. |
| [`onShowBetHistory`](onShowBetHistory.md) | `public` | None | `void` | Emits OPEN_BET_HISTORY_PANEL. |
| [`onDestroy`](onDestroy.md) | `public` | None | `void` | Releases all observer bindings. |
