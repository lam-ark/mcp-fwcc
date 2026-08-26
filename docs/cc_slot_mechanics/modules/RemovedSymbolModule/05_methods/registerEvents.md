---
id: "cc_slot_mechanics:RemovedSymbolModule:methods:registerEvents"
title: "RemovedSymbolModule.registerEvents Method"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolModule", "removed_symbol_module", "cc_slot_mechanics", "methods", "registerEvents"]
---

# 📖 `RemovedSymbolModule.registerEvents()`

---

## 1. Method Signature & Overview

```typescript
registerEvents(): void
```

- **Primary Role**: Implements registerEvents within the RemovedSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected registerEvents(): void {
		if (this.moduleEvent) {
			//this.moduleEvent.on(TableModuleEvents.TABLE_INIT, this.initTable, this);
			this.moduleEvent.on("TABLE_STOP_SPIN", this.stopSpin, this);
			this.moduleEvent.on("REEL_STOPPED", this.onReelStopped, this);
		}
	}
```
