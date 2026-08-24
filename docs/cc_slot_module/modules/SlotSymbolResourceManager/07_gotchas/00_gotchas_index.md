---
id: "cc_slot_module:SlotSymbolResourceManager:gotchas:index"
title: "SlotSymbolResourceManager Gotchas & Pitfalls Index"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ SlotSymbolResourceManager Gotchas & Pitfalls Index

---

## 1. Known Gotchas Summary Table

| Gotcha Document | Symptom | Root Cause | Fix Strategy |
| :--- | :--- | :--- | :--- |
| **[`01_missing_sprite_frame_fallback.md`](./01_missing_sprite_frame_fallback.md)** | Blank/invisible symbol box renders on reel landing. | Symbol code returned by server is not registered in `symbolSfList`. | Ensure all server symbol codes (`A`, `K`, `WILD`, etc.) are mapped in `SymbolPrefab`. |
