---
id: "cc_slot_module:BaseDataModule:method:clearData"
title: "BaseDataModule.clearData() Method Specification"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "method", "clearData"]
---

# `BaseDataModule.clearData(): void`

---

## 1. Method Signature
```typescript
clearData(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Iterates through all keys in `this.registeredKeys` and sets `this[key] = null`.

---

## 3. Un-truncated Source Code Implementation
```typescript
clearData(): void {
    this.registeredKeys.forEach(key => {
        this[key] = null;
    });
}
```
