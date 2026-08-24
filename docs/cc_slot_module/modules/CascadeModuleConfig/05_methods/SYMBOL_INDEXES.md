---
id: "cc_slot_module:CascadeModuleConfig:methods:SYMBOL_INDEXES"
title: "CascadeModuleConfig.SYMBOL_INDEXES Getter"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "methods", "SYMBOL_INDEXES", "SlotUtils"]
---

# 📖 `CascadeModuleConfig.SYMBOL_INDEXES`

---

## 1. Getter Overview & Signature

Returns the cached 2D matrix of symbol index coordinates generated via `eno.SlotUtils.generateSymbolIndexes()`.

```typescript
public get SYMBOL_INDEXES(): number[][]
```

---

## 2. Complete Source Code Implementation

```typescript
public get SYMBOL_INDEXES(): number[][] {
    if (this._symbolIndexes === null) {
        this._symbolIndexes = eno.SlotUtils.generateSymbolIndexes(this.CASCADE_TABLE_CONFIG.format);
    }
    return this._symbolIndexes;
}
```
