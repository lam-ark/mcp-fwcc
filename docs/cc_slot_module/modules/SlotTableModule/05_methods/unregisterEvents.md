---
id: "cc_slot_module:SlotTableModule:method:unregisterEvents"
title: "SlotTableModule.unregisterEvents() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "unregisterEvents"]
---

# `SlotTableModule.unregisterEvents(): void`

---

## 1. Method Signature
```typescript
protected unregisterEvents(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Unsubscribes all event listeners bound to `this.moduleEvent.targetOff(this)` to prevent memory leaks upon scene changes.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected unregisterEvents(): void {
    if (this.moduleEvent) {
        this.moduleEvent.targetOff(this);
    }
}
```
