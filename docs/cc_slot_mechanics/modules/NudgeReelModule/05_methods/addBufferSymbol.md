---
id: "cc_slot_mechanics:NudgeReelModule:methods:addBufferSymbol"
title: "NudgeReelModule.addBufferSymbol Method"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "addBufferSymbol"]
---

# 📖 `NudgeReelModule.addBufferSymbol()`

---

## 1. Method Signature & Overview

```typescript
addBufferSymbol(positionY: number): void
```

- **Primary Role**: Implements addBufferSymbol within the NudgeReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected addBufferSymbol(positionY: number): void {
		const { symbolCode, symbolSize } = this.getRandomSymbol();
		const bufferSymbol = this.spawnNudgeSymbol(symbolCode, symbolSize);
		bufferSymbol.setPosition(new Vec2(bufferSymbol.position.x, positionY + this._direction * this.SYMBOL_HEIGHT));
	}
```
