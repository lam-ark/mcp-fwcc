---
id: "cc_slot_mechanics:InfinityTableData:methods:getResumeMatrix"
title: "InfinityTableData.getResumeMatrix Method"
category: "cc_slot_mechanics"
tags: ["InfinityTableData", "infinity_table_data", "cc_slot_mechanics", "methods", "getResumeMatrix"]
---

# 📖 `InfinityTableData.getResumeMatrix()`

---

## 1. Method Signature & Overview

```typescript
getResumeMatrix(gameMode?: number): string[][]
```

- **Primary Role**: Implements getResumeMatrix within the InfinityTableData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

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
