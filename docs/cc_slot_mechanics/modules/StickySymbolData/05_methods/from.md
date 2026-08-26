---
id: "cc_slot_mechanics:StickySymbolData:methods:from"
title: "StickySymbolData.from Method Implementation"
category: "cc_slot_mechanics"
tags: ["StickySymbolData", "sticky_symbol_data", "cc_slot_mechanics", "methods", "from"]
---

# 📖 `StickySymbolData.from()`

---

## 1. Method Signature

```typescript
from(this.stickyIndexes); } getMatrix(): string[][]
```

- **Scope**: `StickySymbolData`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
from(this.stickyIndexes);
	}

	getMatrix(): string[][] {
		let rawMatrix = [];
		switch (this.gameMode) {
			case GAME_MODE_ENUM.NORMAL_GAME:
				rawMatrix = this["normalGameMatrix"] || this["matrix0"] || this["matrix"];
				break;
			case GAME_MODE_ENUM.FREE_GAME:
				rawMatrix = this["freeGameMatrix"] || this["matrix0"] || this["matrix"];
				break;
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
