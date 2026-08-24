---
id: "cc_slot_module:SlotTableData:method:getResumeMatrix"
title: "SlotTableData.getResumeMatrix() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "method", "getResumeMatrix", "state_hydration", "sync_table"]
---

# `SlotTableData.getResumeMatrix(gameMode?: number): string[][]`

---

## 1. Method Signature
```typescript
public getResumeMatrix(gameMode?: number): string[][]
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `SlotTableModule` during game resumption (`isResume = true` or `SYNC_TABLE`).

---

## 3. Detailed Algorithmic Execution Logic
1. Obtains mode data from `this.dataStore.getGameModeData(gameMode || this.gameMode)`.
2. Extracts `rawMatrix = gameModeData.matrix || this.getRawResumeMatrix()`.
3. Synchronizes cache in `GameDataStore`: `this.dataStore.setGameModeDataMap("matrix", rawMatrix)`.
4. Converts flat array into 2D format via `eno.SlotUtils.convertSlotMatrix(rawMatrix, this.config.TABLE_FORMAT)`.
5. Returns 2D matrix: `string[col][row]`.

---

## 4. Un-truncated Source Code Implementation
```typescript
getResumeMatrix(gameMode?: number): string[][] {
	const gameModeData = this.dataStore.getGameModeData(gameMode || this.gameMode);
	let rawMatrix = gameModeData.matrix || this.getRawResumeMatrix();
	this.dataStore.setGameModeDataMap("matrix", rawMatrix);
 	return eno.SlotUtils.convertSlotMatrix(rawMatrix, this.config.TABLE_FORMAT);
}
```
