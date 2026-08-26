---
id: "cc_slot_mechanics:NudgeTableModule:methods:onLoadExtend"
title: "NudgeTableModule.onLoadExtend Method"
category: "cc_slot_mechanics"
tags: ["NudgeTableModule", "nudge_table_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `NudgeTableModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
onLoadExtend(): void
```

- **Primary Role**: Implements onLoadExtend within the NudgeTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
        super.onLoadExtend();

        this.node.on("PROCESS_BEFORE_STOP_REELS", this.processBeforeStopReels, this);
        this._slotTableData = this.getComponent(NudgeTableData);
    }
```
