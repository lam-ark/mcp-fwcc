---
id: "cc_slot_mechanics:CellReelModule:methods:initReelManager"
title: "CellReelModule.initReelManager Method"
category: "cc_slot_mechanics"
tags: ["CellReelModule", "cell_reel_module", "cc_slot_mechanics", "methods", "initReelManager"]
---

# 📖 `CellReelModule.initReelManager()`

---

## 1. Method Signature & Overview

```typescript
initReelManager(): void
```

- **Primary Role**: Implements initReelManager within the CellReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
initReelManager(): void {
		const visibleSymbol = 1;
		const totalSymbol = visibleSymbol + this.config.BUFFER_TOP + this.config.BUFFER_BOT;
		const startX = 0;
		const startY = (visibleSymbol / 2 + this.config.BUFFER_TOP - 0.5) * this.config.SYMBOL_HEIGHT;

		this.reelManager = new ReelManager(totalSymbol, visibleSymbol);
		this.reelManager.startX = startX;
		this.reelManager.startY = startY;
	}
```
