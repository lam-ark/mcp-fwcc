---
id: "cc_slot_module:BaseDataModule:recipe:custom_data_module"
title: "Recipe: Creating a Custom Feature Data Module"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "recipe", "custom_module"]
---

# 🍳 Recipe: Creating a Custom Feature Data Module

## 1. Problem Statement
Create a `CascadeModuleData` component to track multiple cascade avalanche steps from the backend.

---

## 2. Step-by-Step Implementation

```typescript
const { _decorator } = cc;
import { BaseDataModule } from "../../../Core/BaseDataModule";
const { ccclass } = _decorator;

@ccclass
export default class CascadeModuleData extends BaseDataModule {
    public registeredKeys: string[] = ["cascadeSteps", "totalWinMultiplier"];

    public cascadeSteps: any[] = [];
    public totalWinMultiplier: number = 1;

    override onDataUpdate(key: string, value: any): void {
        super.onDataUpdate(key, value);
        if (key === "cascadeSteps" && Array.isArray(value)) {
            // Process cascade coordinate steps
        }
    }

    getCurrentStep(stepIndex: number): any {
        return this.cascadeSteps[stepIndex] || null;
    }
}
```
