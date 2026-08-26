---
id: "cc_slot_mechanics:HorizontalTableModule:methods:initTable"
title: "HorizontalTableModule.initTable Method"
category: "cc_slot_mechanics"
tags: ["HorizontalTableModule", "horizontal_table_module", "cc_slot_mechanics", "methods", "initTable"]
---

# 📖 `HorizontalTableModule.initTable()`

---

## 1. Method Signature & Overview

```typescript
initTable(): void
```

- **Primary Role**: Implements initTable within the HorizontalTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
initTable(): void {
		const horizontalReel = instantiate(this.reelPrefab);
		horizontalReel.setPosition(0, 0);
		horizontalReel.setParent(this.table);

		const reelComponent = horizontalReel.getComponent(HorizontalReelModule);
		reelComponent.initReel({ reelIndex: 0, config: this.config, pool: this.symbolManager });
		this.reels.push(reelComponent);
		this.showBeautyMatrix();
	}
```
