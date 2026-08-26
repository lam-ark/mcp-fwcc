---
id: "cc_slot_mechanics:TableGigabloxModule:methods:setupGigablox"
title: "TableGigabloxModule.setupGigablox Method"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModule", "table_gigablox_module", "cc_slot_mechanics", "methods", "setupGigablox"]
---

# 📖 `TableGigabloxModule.setupGigablox()`

---

## 1. Method Signature & Overview

```typescript
setupGigablox(context): void
```

- **Primary Role**: Implements setupGigablox within the TableGigabloxModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected setupGigablox(context): void {
		for (let i = 0; i < this._bloxes.length; i++) {
			const { col, size } = this._bloxes[i];
			for (let j = col; j <= col + size - 1; j++) {
				(context.reels[j] as GigabloxReelModule).setupGigaBlox(this._bloxes[i]);
			}
		}
	}
```
