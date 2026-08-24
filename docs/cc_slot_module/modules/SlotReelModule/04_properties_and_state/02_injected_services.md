---
id: "cc_slot_module:SlotReelModule:properties:injected_services"
title: "SlotReelModule Injected Services & Managers"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "properties", "injected_services", "symbol_manager"]
---

# 💉 SlotReelModule Injected Services & Managers

---

## 1. Direct Dependency Injection Reference

| Service / Manager | Type | Injection Method | Role in Module |
| :--- | :--- | :--- | :--- |
| `symbolManager` | `SlotSymbolManager` | `initReel({ pool })` | Instantiates and recycles static/blur symbol nodes via object pool. |
| `reelManager` | `ReelManager` | `initReelManager()` | Internal state machine tracking step counts, scroll velocity, and reel state. |

---

## 2. Callback Delegates

* `reelStopCB`: Function invoked when column completes its final bounce landing animation (`reelStopCB(this.reelIndex)`).
* `reelPreStopCB`: Function invoked just before the column begins its deceleration curve (`reelPreStopCB(this.reelIndex)`).
