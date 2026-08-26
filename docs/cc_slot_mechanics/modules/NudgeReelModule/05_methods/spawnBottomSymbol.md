---
id: "cc_slot_mechanics:NudgeReelModule:methods:spawnBottomSymbol"
title: "NudgeReelModule.spawnBottomSymbol Method"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "spawnBottomSymbol"]
---

# 📖 `NudgeReelModule.spawnBottomSymbol()`

---

## 1. Method Signature & Overview

```typescript
spawnBottomSymbol(code: string, size: cc.Vec2): cc.Node
```

- **Primary Role**: Implements spawnBottomSymbol within the NudgeReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected spawnBottomSymbol(code: string, size: cc.Vec2): cc.Node {
		const offsetX = size.x > this.DEFAULT_SIZE.x ? (size.x / 2 - 0.5) * this.SYMBOL_WIDTH : 0;
		const offsetY = size.y * this.SYMBOL_HEIGHT;
		const topY = this.originalPosition.y + Math.abs(this.node.position.y) - this.reelManager.showSymbol * this.SYMBOL_HEIGHT;

		const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
		symbol.setPosition(offsetX, topY - offsetY);

		this.listSymbols.push(symbol);
		return symbol;
	}
```
