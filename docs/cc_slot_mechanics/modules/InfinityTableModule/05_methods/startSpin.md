---
id: "cc_slot_mechanics:InfinityTableModule:methods:startSpin"
title: "InfinityTableModule.startSpin Method"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "methods", "startSpin"]
---

# 📖 `InfinityTableModule.startSpin()`

---

## 1. Method Signature & Overview

```typescript
startSpin(): void
```

- **Primary Role**: Implements startSpin within the InfinityTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
startSpin(): void {
        //TODO: need to override startSpin with action reset table position
        if (this.currentReelExtended > 0) {
            if (this.state === TableSpinState.READY || this.state === TableSpinState.STOPPED) {
                //reset extends reel
                this.resetExtendedReels();
    
                this.tweenExtendedTable && this.tweenExtendedTable.stop();
                this.tweenExtendedTable = tween(this.table)
                                        .to(0.2, { position: new cc.Vec2(0, 0) })
                                        .call(() => {
                                            //super.startSpin();
                                        })
                                        .start();
            }
            
        } 
        super.startSpin();
	}
```
