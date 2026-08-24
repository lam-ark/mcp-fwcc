---
id: "cc_slot_module:SlotTableModule:method:onChangeStateExtend"
title: "SlotTableModule.onChangeStateExtend() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "onChangeStateExtend", "virtual_hook"]
---

# `SlotTableModule.onChangeStateExtend(_state: TableSpinState): void`

---

## 1. Method Signature
```typescript
protected onChangeStateExtend(_state: TableSpinState): void
```

---

## 2. Detailed Algorithmic Execution Logic
Virtual hook for downstream game projects to synchronize UI buttons, Turbo HUD markers, or ambient lights when table transitions state.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected onChangeStateExtend(_state: TableSpinState): void {
    // override this method to handle table event.
}
```
