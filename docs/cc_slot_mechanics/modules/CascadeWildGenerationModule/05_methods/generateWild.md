---
id: "cc_slot_mechanics:CascadeWildGenerationModule:methods:generateWild"
title: "CascadeWildGenerationModule.generateWild Method"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationModule", "cascade_wild_generation_module", "cc_slot_mechanics", "methods", "generateWild"]
---

# 📖 `CascadeWildGenerationModule.generateWild()`

---

## 1. Method Signature & Overview

```typescript
generateWild(): void
```

- **Primary Role**: Implements generateWild within the CascadeWildGenerationModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected generateWild(): void {
		if (this.col != -1 && this.row != -1) {
			const col = this.col;
			const row = this.row;
			const oldRow = this.convertRow(col, row);
			const oldSymbolValue = this.listTraceWay[col][row];
			if (!oldSymbolValue.startsWith('-1')) { // if it's not a dropped symbol, remove it
				this.removeSymbolAt(col, oldRow);
			}

			const symbol = this.createNewSymbol(col, oldRow, 'K', 1);
			symbol.setPosition(this.generationPosition); 
			this.listSymbols[col][oldRow] = symbol;
            
			//update list traceway
			this.listTraceWay[col][row] = 'K_1_1';
		} 
	}
```
