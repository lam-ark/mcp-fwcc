---
id: "cc_slot_mechanics:ClusterModule:methods:stopRespin"
title: "ClusterModule.stopRespin Method"
category: "cc_slot_mechanics"
tags: ["ClusterModule", "cluster_module", "cc_slot_mechanics", "methods", "stopRespin"]
---

# 📖 `ClusterModule.stopRespin()`

---

## 1. Method Signature & Overview

```typescript
stopRespin(matrix: string[][], traceWays: string[][]): Promise<void>
```

- **Primary Role**: Implements stopRespin within the ClusterModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
async stopRespin(matrix: string[][], traceWays: string[][]): Promise<void> {
		this.matrix = matrix;

		this.updateNewSymbolPosition();
		this.removeDroppedSymbols(); // remove symbol by traceWay data
		this.generateNewSymbols(); // generate new symbols
		this.checkForDropSymbols();
		this.processOldSymbols(); // get old symbols for dropping
		this.processNewSymbols(); // create all new symbols

		this.fallingSymbols(this.listDroppedSymbols);
		this.fallingSymbols(this.listNewSymbols);

		//TODO - for testing
		this.scheduleOnce(() => {
			this.listTraceWay = traceWays;
			this._stopRespinCB && this._stopRespinCB();
			this._stopRespinCB = null;
			this._listClusterSymbols = [];
			this._listSymbolPosition = [];
		}, 1);


		return new Promise((resolve) => {
			this._stopRespinCB = resolve;
		});
	}
```
