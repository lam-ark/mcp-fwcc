---
id: "cc_slot_mechanics:HorizontalReelModule:methods:resetReel"
title: "HorizontalReelModule.resetReel Method"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "methods", "resetReel"]
---

# 📖 `HorizontalReelModule.resetReel()`

---

## 1. Method Signature & Overview

```typescript
resetReel(): void
```

- **Primary Role**: Implements resetReel within the HorizontalReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
resetReel(): void {
		const offset = Math.abs(this.node.position.x);
		this.listSymbols.forEach((s) => s.setPosition(s.position.x - offset, s.position.y));
		this.listSymbols.sort((a, b) => b.position.x - a.position.x);
		this.node.setPosition(0, this.node.position.y);
	}
```
