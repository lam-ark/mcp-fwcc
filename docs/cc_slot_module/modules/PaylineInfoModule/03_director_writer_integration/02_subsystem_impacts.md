---
id: "cc_slot_module:PaylineInfoModule:director_writer:subsystem_impacts"
title: "PaylineInfoModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 PaylineInfoModule Cross-Subsystem Impacts

---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`PaylineControllerModule`** | Emits `ON_SHOW_PAYLINE_INFO` and `ON_HIDE_PAYLINE_INFO`. |
| **`GameConfig`** | Reads `PAY_SYSTEM` (`LINES`, `ALLWAYS`, `CLUSTER`, `SCATTER_PAY`). |
| **`GameLogic`** | Provides localized string translations (`getGameText`). |
