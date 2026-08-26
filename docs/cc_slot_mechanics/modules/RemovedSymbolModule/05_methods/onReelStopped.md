---
id: "cc_slot_mechanics:RemovedSymbolModule:methods:onReelStopped"
title: "RemovedSymbolModule.onReelStopped Method"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolModule", "removed_symbol_module", "cc_slot_mechanics", "methods", "onReelStopped"]
---

# 📖 `RemovedSymbolModule.onReelStopped()`

---

## 1. Method Signature & Overview

```typescript
onReelStopped(col: number): void
```

- **Primary Role**: Implements onReelStopped within the RemovedSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onReelStopped(col: number): void {
		if (col == this.getConfig().TABLE_CONFIG.format.length) {
			if (this.transformMatrix.length > 0) {
				this.resetSymbolList();
				this.updateSymbolList();
				this.removeSymbols();
				this.transformSymbols();
				//TODO - for testing
				this.scheduleOnce(() => {
					this.listSymbols = [];
					this._tableCallback && this._tableCallback();
					this._tableCallback = null;
				}, 0.5);
			}
		}
	}
```
