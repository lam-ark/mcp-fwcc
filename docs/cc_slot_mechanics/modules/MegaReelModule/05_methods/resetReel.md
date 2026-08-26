---
id: "cc_slot_mechanics:MegaReelModule:methods:resetReel"
title: "MegaReelModule.resetReel Method"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "resetReel"]
---

# 📖 `MegaReelModule.resetReel()`

---

## 1. Method Signature & Overview

```typescript
resetReel(): void
```

- **Primary Role**: Implements resetReel within the MegaReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
resetReel(): void {
		const offset = Math.abs(this.node.position.y);
		this.megaSymbolList.forEach((s) => s.setPosition(s.position.x, s.position.y - offset));

        super.resetReel();
	}
```
