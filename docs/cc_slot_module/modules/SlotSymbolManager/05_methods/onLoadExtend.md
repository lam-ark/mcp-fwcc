---
id: "cc_slot_module:SlotSymbolManager:method:onLoadExtend"
title: "SlotSymbolManager.onLoadExtend() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "onLoadExtend"]
---

# `SlotSymbolManager.onLoadExtend(): void`

---

## 1. Method Signature
```typescript
onLoadExtend(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Invokes `this.initSymbolPool()` to create and pre-fill the `symbolPool`.
2. Under development builds (`CC_DEV`), registers global debug listeners on `cc.director`:
   * `'show-log-using-symbols-owner'` ➔ `this.showLogUsingSymbolsWithOwner`
   * `'show-log-using-symbols'` ➔ `this.showLogUsingSymbols`

---

## 3. Un-truncated Source Code Implementation
```typescript
onLoadExtend(): void {
    this.initSymbolPool();
    //@ts-ignore
    if (CC_DEV) {
        director.on('show-log-using-symbols-owner', this.showLogUsingSymbolsWithOwner, this);
        director.on('show-log-using-symbols', this.showLogUsingSymbols, this);
    }
}
```
