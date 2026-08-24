---
id: "cc_slot_module:CascadeModuleData:methods:onloadExtend"
title: "CascadeModuleData.onloadExtend Method"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "methods", "onloadExtend"]
---

# 📖 `CascadeModuleData.onloadExtend()`

---

## 1. Method Overview & Signature

Initializes `this.config` by fetching `CascadeModuleConfig` from the current node.

```typescript
public onloadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onloadExtend(): void {
    this.config = this.getComponent(CascadeModuleConfig);
}
```
