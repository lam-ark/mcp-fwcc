---
id: "cc_slot_module:CascadeModuleData:recipes:custom_cluster_payload_ingestion"
title: "Recipe: Ingesting 2D Coordinate Objects for Cluster Wins"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "recipes", "cluster_payload"]
---

# 💡 Recipe: Ingesting 2D Coordinate Objects for Cluster Wins

---

## 1. Objective

Customize `CascadeModuleData` to directly parse backend payloads delivering winning cluster coordinates as `{ col: number, row: number }[]`.

```typescript
@ccclass
export class ClusterCascadeData extends CascadeModuleData {
    registeredKeys = ["matrix", "clusterWinPositions"];

    public formatData() {
        const matrix = this.getMatrix();
        const formatMatrix = this.config.CASCADE_TABLE_CONFIG.format;
        const winPositions: { col: number, row: number }[] = this["clusterWinPositions"] || [];

        const verticalMatrix: string[][] = [];
        const listTraceWay: string[][] = [];

        for (let col = 0; col < formatMatrix.length; col++) {
            verticalMatrix[col] = [];
            listTraceWay[col] = [];
            for (let row = 0; row < formatMatrix[col]; row++) {
                verticalMatrix[col][row] = matrix[col][row];
                const isHit = winPositions.some(p => p.col === col && p.row === row);
                listTraceWay[col][row] = isHit ? `${this.config.DROP_SYMBOL_CODE}` : matrix[col][row];
            }
        }

        return {
            verticalMatrix,
            listTraceWayVertical: listTraceWay
        };
    }
}
```
