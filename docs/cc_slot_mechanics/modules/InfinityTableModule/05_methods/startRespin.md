---
id: "cc_slot_mechanics:InfinityTableModule:methods:startRespin"
title: "InfinityTableModule.startRespin Method"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "methods", "startRespin"]
---

# 📖 `InfinityTableModule.startRespin()`

---

## 1. Method Signature & Overview

```typescript
startRespin(matrix: string[][]): void
```

- **Primary Role**: Implements startRespin within the InfinityTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
public startRespin(matrix: string[][]): void {
        this.currentReelExtended++;
        this.tweenExtendedTable && this.tweenExtendedTable.stop();

        this.respinState = InfinityTableSpinState.READY;

        let pos = this.table.position.clone();
        this.createExtendedReel();
        this.tweenExtendedTable = tween(this.table)
                                    .to(0.2, { position: new cc.Vec2(pos.x - this.SYMBOL_WIDTH, pos.y) })
                                    .call(() => {
                                        this.spinExtendedReel();
                                    })
                                    .start();
    }
```
