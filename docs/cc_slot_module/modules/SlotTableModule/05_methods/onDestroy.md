---
id: "cc_slot_module:SlotTableModule:method:onDestroy"
title: "SlotTableModule.onDestroy() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "onDestroy"]
---

# `SlotTableModule.onDestroy(): void`

---

## 1. Method Signature
```typescript
onDestroy(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Calls `this.unregisterEvents()` during node cleanup.

---

## 3. Un-truncated Source Code Implementation
```typescript
onDestroy(): void {
    this.unregisterEvents();
}
```
