---
id: "cc_slot_mechanics:NudgeReelModule:methods:nudgeSpinning"
title: "NudgeReelModule.nudgeSpinning Method"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "nudgeSpinning"]
---

# 📖 `NudgeReelModule.nudgeSpinning()`

---

## 1. Method Signature & Overview

```typescript
nudgeSpinning(): void
```

- **Primary Role**: Implements nudgeSpinning within the NudgeReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected nudgeSpinning(): void {
		if (this._nudgeStep <= 0) {
			this.resetNudgeReel();
			this.updateIndexSymbols();
			return;
		}

		const newPosition: cc.Vec2 = new Vec2(0, -this.SYMBOL_HEIGHT * this._direction);
		this.tween = tween(this.node)
			.by(NUDGE_SPEED, { position: newPosition })
			.call(() => {
				this.tween = null;
				this.recycleNudgeSymbol();
				this.nudgeSpinning();
			})
			.start();   
	}
```
