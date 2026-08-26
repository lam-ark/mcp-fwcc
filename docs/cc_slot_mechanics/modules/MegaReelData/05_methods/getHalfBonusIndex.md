---
id: "cc_slot_mechanics:MegaReelData:methods:getHalfBonusIndex"
title: "MegaReelData.getHalfBonusIndex Method Implementation"
category: "cc_slot_mechanics"
tags: ["MegaReelData", "mega_reel_data", "cc_slot_mechanics", "methods", "getHalfBonusIndex"]
---

# 📖 `MegaReelData.getHalfBonusIndex()`

---

## 1. Method Signature

```typescript
getHalfBonusIndex(): string[]
```

- **Scope**: `MegaReelData`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
getHalfBonusIndex(): string[] {
        if (this["hBi"]) {
            return this["hBi"];
        } else {
            return [];
        }
    }

    getFullBonusIndex(): string[] {
        if (this["fBi"]) {
            return this["fBi"];
        } else {
            return [];
        }
    }

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

    isSubset(mainArray: any[], subArray: any[]): boolean {
        return subArray.every(value => mainArray.indexOf(value.toString()) >= 0);
    }
}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
