---
id: "cc_slot_mechanics:InfinityTableModule:methods:resetExtendedReels"
title: "InfinityTableModule.resetExtendedReels Method"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "methods", "resetExtendedReels"]
---

# 📖 `InfinityTableModule.resetExtendedReels()`

---

## 1. Method Signature & Overview

```typescript
resetExtendedReels(): void
```

- **Primary Role**: Implements resetExtendedReels within the InfinityTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected resetExtendedReels(): void {
        const config = this._slotTableData.getComponent(InfinityTableConfig);
        let hasChanged = false;
        while (this.extendedReels.length) {
            const extendedReel = this.extendedReels.pop();
            extendedReel.node.removeFromParent();
            extendedReel.node = null;

            // Reset config format
			config.TABLE_FORMAT.pop();
			config.RANDOM_SYMBOLS_CODE.pop();
			config.SYMBOL_INDEXES.pop();
            hasChanged = true;
        }

        if (hasChanged) {
            this.moduleEvent.emit('TABLE_FORMAT_CHANGED', {
                tableFormat: config.TABLE_FORMAT,
                symbolIndexes: config.SYMBOL_INDEXES,
            });
        }

        this.extendedReels = [];
        this.currentReelExtended = 0;
    }
```
