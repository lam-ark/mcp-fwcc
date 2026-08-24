---
id: "cc_slot_module:BaseDataModule:method:start"
title: "BaseDataModule.start() Method Specification"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "method", "start", "registration"]
---

# `BaseDataModule.start(): void`

---

## 1. Method Signature
```typescript
start(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Enrolls this instance in the central `GameDataStore` by calling `this.dataStore.registerModule(this)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
start(): void {
    this.dataStore.registerModule(this);
}
```
