---
id: "cc_slot_mechanics:CascadeWildGenerationModule:methods:stopRespin"
title: "CascadeWildGenerationModule.stopRespin Method"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationModule", "cascade_wild_generation_module", "cc_slot_mechanics", "methods", "stopRespin"]
---

# 📖 `CascadeWildGenerationModule.stopRespin()`

---

## 1. Method Signature & Overview

```typescript
stopRespin(matrix: string[][], traceWays: string[][]): Promise<void>
```

- **Primary Role**: Implements stopRespin within the CascadeWildGenerationModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
async stopRespin(matrix: string[][], traceWays: string[][]): Promise<void>  {
		this.matrix = matrix;

		this.updateWildGeneratedPosition();
		this.generateWild(); // generate wild
		this.checkForDropSymbols();
		this.processOldSymbols(); // get old symbols for dropping
		this.processNewSymbols(); // create all new symbols
        
		this.fallingSymbols(this.listDroppedSymbols);
		this.fallingSymbols(this.listNewSymbols);

		//TODO - need making override here, default is after CASCADING_TIME_COMPLETED time will be continue to other modules
		this.scheduleOnce(() => {
			this.listTraceWay = traceWays;
			this._stopRespinCB && this._stopRespinCB();
			this._stopRespinCB = null;
			this.generationPosition = null;
		}, this.config.CASCADING_TIME_COMPLETED);

		this._hasStartRespin = false;
		this._hasRespinCompleted = true;

		return new Promise((resolve) => {
			this._stopRespinCB = resolve;
		});
	}
```
