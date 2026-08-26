---
id: "cc_slot_mechanics:NudgeTableModule:methods:onLoadExtend"
title: "NudgeTableModule.onLoadExtend Method Implementation"
category: "cc_slot_mechanics"
tags: ["NudgeTableModule", "nudge_table_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `NudgeTableModule.onLoadExtend()`

---

## 1. Method Signature

```typescript
onLoadExtend(): void
```

- **Scope**: `NudgeTableModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
onLoadExtend(): void {
        super.onLoadExtend();

        this.node.on("PROCESS_BEFORE_STOP_REELS", this.processBeforeStopReels, this);
        this._slotTableData = this.getComponent(NudgeTableData);
    }

    protected processBeforeStopReels(data:{ mode, context }): void {
        const nudgeData = this._slotTableData.getNudgeData();
        // { index, step, direction }
        nudgeData.forEach((nudge) => {
            (this.reels[nudge.index] as NudgeReelModule).setupNudge(nudge);
        })
    }

    prepareNudge(): void {
        const nudgeData = this._slotTableData.getNudgeData();
        // { index, step, direction }
        nudgeData.forEach((data) => {
            (this.reels[data.index] as NudgeReelModule).prepareNudge();
        })
    }
}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
