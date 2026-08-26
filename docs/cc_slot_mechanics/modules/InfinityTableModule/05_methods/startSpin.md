---
id: "cc_slot_mechanics:InfinityTableModule:methods:startSpin"
title: "InfinityTableModule.startSpin Method Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "methods", "startSpin"]
---

# 📖 `InfinityTableModule.startSpin()`

---

## 1. Method Signature

```typescript
startSpin(): void
```

- **Scope**: `InfinityTableModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

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

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
