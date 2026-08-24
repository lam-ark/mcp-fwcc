---
id: "cc_slot_module:SlotButtonModule:properties_and_state:injected_services"
title: "SlotButtonModule & Subclasses Injected Services"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "SlotButtonSpine", "cc_slot_module", "properties", "injected_services"]
---

# 💉 SlotButtonModule & Subclasses Injected Services

---

## 1. Injected Dependencies Across Ecosystem

| Service | Type | Injected In | Purpose |
| :--- | :--- | :--- | :--- |
| `uiManager` | `UIManagerModule` | `SlotButtonModule` | Interrogated for `checkDisplayPopup()` validation to block spacebar triggers during popups. |
| `gameSettings` | `SlotGameSettings` | `SlotButtonNormal` | Synchronizes `isAutoSpin` state flag during round changes. |
| `dataStore` | `GameDataStore` | `SlotButtonSpine` | Reads `playSession.isResume` to determine reconnect animation states. |
