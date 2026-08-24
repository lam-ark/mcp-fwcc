---
id: "cc_slot_module:TableModuleConfig:gotcha:table_format_mismatch_with_symbol_indexes"
title: "Gotcha: TABLE_FORMAT Mutation Without Invalidation Corrupts SYMBOL_INDEXES"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "gotchas", "symbol_indexes", "table_format"]
---

# ⚠️ Gotcha: TABLE_FORMAT Mutation Without Invalidation Corrupts SYMBOL_INDEXES

## 1. Defect Symptom
In games with expanding reels (e.g. Free Spins expanding 3x5 grid to 5x5 grid), `SlotTablePaylineModule` highlights wrong symbols or throws `IndexOutOfBounds` exceptions when accessing `SYMBOL_INDEXES`.

---

## 2. Root Cause Analysis
`SYMBOL_INDEXES` caches the result of `eno.SlotUtils.generateSymbolIndexes(this.TABLE_FORMAT)` on initial access:
```typescript
public get SYMBOL_INDEXES(): number[][] {
    if (this._symbolIndexes === null) {
        this._symbolIndexes = eno.SlotUtils.generateSymbolIndexes(this.TABLE_FORMAT);
    }
    return this._symbolIndexes;
}
```
If code alters `this.TABLE_FORMAT` without resetting `this._symbolIndexes = null`, downstream modules continue reading the stale 3x5 matrix indices (`0..14`) instead of the expanded 5x5 matrix (`0..24`).

---

## 3. Recommended Resolution
Whenever expanding the reel grid, always invalidate the cache:
```typescript
expandGrid(newFormat: number[]): void {
    this.config.TABLE_FORMAT = newFormat;
    this.config['_symbolIndexes'] = null; // Invalidate cache
}
```
