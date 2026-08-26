---
id: "cc_slot_mechanics:CascadeWildGenerationModule:methods:updateWildGeneratedPosition"
title: "CascadeWildGenerationModule.updateWildGeneratedPosition Method"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationModule", "cascade_wild_generation_module", "cc_slot_mechanics", "methods", "updateWildGeneratedPosition"]
---

# 📖 `CascadeWildGenerationModule.updateWildGeneratedPosition()`

---

## 1. Method Signature & Overview

```typescript
updateWildGeneratedPosition(): void
```

- **Primary Role**: Implements updateWildGeneratedPosition within the CascadeWildGenerationModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected updateWildGeneratedPosition(): void {
		if (this.col != -1 && this.row != -1) {
			let newrow = this.convertRow(this.col, this.row);
			this.generationPosition = this.tableConfig.positions[this.col][newrow];
		} else {
			this.generationPosition = null;
		}
	}
```
