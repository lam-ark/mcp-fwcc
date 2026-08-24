---
id: "cc_slot_module:SlotTableModule:method:getConfigValue"
title: "SlotTableModule.getConfigValue() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "getConfigValue"]
---

# `SlotTableModule.getConfigValue(): void`

---

## 1. Method Signature
```typescript
protected getConfigValue(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Reads `this.config.TABLE_FORMAT.length` and assigns to `this.TOTAL_COLS`.
2. Reads `this.config.SYMBOL_WIDTH` and assigns to `this.SYMBOL_WIDTH`.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected getConfigValue(): void {
    this.TOTAL_COLS = this.config.TABLE_FORMAT.length;
    this.SYMBOL_WIDTH = this.config.SYMBOL_WIDTH;
}
```
