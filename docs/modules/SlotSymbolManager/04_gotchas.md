---
id: "SlotSymbolManager:gotchas"
title: "SlotSymbolManager Gotchas & Best Practices"
category: "cc_slot_module"
tags: ["gotchas", "debugging", "best_practices", "spine", "memory_leak", "pool_pollution"]
methods: ["removeSymbol", "getSymbol", "resetBeforeBackToPool"]
---

# SlotSymbolManager: Gotchas & Best Practices

---

## ⚠️ Gotcha 1: "Spine State Pollution" - Dirty Animation Frames on Recycled Nodes

> [!WARNING]
> **Symptom**: When a Symbol is retrieved from the pool (`getSymbol()`) and placed onto a reel, its Spine skeleton displays an incorrect pose (e.g. frozen on a previous spin's win explosion or distorted frame instead of the idle static pose).
> 
> **Root Cause**: Cocos Creator's `cc.NodePool.put()` only detaches the node from the Scene Graph (`node.removeFromParent(false)`). It **DOES NOT** reset Spine 3.8 skeleton track entries (`sp.Skeleton`).
> 
> **Standard Fix**: In `SlotSymbolModule.resetBeforeBackToPool()`, always clear animation tracks and reset the setup pose before returning to the pool:
> ```typescript
> resetBeforeBackToPool(): void {
>     if (this.spine && this.spine.skeletonData) {
>         this.spine.clearTracks();
>         this.spine.setToSetupPose();
>     }
>     this.node.stopAllActions();
>     this.node.scale = 1.0;
>     this.node.opacity = 255;
> }
> ```

---

## ⚠️ Gotcha 2: Memory Leak in the `usingSymbols` Tracking Array

> [!CAUTION]
> **Symptom**: The `this.usingSymbols` array grows continuously after every spin cycle (e.g. from 15 to hundreds of nodes), causing progressive RAM bloat and garbage collection lag.
> 
> **Root Cause**: An external feature component (such as a Cascade handler or Reel module) manually calls `symbolNode.removeFromParent(true)` or `symbolNode.destroy()` without notifying `SlotSymbolManager.removeSymbol(node)`. Consequently, the reference in `usingSymbols` is never pruned.
> 
> **Standard Fix**: Always recycle symbols exclusively through `this.symbolManager.returnSymbol(node)` or `this.symbolManager.removeSymbol(node)`.

---

## ⚠️ Gotcha 3: Accidental Recycling of Sticky Wilds During Respin Cycles

> [!IMPORTANT]
> **Symptom**: Sticky Wild symbols vanish when the table clears for a respin.
> 
> **Standard Fix**: `SlotSymbolManager.removeSymbol(symbol, isForce)` verifies the `SymbolIndexType.STICKY` flag. Only allow removal when `isForce === true` (triggered at the end of the entire respin sequence via `cleanStickySymbols()`).
