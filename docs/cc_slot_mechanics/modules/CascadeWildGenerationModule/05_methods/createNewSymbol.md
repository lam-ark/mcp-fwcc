---
id: "cc_slot_mechanics:CascadeWildGenerationModule:methods:createNewSymbol"
title: "CascadeWildGenerationModule.createNewSymbol Method Implementation"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationModule", "cascade_wild_generation_module", "cc_slot_mechanics", "methods", "createNewSymbol"]
---

# 📖 `CascadeWildGenerationModule.createNewSymbol()`

---

## 1. Method Signature

```typescript
createNewSymbol(col, oldRow, 'K', 1); symbol.setPosition(this.generationPosition); this.listSymbols[col][oldRow] = symbol; //update list traceway this.listTraceWay[col][row] = 'K_1_1'; } } protected updateWildGeneratedPosition(): void
```

- **Scope**: `CascadeWildGenerationModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
createNewSymbol(col, oldRow, 'K', 1);
			symbol.setPosition(this.generationPosition); 
			this.listSymbols[col][oldRow] = symbol;
            
			//update list traceway
			this.listTraceWay[col][row] = 'K_1_1';
		} 
	}

	protected updateWildGeneratedPosition(): void {
		if (this.col != -1 && this.row != -1) {
			let newrow = this.convertRow(this.col, this.row);
			this.generationPosition = this.tableConfig.positions[this.col][newrow];
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
