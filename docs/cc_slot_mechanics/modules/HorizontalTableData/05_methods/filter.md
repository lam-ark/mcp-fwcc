---
id: "cc_slot_mechanics:HorizontalTableData:methods:filter"
title: "HorizontalTableData.filter Method Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalTableData", "horizontal_table_data", "cc_slot_mechanics", "methods", "filter"]
---

# 📖 `HorizontalTableData.filter()`

---

## 1. Method Signature

```typescript
filter((_symbolValue, symbolIndex) => horizontalSymbolIndexes.indexOf(symbolIndex) !== -1); return [[...horizontalMatrix]]; } getResumeMatrix(gameMode?: number): string[][]
```

- **Scope**: `HorizontalTableData`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
filter((_symbolValue, symbolIndex) => horizontalSymbolIndexes.indexOf(symbolIndex) !== -1);
		return [[...horizontalMatrix]];
	}

	getResumeMatrix(gameMode?: number): string[][] {
		const gameModeData = this.dataStore.getGameModeData(gameMode || this.gameMode);
		let rawMatrix = gameModeData.matrix || this.getRawResumeMatrix();
		if (!rawMatrix) {
			return [];
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
