---
id: "cc_slot_module:CascadeModuleData:gotchas:traceway_in_place_sort"
title: "Gotcha: In-Place Sort Mutation on traceWay Array"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "gotchas", "in_place_sort", "array_mutation"]
---

# ⚠️ Gotcha: In-Place Sort Mutation on `traceWay` Array

---

## 1. Problem Description

`CascadeModuleData.getTraceWay()` performs:
```typescript
getTraceWay(): number[] {
    return this["traceWay"] ? this["traceWay"].sort(function (a, b) {
        return a - b; 
    }) : [];
}
```
JavaScript's `Array.prototype.sort()` mutates the source array directly in-place. If another component (e.g. History Logger or Replay System) relies on the original chronological hit order in `traceWay`, the array order is permanently modified.

---

## 2. Recommended Best Practice

Clone the array before sorting:
```typescript
getTraceWay(): number[] {
    return this["traceWay"] ? [...this["traceWay"]].sort((a, b) => a - b) : [];
}
```
