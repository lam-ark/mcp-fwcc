---
id: "cc_slot_module:SlotSymbolModule:properties:runtime_state_variables"
title: "SlotSymbolModule Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "properties", "runtime_state"]
---

# 📊 SlotSymbolModule Runtime State Variables

---

## 1. Internal State Dictionary

| Field Name | TypeScript Type | Default Value | Mutation Moment | Purpose & Description |
| :--- | :--- | :--- | :--- | :--- |
| `symbolCode` | `string` | `""` | Set in `init()` & `changeToSymbol()` | Current active symbol code (e.g. `"K1"`, `"WILD"`, `"A"`). |
| `size` | `cc.Vec2` | `(1, 1)` | Set in `setSize()` | Matrix dimensions in grid units ($X \times Y$). |
| `sizeCount` | `number` | `1` | Decremented in `SlotReelModule.recycleSymbol()` | Remaining rows to scroll for multi-cell symbols. |
| `isPlaying` | `boolean` | `false` | Toggled in `playAnimation()` & `stopAnimation()` | Flags whether Spine skeleton is actively animating. |
| `hasSkeletonData` | `boolean` | `false` | Set in `updateSymbolSkeleton()` | Confirms valid skeleton asset is loaded on Spine component. |
| `_index` | `number` | `UNUSED (-1)` | Set via `setIndex(index)` | Numeric index matching `SYMBOL_INDEXES` in config. |
| `_owner` | `string` | `NONE` | Set via `setOwner(owner)` | Tracks whether node belongs to `REEL_SYMBOL` or `PAYLINE_SYMBOL`. |
