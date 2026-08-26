---
id: "cc_slot_mechanics:NudgeReelModule:methods:resetNudgeReel"
title: "NudgeReelModule.resetNudgeReel Method"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "resetNudgeReel"]
---

# 📖 `NudgeReelModule.resetNudgeReel()`

---

## 1. Method Signature & Overview

```typescript
resetNudgeReel(): void
```

- **Primary Role**: Implements resetNudgeReel within the NudgeReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected resetNudgeReel(): void {
		const offset = Math.abs(this.node.position.y);
		this.listSymbols.forEach((s) => s.setPosition(s.position.x, s.position.y - this._direction * offset));
		this.listSymbols.sort((a, b) => b.position.y - a.position.y);
		this.node.setPosition(this.originalPosition);

		this._nudgeStep = 0;
		this._totalNudgeStep = 0;
	}
```
