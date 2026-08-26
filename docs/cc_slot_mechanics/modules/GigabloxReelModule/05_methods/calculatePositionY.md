---
id: "cc_slot_mechanics:GigabloxReelModule:methods:calculatePositionY"
title: "GigabloxReelModule.calculatePositionY Method"
category: "cc_slot_mechanics"
tags: ["GigabloxReelModule", "gigablox_reel_module", "cc_slot_mechanics", "methods", "calculatePositionY"]
---

# 📖 `GigabloxReelModule.calculatePositionY()`

---

## 1. Method Signature & Overview

```typescript
calculatePositionY(size: cc.Vec2): number
```

- **Primary Role**: Implements calculatePositionY within the GigabloxReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected calculatePositionY(size: cc.Vec2):number {
		const offsetY = size.y > this.DEFAULT_SIZE.y ? (size.y / 2 - 0.5) * this.SYMBOL_HEIGHT : 0;
		const topY = this.originalPosition.y + Math.abs(this.node.position.y) + this.reelManager.startY;
		return topY + offsetY;
	}
```
