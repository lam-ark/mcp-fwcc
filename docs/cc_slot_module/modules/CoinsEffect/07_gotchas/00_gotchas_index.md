---
id: "cc_slot_module:CoinsEffect:gotchas:index"
title: "CoinsEffect Gotchas & Engine Defects Index"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ CoinsEffect Gotchas & Engine Defects Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_unreset_particles_on_quick_close`](./01_unreset_particles_on_quick_close.md)** | Stale Particle Nodes Visible on Immediate Re-entry | MEDIUM | If a cutscene is exited before scheduled opacity reaches 255, lingering particles remain frozen unless reset. |
