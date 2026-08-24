---
id: "cc_slot_module:BaseDataModule:customization:subclassing_guide"
title: "BaseDataModule Subclassing & Data Layer Guide"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ BaseDataModule Subclassing & Data Layer Guide

## 1. Class Inheritance Declaration

```typescript
const { _decorator } = cc;
import { BaseDataModule } from "../Core/BaseDataModule";
const { ccclass } = _decorator;

@ccclass("SlotTableData")
export class SlotTableData extends BaseDataModule {
    public registeredKeys: string[] = ["matrix"];

    override onloadExtend(): void {
        // Initialize local cache arrays
    }

    override onDataUpdate(key: string, value: any): void {
        super.onDataUpdate(key, value);
    }
}
```

---

## 2. Invariant Subclassing Rules

1. **Always declare `registeredKeys`**: Empty keys prevent any data updates from reaching the component.
2. **Co-locate with `SlotBaseModule`**: Must be attached to the same `cc.Node` as its sibling UI controller.
