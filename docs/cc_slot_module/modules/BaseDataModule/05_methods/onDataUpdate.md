---
id: "cc_slot_module:BaseDataModule:method:onDataUpdate"
title: "BaseDataModule.onDataUpdate() Method Specification"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "method", "onDataUpdate", "state_ingestion"]
---

# `BaseDataModule.onDataUpdate(key: string, value: any): void`

---

## 1. Method Signature
```typescript
onDataUpdate(key: string, value: any): void
```

---

## 2. Detailed Algorithmic Execution Logic
Directly assigns `this[key] = value`. Subclasses override this method to perform domain validation, sorting, or data transformation (e.g. converting 1D array into 2D table grid).

---

## 3. Un-truncated Source Code Implementation
```typescript
onDataUpdate(key: string, value: any): void {
    this[key] = value;
}
```
