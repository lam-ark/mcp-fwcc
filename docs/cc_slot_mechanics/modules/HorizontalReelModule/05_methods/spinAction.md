---
id: "cc_slot_mechanics:HorizontalReelModule:methods:spinAction"
title: "HorizontalReelModule.spinAction Method"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "methods", "spinAction"]
---

# 📖 `HorizontalReelModule.spinAction()`

---

## 1. Method Signature & Overview

```typescript
spinAction(): void
```

- **Primary Role**: Implements spinAction within the HorizontalReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
spinAction(): void {
		if (this.reelManager.state === ReelSpinState.STOPPED) {
			this.playStopAnimation();
			return;
		}

		const newPosition: cc.Vec2 = new Vec2(-this.SYMBOL_WIDTH, 0);
		this.tween = tween(this.node)
			.by(this.currentMode.speed, { position: newPosition })
			.call(() => {
				this.tween = null;
				this.recycleSymbol();
				this.spinAction();
			})
			.start();
	}
```
