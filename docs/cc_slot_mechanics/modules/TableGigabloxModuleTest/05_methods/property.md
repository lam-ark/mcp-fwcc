---
id: "cc_slot_mechanics:TableGigabloxModuleTest:methods:property"
title: "TableGigabloxModuleTest.property Method Implementation"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModuleTest", "table_gigablox_module_test", "cc_slot_mechanics", "methods", "property"]
---

# 📖 `TableGigabloxModuleTest.property()`

---

## 1. Method Signature

```typescript
property(SlotTableModule) table: SlotTableModule = null; start(): void
```

- **Scope**: `TableGigabloxModuleTest`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
property(SlotTableModule)
    table: SlotTableModule = null;
    
    start(): void {
        this.table.initTable();
    }

    startSpin(): void {
		this.table.startSpin();
		this.scheduleOnce(() => {
			this.stopWithRandomMatrix();
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
