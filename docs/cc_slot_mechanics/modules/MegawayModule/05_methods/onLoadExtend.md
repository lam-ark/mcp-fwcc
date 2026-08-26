---
id: "cc_slot_mechanics:MegawayModule:methods:onLoadExtend"
title: "MegawayModule.onLoadExtend Method"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `MegawayModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
onLoadExtend(): void
```

- **Primary Role**: Implements onLoadExtend within the MegawayModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
		this.moduleEvent.on('UPDATE_MEGAWAY', this.updateTotalMegaway, this);
		this.moduleEvent.on('REEL_STOPPED', this.onReelStopped, this);
		this.moduleEvent.on('RESET_MEGAWAY', this.reset, this);
		this._data = this.node.getComponent(MegawayData);
	}
```
