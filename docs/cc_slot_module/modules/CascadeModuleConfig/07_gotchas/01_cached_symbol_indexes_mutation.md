---
id: "cc_slot_module:CascadeModuleConfig:gotchas:cached_symbol_indexes_mutation"
title: "Gotcha: Stale _symbolIndexes on Dynamic Format Mutation"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "gotchas", "stale_cache", "grid_format"]
---

# ⚠️ Gotcha: Stale `_symbolIndexes` on Dynamic Format Mutation

---

## 1. Problem Description

`SYMBOL_INDEXES` caches the result of `eno.SlotUtils.generateSymbolIndexes()` upon first access:
```typescript
public get SYMBOL_INDEXES(): number[][] {
    if (this._symbolIndexes === null) {
        this._symbolIndexes = eno.SlotUtils.generateSymbolIndexes(this.CASCADE_TABLE_CONFIG.format);
    }
    return this._symbolIndexes;
}
```
If a slot feature dynamically expands the grid (e.g. from 3 rows to 5 rows) and modifies `this.CASCADE_TABLE_CONFIG.format`, `SYMBOL_INDEXES` continues returning the old 3-row index mapping.

---

## 2. Recommended Best Practice

Whenever modifying `this.CASCADE_TABLE_CONFIG.format` dynamically, reset the cache:
```typescript
this._symbolIndexes = null;
```
