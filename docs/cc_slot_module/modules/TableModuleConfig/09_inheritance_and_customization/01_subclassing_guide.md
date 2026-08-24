---
id: "cc_slot_module:TableModuleConfig:customization:subclassing_guide"
title: "TableModuleConfig Subclassing & Tuning Guide"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ TableModuleConfig Subclassing & Tuning Guide

## 1. Class Inheritance Declaration

```typescript
const { _decorator } = cc;
import { TableModuleConfig } from "../../../../cc-common/cc-slot-module/SlotModuleExport";
const { ccclass } = _decorator;

@ccclass("TableModuleConfig9666")
export default class TableModuleConfig9666 extends TableModuleConfig {
    public TABLE_FORMAT: number[] = [4, 4, 4, 4, 4]; // 5x4 Grid
    public SYMBOL_WIDTH: number = 150;
    public SYMBOL_HEIGHT: number = 140;
}
```
