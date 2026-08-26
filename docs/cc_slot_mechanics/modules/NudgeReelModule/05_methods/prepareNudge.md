---
id: "cc_slot_mechanics:NudgeReelModule:methods:prepareNudge"
title: "NudgeReelModule.prepareNudge Method"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "prepareNudge"]
---

# 📖 `NudgeReelModule.prepareNudge()`

---

## 1. Method Signature & Overview

```typescript
prepareNudge(): void
```

- **Primary Role**: Implements prepareNudge within the NudgeReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
prepareNudge(): void {
		const currentPosition = this.node.position.clone();
		const newPosition: cc.Vec2 = new Vec2(0, 30 * this._direction);
		this.tween = tween(this.node)
			.delay(0.4)
			.by(this.currentMode.speed, { position: newPosition })
			.delay(0.2)
			.to(this.currentMode.speed, { position: currentPosition })
			.call(() => {
				this.tween = null;
				this.startNudge();
			})
			.start();
	}
```
