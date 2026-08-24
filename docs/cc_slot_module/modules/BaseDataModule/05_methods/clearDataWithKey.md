---
id: "cc_slot_module:BaseDataModule:method:clearDataWithKey"
title: "BaseDataModule.clearDataWithKey() Method Specification"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "method", "clearDataWithKey"]
---

# `BaseDataModule.clearDataWithKey(key: string): void`

---

## 1. Method Signature
```typescript
clearDataWithKey(key: string): void
```

---

## 2. Detailed Algorithmic Execution Logic
Sets `this[key] = null`.

---

## 3. Un-truncated Source Code Implementation
```typescript
clearDataWithKey(key: string): void {
    this[key] = null;
}
```
