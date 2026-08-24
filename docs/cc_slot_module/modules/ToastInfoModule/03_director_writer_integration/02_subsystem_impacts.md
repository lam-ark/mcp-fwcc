---
id: "cc_slot_module:ToastInfoModule:director_writer:subsystem_impacts"
title: "ToastInfoModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 ToastInfoModule Cross-Subsystem Impacts

---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`GameLogic`** | Emits `NETWORK_WARNING` payloads. |
| **`UIManagerModule`** | Mounts `Toast` container on top-most display layer. |
