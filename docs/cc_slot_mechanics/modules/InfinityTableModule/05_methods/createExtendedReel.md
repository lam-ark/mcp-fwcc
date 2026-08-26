---
id: "cc_slot_mechanics:InfinityTableModule:methods:createExtendedReel"
title: "InfinityTableModule.createExtendedReel Method"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "methods", "createExtendedReel"]
---

# 📖 `InfinityTableModule.createExtendedReel()`

---

## 1. Method Signature & Overview

```typescript
createExtendedReel(): void
```

- **Primary Role**: Implements createExtendedReel within the InfinityTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected createExtendedReel(): void {
        const col = this.TOTAL_COLS - 1 + this.currentReelExtended;
		const reelNode = this.createReelNode(col);
		
        const reelComponent = reelNode.getComponent(InfinityReelModule);
		reelComponent.initReel({ reelIndex: col, config: this.config, pool: this.symbolManager });
        reelComponent.updateMode(this.currentMode);
		this.extendedReels.push(reelComponent);
        
        reelNode.active = false;

        this.extendTableFormat();
    }
```
