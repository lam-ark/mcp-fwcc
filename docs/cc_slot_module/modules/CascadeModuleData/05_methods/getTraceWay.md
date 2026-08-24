---
id: "cc_slot_module:CascadeModuleData:methods:getTraceWay"
title: "CascadeModuleData.getTraceWay Method"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "methods", "getTraceWay"]
---

# 📖 `CascadeModuleData.getTraceWay()`

---

## 1. Method Overview & Signature

Sorts and returns the winning symbol coordinate indexes.

```typescript
public getTraceWay(): number[]
```

---

## 2. Complete Source Code Implementation

```typescript
getTraceWay(): number[] {
    return this["traceWay"] ? this["traceWay"].sort(function (a, b) {
        return a - b; 
    }) : [];
}
```
