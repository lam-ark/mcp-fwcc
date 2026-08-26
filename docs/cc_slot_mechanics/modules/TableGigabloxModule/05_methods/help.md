---
id: "cc_slot_mechanics:TableGigabloxModule:methods:help"
title: "TableGigabloxModule.help Method Implementation"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModule", "table_gigablox_module", "cc_slot_mechanics", "methods", "help"]
---

# 📖 `TableGigabloxModule.help()`

---

## 1. Method Signature

```typescript
help(HelpDocuments.GIGABLOX_TABLE_MODULE) export class TableGigabloxModule extends SlotTableModule { protected config: TableGigabloxConfig; protected _slotTableData: TableGigabloxData; protected _bloxes: any = []; onLoadExtend(): void
```

- **Scope**: `TableGigabloxModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
help(HelpDocuments.GIGABLOX_TABLE_MODULE)
export class TableGigabloxModule extends SlotTableModule {

	protected config: TableGigabloxConfig;
	protected _slotTableData: TableGigabloxData;

	protected _bloxes: any = [];

	onLoadExtend(): void {
		this.config = this.getComponent(TableGigabloxConfig);
		this._slotTableData = this.getComponent(TableGigabloxData);
		this.getConfigValue();
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
