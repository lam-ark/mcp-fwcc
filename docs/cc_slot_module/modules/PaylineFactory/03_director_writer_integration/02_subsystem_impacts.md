---
id: "cc_slot_module:PaylineFactory:director_writer:subsystem_impacts"
title: "PaylineFactory Subsystem Performance Impacts"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 PaylineFactory Subsystem Performance Impacts

---

## 1. Performance Matrix

| Subsystem | Impact |
| :--- | :--- |
| **`PaylineWinFrameModule`** | Eliminates hitching when spawning 15 glowing win boxes at once. |
| **`PaylineLineModule`** | Enables dynamic vector line segment assembly with zero runtime allocations. |
| **Engine Renderer** | Keeps Cocos Creator render tree allocations flat and stable. |
