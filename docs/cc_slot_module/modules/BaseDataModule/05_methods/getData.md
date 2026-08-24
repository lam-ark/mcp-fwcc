---
id: "cc_slot_module:BaseDataModule:method:getData"
title: "BaseDataModule.getData() Method Specification"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "method", "getData"]
---

# `BaseDataModule.getData(key: string): any`

---

## 1. Method Signature
```typescript
getData(key: string): any
```

---

## 2. Detailed Algorithmic Execution Logic
Returns stored property `this[key]`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getData(key: string): any {
    return this[key];
}
```
