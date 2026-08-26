---
id: "cc_slot_mechanics:CascadeWildGenerationModule:methods:Promise"
title: "CascadeWildGenerationModule.Promise Method Implementation"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationModule", "cascade_wild_generation_module", "cc_slot_mechanics", "methods", "Promise"]
---

# 📖 `CascadeWildGenerationModule.Promise()`

---

## 1. Method Signature

```typescript
Promise((resolve) => { this._stopRespinCB = resolve; }); } protected generateWild(): void
```

- **Scope**: `CascadeWildGenerationModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
Promise((resolve) => {
			this._stopRespinCB = resolve;
		});
	}
    
	protected generateWild(): void {
		if (this.col != -1 && this.row != -1) {
			const col = this.col;
			const row = this.row;
			const oldRow = this.convertRow(col, row);
			const oldSymbolValue = this.listTraceWay[col][row];
			if (!oldSymbolValue.startsWith('-1')) { // if it's not a dropped symbol, remove it
				this.removeSymbolAt(col, oldRow);
			}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
