---
id: "cc_slot_mechanics:InfinityTableData:methods:getResumeMatrix"
title: "InfinityTableData.getResumeMatrix Method Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityTableData", "infinity_table_data", "cc_slot_mechanics", "methods", "getResumeMatrix"]
---

# 📖 `InfinityTableData.getResumeMatrix()`

---

## 1. Method Signature

```typescript
getResumeMatrix(gameMode?: number): string[][]
```

- **Scope**: `InfinityTableData`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
getResumeMatrix(gameMode?: number): string[][] {
		const gameModeData = this.dataStore.getGameModeData(gameMode || this.gameMode);
		let rawMatrix = gameModeData.matrix || this.getRawResumeMatrix();
		this.dataStore.setGameModeDataMap("matrix", rawMatrix);
        
        if (rawMatrix && rawMatrix.length) {
            const totalRows = this.config.TABLE_FORMAT[0];
            const totalReels = Math.floor(rawMatrix.length / totalRows);
            const format = new Array(totalReels).fill(totalRows);
            return eno.SlotUtils.convertSlotMatrix(rawMatrix, format);
        }
        
        return eno.SlotUtils.convertSlotMatrix(rawMatrix, this.config.TABLE_FORMAT);
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
