---
id: "cc_slot_module:SlotTablePaylineModule:method:unregisterEvents"
title: "SlotTablePaylineModule.unregisterEvents Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "methods", "unregisterEvents"]
---

# 🚀 `SlotTablePaylineModule.unregisterEvents(): void`

---

## 1. Method Signature

```typescript
protected unregisterEvents(): void
```

---

## 2. Trigger Source & Execution Lifecycle

Invoked by `onDestroy()` to unsubscribe listeners and prevent memory leaks.

---

## 3. Algorithmic Steps

1. Unsubscribes `this.moduleEvent.off("SETUP_PAYLINES", this.onSetupPaylines, this)`.
2. Unsubscribes `this.moduleEvent.off("TABLE_FORMAT_CHANGED", this.onSetupPaylines, this)`.

---

## 4. Full Source Code

```typescript
protected unregisterEvents(): void {
    this.moduleEvent.off("SETUP_PAYLINES", this.onSetupPaylines, this);
    this.moduleEvent.off("TABLE_FORMAT_CHANGED", this.onSetupPaylines, this);
}
```
