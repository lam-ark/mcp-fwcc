---
id: "cc_slot_module:SlotTableNearWinModule:inheritance:subclassing_guide"
title: "SlotTableNearWinModule Subclassing Guide"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ SlotTableNearWinModule Subclassing Guide

---

## 1. Subclassing Declaration

```typescript
const { ccclass, property } = cc._decorator;
import { SlotTableNearWinModule } from "SlotTableNearWinModule";

@ccclass
export default class SlotTableNearWinModule9666 extends SlotTableNearWinModule {
    // Custom logic
}
```

---

## 2. Invariant Rules

1. **Do not override `onLoad()`**: Implement `extendInit()` or `onLoadExtend()` with `super.onLoadExtend()`.
2. **Always call `super.resetNearWin()`**: Ensure tension audio and Spine playback are reliably terminated during reset.
3. **Coordinate Math**: If reel padding or custom spacing is altered, override `_getXPosition()`.
