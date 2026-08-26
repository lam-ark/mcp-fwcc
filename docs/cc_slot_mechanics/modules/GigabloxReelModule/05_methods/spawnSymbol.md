---
id: "cc_slot_mechanics:GigabloxReelModule:methods:spawnSymbol"
title: "GigabloxReelModule.spawnSymbol Method"
category: "cc_slot_mechanics"
tags: ["GigabloxReelModule", "gigablox_reel_module", "cc_slot_mechanics", "methods", "spawnSymbol"]
---

# 📖 `GigabloxReelModule.spawnSymbol()`

---

## 1. Method Signature & Overview

```typescript
spawnSymbol(code: string, size: cc.Vec2, isGigaSymbol = false): cc.Node
```

- **Primary Role**: Implements spawnSymbol within the GigabloxReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected spawnSymbol(code: string, size: cc.Vec2, isGigaSymbol = false): cc.Node {
		const positionX = size.x > this.DEFAULT_SIZE.x ? (size.x / 2 - 0.5) * this.SYMBOL_WIDTH : 0;
		const positionY = this.calculatePositionY(size);
		const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
		symbol.setPosition(positionX, positionY);

		if (isGigaSymbol) {
			this.listGigaSymbols.push(symbol);
		} else {
			this.listSymbols.unshift(symbol);
		}
		return symbol;
	}
```
