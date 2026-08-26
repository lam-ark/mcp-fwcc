---
id: "cc_slot_mechanics:MegaReelData:methods:formatMegaData"
title: "MegaReelData.formatMegaData Method"
category: "cc_slot_mechanics"
tags: ["MegaReelData", "mega_reel_data", "cc_slot_mechanics", "methods", "formatMegaData"]
---

# 📖 `MegaReelData.formatMegaData()`

---

## 1. Method Signature & Overview

```typescript
formatMegaData(): object[]
```

- **Primary Role**: Implements formatMegaData within the MegaReelData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
formatMegaData(): object[] {
        let megaData = [];
        for (let i = 0; i < this._megaReelConfig.SYMBOL_INDEXES.length; i++) {
            megaData[i] = [];
        }

        //const fullBonusTest01 = ["3,4,6,7"];
        //const fullBonusTest02 = ["4,5,7,8"];
        const fullBonusTest03 = [];
        //const fullBonusTest04 = ["10,11,13,14"];
        //const halfBonusTest01 = ["5,8"];
        //const halfBonusTest02 = ["8,11", "9,12"];
        //const halfBonusTest03 = [];
        const halfBonusTest01 = ["0,3"];

        let fullBonusData = this.getFullBonusIndex();
        let halfBonusData = this.getHalfBonusIndex();
        fullBonusData = fullBonusTest03;
        halfBonusData = halfBonusTest01; 

        fullBonusData.forEach(data => {
            const indexes = data.split(",");
            const reelIndex = Math.floor(Number(indexes[0]) / this._megaReelConfig.TABLE_FORMAT[0]);
            for (let i = 0; i < this._megaReelConfig.SYMBOL_INDEXES.length; i++) {
                const arrayIndex = this._megaReelConfig.SYMBOL_INDEXES[i];
                const first = arrayIndex.slice(0, arrayIndex.length - 1);
                const last = arrayIndex.slice(1, arrayIndex.length);
                if (this.isSubset(indexes, first)) {
                    megaData[i].push({"reel":reelIndex, "indexes":first});
                } else if (this.isSubset(indexes, last)) {
                    megaData[i].push({"reel":reelIndex, "indexes":last});
                }
            }
        });

        halfBonusData.forEach(data => {
            const array = data.split(",");
            const firstIndex = Number(array[0]);
            const secondIndex = Number(array[1]);
            const reelIndex = Math.floor(firstIndex / this._megaReelConfig.TABLE_FORMAT[0]);
            megaData[reelIndex].push({"reel":reelIndex, "indexes":[firstIndex]});
            megaData[reelIndex + 1].push({"reel":reelIndex, "indexes":[secondIndex]});
        });
        
        return megaData;
    }
```
