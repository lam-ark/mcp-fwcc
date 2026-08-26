---
id: "cc_slot_mechanics:NudgeReelModule:methods:spawnNudgeSymbol"
title: "NudgeReelModule.spawnNudgeSymbol Method"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "spawnNudgeSymbol"]
---

# 📖 `NudgeReelModule.spawnNudgeSymbol()`

---

## 1. Method Signature & Overview

```typescript
spawnNudgeSymbol(code: string, size: cc.Vec2): cc.Node
```

- **Primary Role**: Implements spawnNudgeSymbol within the NudgeReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected spawnNudgeSymbol(code: string, size: cc.Vec2): cc.Node {
		if (this._direction == NudgeDirection.NUDGE_UP) {
			return this.spawnBottomSymbol(code, size);
		} else {
			return super.spawnSymbol(code, size);
		}
	}
```
