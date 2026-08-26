---
id: "cc_slot_mechanics:HorizontalReelModule:methods:spawnSymbol"
title: "HorizontalReelModule.spawnSymbol Method"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "methods", "spawnSymbol"]
---

# 📖 `HorizontalReelModule.spawnSymbol()`

---

## 1. Method Signature & Overview

```typescript
spawnSymbol(code: string, size: cc.Vec2): cc.Node
```

- **Primary Role**: Implements spawnSymbol within the HorizontalReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected spawnSymbol(code: string, size: cc.Vec2): cc.Node {
		const offsetX = size.x > this.DEFAULT_SIZE.x ? (size.x / 2 - 0.5) * this.SYMBOL_WIDTH : 0;
		const offsetY = size.y > this.DEFAULT_SIZE.y ? (size.y / 2 - 0.5) * this.SYMBOL_HEIGHT : 0;
		const rightX = Math.abs(this.node.position.x) + this.reelManager.startX;
		const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
		symbol.setPosition(rightX + offsetX, offsetY);

		this.listSymbols.push(symbol);
		return symbol;
	}
```
