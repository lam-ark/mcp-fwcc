---
id: "cc_slot_module:GameDataStore:customization:subclassing_guide"
title: "GameDataStore Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ GameDataStore Subclassing & Customization Guide

## 1. Class Inheritance Declaration

```typescript
const { _decorator } = cc;
import { GameDataStore } from "../../../../cc-common/cc-slot-module/SlotModuleExport";
const { ccclass } = _decorator;

@ccclass("GameDataStore9666")
export class GameDataStore9666 extends GameDataStore {
    override parseDataPS(data: any): void {
        super.parseDataPS(data);
        this.playSession = this.mapDataPS(this.playSession);
    }

    mapDataPS(data: any): any {
        return this.mapNewKeys(data, {
            "pMul": "previousMultiplier",
            "mulF": "freeGameMultiplier",
        });
    }
}
```

---

## 2. Invariant Subclassing Rules

1. **Always call `super.parseDataPS(data)`**: Ensures internal warnings, session assignment, and base state tracking execute correctly.
2. **Preserve Deep Clone Invariant**: Do not mutate objects returned by `_dataMap` directly in subclasses.
