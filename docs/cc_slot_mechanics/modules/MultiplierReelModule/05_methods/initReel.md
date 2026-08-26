---
id: "cc_slot_mechanics:MultiplierReelModule:methods:initReel"
title: "MultiplierReelModule.initReel Method"
category: "cc_slot_mechanics"
tags: ["MultiplierReelModule", "multiplier_reel_module", "cc_slot_mechanics", "methods", "initReel"]
---

# 📖 `MultiplierReelModule.initReel()`

---

## 1. Method Signature & Overview

```typescript
initReel(): void
```

- **Primary Role**: Implements initReel within the MultiplierReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
initReel(): void {
		for (let i = 0; i < this._config.TOTAL_MULTIPLIER_REEL; i++) {
			const reel = instantiate(this.prefabMultiplierReel);
			reel.setPosition(this._config.MULTIPLIER_REEL_POSITION[i] || Vec2.ZERO);
			this.node.addChild(reel);
			this._multiplierReels.push(reel);
		}
	}
```
