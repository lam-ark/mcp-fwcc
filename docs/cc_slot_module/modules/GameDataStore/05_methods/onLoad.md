---
id: "cc_slot_module:GameDataStore:method:onLoad"
title: "GameDataStore.onLoad() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "onLoad", "lifecycle"]
---

# `GameDataStore.onLoad(): void`

---

## 1. Method Signature
```typescript
protected onLoad(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Crawls the scene hierarchy downwards from this node and discovers all child components matching `"BaseDataModule"`, enrolling each into `this.registerModule()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected onLoad(): void {
    this.getComponentsInChildren("BaseDataModule").forEach((module) => {
        this.registerModule(module as BaseDataModule);
    });
}
```
