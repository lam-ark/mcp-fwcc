---
id: "cc_slot_module:SlotSymbolManager:gotcha:sticky_symbol_reclaimed_without_isForce"
title: "Gotcha: Sticky Symbol Premature Recycling Without isForce Flag"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "gotchas", "sticky_symbol"]
---

# ⚠️ Gotcha: Sticky Symbol Premature Recycling Without isForce Flag

## 1. Defect Symptom
Sticky Wilds locked on the reels from a previous spin vanish when `removeAllSymbols()` or `syncTable()` executes.

---

## 2. Root Cause Analysis
`removeSymbol()` checks:
```typescript
if (symbolModule && symbolModule.getIndex() === SymbolIndexType.STICKY && !isForce) {
    return;
}
```
If the feature developer failed to assign `symbolModule.setIndex(SymbolIndexType.STICKY)` when locking the Wild, `removeAllSymbols()` treats it as a normal symbol and flushes it back into the pool. Conversely, when the Free Spins feature concludes, developers must pass `isForce = true` to remove sticky symbols.

---

## 3. Recommended Resolution
Always tag persistent symbols with `symbolModule.setIndex(SymbolIndexType.STICKY)` upon locking, and call `this.removeSymbol(symbol, true)` when the feature round ends.
