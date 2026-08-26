---
id: "cc_slot_mechanics:ClusterModule:methods:generateNewSymbols"
title: "ClusterModule.generateNewSymbols Method"
category: "cc_slot_mechanics"
tags: ["ClusterModule", "cluster_module", "cc_slot_mechanics", "methods", "generateNewSymbols"]
---

# 📖 `ClusterModule.generateNewSymbols()`

---

## 1. Method Signature & Overview

```typescript
generateNewSymbols(): void
```

- **Primary Role**: Implements generateNewSymbols within the ClusterModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected generateNewSymbols(): void {
		for (let i = 0; i < this._listClusterSymbols.length; i++) {
			const { col, row } = this._listClusterSymbols[i];
			const oldRow = this.convertRow(col, row);
			//remove old symbol
			this.removeSymbolAt(col, oldRow);

			const { symbolValue } = this._listClusterSymbols[i];
			const { code, size } = this.mapSymbolData(symbolValue);

			const symbol = this.createNewSymbol(col, oldRow, code, size);
			symbol.setPosition(this._listSymbolPosition[i]);
			this.listSymbols[col][oldRow] = symbol;

			//update list traceway
			this.listTraceWay[col][row] = symbolValue;
		}
	}
```
