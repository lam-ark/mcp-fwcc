---
id: "cc_slot_mechanics:HorizontalReelModule:methods:initPositionByType"
title: "HorizontalReelModule.initPositionByType Method"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "methods", "initPositionByType"]
---

# 📖 `HorizontalReelModule.initPositionByType()`

---

## 1. Method Signature & Overview

```typescript
initPositionByType(index: number, size: cc.Vec2): cc.Vec2
```

- **Primary Role**: Implements initPositionByType within the HorizontalReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected initPositionByType(index: number, size: cc.Vec2): cc.Vec2 {
		const { startX } = this.reelManager;
		const x = index * this.SYMBOL_WIDTH - startX;
		const y = 0;

		return v2(x, y);
	}
```
