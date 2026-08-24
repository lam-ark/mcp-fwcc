---
id: "cc_slot_module:PaylineWinFrameModule:inheritance:subclassing_guide"
title: "PaylineWinFrameModule Subclassing Guide"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ PaylineWinFrameModule Subclassing Guide

---

## 1. Subclassing Declaration

```typescript
const { ccclass } = cc._decorator;
import { PaylineWinFrameModule } from "PaylineWinFrameModule";

@ccclass
export default class PaylineWinFrameModule9666 extends PaylineWinFrameModule {
    // Custom win frame styling
}
```

---

## 2. Invariant Rules

1. **Retain Local NodePool**: Do not discard `winFramePool` to prevent memory thrashing.
2. **Handle Event Cleanup**: Preserve `hideAll()` and `clearAll()` behavior.
