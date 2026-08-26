---
id: "cc_slot_mechanics:SlotCellTableModule:methods:Promise"
title: "SlotCellTableModule.Promise Method Implementation"
category: "cc_slot_mechanics"
tags: ["SlotCellTableModule", "slot_cell_table_module", "cc_slot_mechanics", "methods", "Promise"]
---

# 📖 `SlotCellTableModule.Promise()`

---

## 1. Method Signature

```typescript
Promise((resolve) => { this._callbackStop = resolve; }); } protected reelStop(): void
```

- **Scope**: `SlotCellTableModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
Promise((resolve) => {
			this._callbackStop = resolve;
		});
	}

	protected reelStop(): void {
		this.totalReelStop++;
		if (this.totalReelStop >= this.totalReelSpin) {
			this.state = TableSpinState.STOPPED;
			this._callbackStop && this._callbackStop();
			this._callbackStop = null;
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
