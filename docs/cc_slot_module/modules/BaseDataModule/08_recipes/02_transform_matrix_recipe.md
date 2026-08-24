---
id: "cc_slot_module:BaseDataModule:recipe:transform_matrix"
title: "Recipe: Intercepting and Transforming Raw Server Matrix Data"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "recipe", "transform_matrix"]
---

# 🍳 Recipe: Intercepting and Transforming Raw Server Matrix Data

## 1. Problem Statement
Server sends 1D matrix array `['A','K','Q','J','10',...]` of length 15. The UI table requires a column-major 2D matrix `[['A','K','Q'], ['J','10','9'], ...]`.

---

## 2. Implementation

```typescript
@ccclass
export default class CustomTableData extends BaseDataModule {
    public registeredKeys: string[] = ["matrix"];
    public parsedGrid: string[][] = [];

    override onDataUpdate(key: string, value: any): void {
        if (key === "matrix" && Array.isArray(value)) {
            // Convert 1D flat array to 5x3 columns
            this.parsedGrid = [];
            for (let col = 0; col < 5; col++) {
                this.parsedGrid[col] = value.slice(col * 3, col * 3 + 3);
            }
        } else {
            super.onDataUpdate(key, value);
        }
    }

    public getGrid(): string[][] {
        return this.parsedGrid;
    }
}
```
