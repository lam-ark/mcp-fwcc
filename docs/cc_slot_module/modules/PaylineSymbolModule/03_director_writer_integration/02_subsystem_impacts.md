---
id: "cc_slot_module:PaylineSymbolModule:director_writer:subsystem_impacts"
title: "PaylineSymbolModule Subsystem Impacts"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 PaylineSymbolModule Subsystem Impacts

---

## 1. Subsystems Cross-Reference

| Component | Interaction | Impact |
| :--- | :--- | :--- |
| **`SlotSymbolManager`** | `getSymbolByIndex`, `returnSymbol`, `updateSymbolSiblingIndex` | Node pooling and z-index reordering. |
| **`PaylineWinFrameModule`**| Emits `SYMBOL_PLAY_ANIMATION_WIN` | Triggers synced win frame border animation around symbol. |
| **`SlotSymbolModule`** | Emits `PLAY_ANIMATION_WIN`, `SHOW_STATIC`, `ENABLE/DISABLE_HIGHLIGHT` | Executes Spine skeletons or static sprite changes on individual symbol nodes. |
