---
id: "cc_slot_module:SlotTablePaylineModule:inheritance:subclassing_guide"
title: "SlotTablePaylineModule Subclassing Guide"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ SlotTablePaylineModule Subclassing Guide

---

## 1. Subclassing Declaration

```typescript
const { ccclass } = cc._decorator;
import { SlotTablePaylineModule } from "SlotTablePaylineModule";

@ccclass
export default class SlotTablePaylineModule9666 extends SlotTablePaylineModule {
    // Custom payline orchestration
}
```

---

## 2. Invariant Rules

1. **Retain `initExtend()` for Hooks**: Do not override `init()` directly; implement `initExtend()` to register custom child components.
2. **Always Call `super.registerEvents()`**: Preserve `SETUP_PAYLINES` and `TABLE_FORMAT_CHANGED` handlers.
3. **Clean Up in `onDestroy()`**: Always invoke `super.onDestroy()` to unsubscribe listeners.
