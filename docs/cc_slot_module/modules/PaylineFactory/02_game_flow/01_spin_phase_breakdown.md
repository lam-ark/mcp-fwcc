---
id: "cc_slot_module:PaylineFactory:game_flow:spin_phase_breakdown"
title: "PaylineFactory Behavior Across Spin Loop Phases"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 PaylineFactory Behavior Across Spin Loop Phases

---

## 1. Spin Phase Operations

| Spin Phase | Operation | Impact |
| :--- | :--- | :--- |
| **Phase 1: Spin Start** | `returnObject()` calls ensure all visual entities are in pools. | Zero floating instances. |
| **Phase 2: Reels Spinning** | Idle. | No GC pressure. |
| **Phase 3: Reels Stopped** | Ready for retrieval. | Instant response. |
| **Phase 4: Win Presentation** | `getObject(name)` delivers preloaded visual nodes in $< 0.1\text{ms}$. | Seamless frame rate during Big Win bursts. |
