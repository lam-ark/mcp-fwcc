---
id: "cc_slot_mechanics:SlotCellTableModule:methods:help"
title: "SlotCellTableModule.help Method Implementation"
category: "cc_slot_mechanics"
tags: ["SlotCellTableModule", "slot_cell_table_module", "cc_slot_mechanics", "methods", "help"]
---

# 📖 `SlotCellTableModule.help()`

---

## 1. Method Signature

```typescript
help(HelpDocuments.SLOT_CELL_TABLE_MODULE) export class SlotCellTableModule extends SlotTableModule { protected config: CellTableConfig; protected _slotTableData: CellTableData; protected reelList: CellReelModule[][] = []; //declare constant value from config protected SYMBOL_HEIGHT: number; protected totalReelSpin: number protected totalReelStop: number; protected listMaskRow: cc.Node[] = []; protected _callbackStop: Function = null; onLoadExtend(): void
```

- **Scope**: `SlotCellTableModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
help(HelpDocuments.SLOT_CELL_TABLE_MODULE)
export class SlotCellTableModule extends SlotTableModule {
	protected config: CellTableConfig;
	protected _slotTableData: CellTableData;
	protected reelList: CellReelModule[][] = [];

	//declare constant value from config
	protected SYMBOL_HEIGHT: number;
	protected totalReelSpin: number
	protected totalReelStop: number;

	protected listMaskRow: cc.Node[] = [];

	protected _callbackStop: Function = null;

	onLoadExtend(): void {
		this.reelList = [];
		this.config = this.getComponent(CellTableConfig);
		if (!this.config) {
			warn('Config not add to this node');
			return;
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
