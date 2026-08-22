# CompositeCascadeData

> **Source Path**: `assets/cc-common/cc-slot-features/CompositeCascade/scripts/CompositeCascadeData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-features`.

## Classes
- **`export`**
- **`CompositeCascadeData`** extends `CascadeModuleData`

## Key Methods
- `onloadExtend(): void`
- `getFormatMatrix(): string[][]`
- `getMatrix(): string[][]`
- `formatData(): `

## Source Implementation
```typescript
const { _decorator } = cc;
import { CascadeModuleData } from "../../../cc-slot-module/SlotModuleExport";
import { GAME_MODE_ENUM } from "../../../cc-slot-module/SlotModuleExport";
import { CompositeCascadeConfig } from "./CompositeCascadeConfig";
const { ccclass } = _decorator;

@ccclass
export class CompositeCascadeData extends CascadeModuleData {
    compositeConfig;
    verticalMatrix: string[][] = [];
    horizonMatrix: string[][] = [];
    listDropSymbolsVertical: string[][] = [];
    listDropSymbolsHorizontal: string[][] = [];

    onloadExtend(): void {
        this.registeredKeys = [
            ...this.registeredKeys,
            "formatMatrix0",
            "formatMatrix",
            "normalFormatMatrix",
            "freeFormatMatrix",
        ];
        super.onloadExtend();
        this.compositeConfig = this.getComponent(CompositeCascadeConfig);
    }

    getFormatMatrix(): string[][] {
        switch (this.gameMode) {
            case GAME_MODE_ENUM.NORMAL_GAME:
                return this["normalFormatMatrix"] || this["formatMatrix0"] || this["formatMatrix"];
            case GAME_MODE_ENUM.FREE_GAME:
                return this["freeFormatMatrix"] || this["formatMatrix0"] || this["formatMatrix"];
        }
    }

    getMatrix(): string[][] {
        let matrix = [];
        switch (this.gameMode) {
            case GAME_MODE_ENUM.NORMAL_GAME:
                matrix = this["normalGameMatrix"] || this["matrix0"] || this["matrix"];
                break;
            case GAME_MODE_ENUM.FREE_GAME:
                matrix = this["freeGameMatrix"] || this["matrix0"] || this["matrix"];
                break;
        }
        return matrix;
    }

    formatData(): {
        verticalMatrix: string[][];
        listTraceWayVertical: string[][];
        horizonMatrix?: string[][];
        listTraceWayHorizontal?: string[][];
    } {
        const matrix = this.getMatrix().flat().filter((item) => item && item != "");
        const formatMatrix = this.getFormatMatrix();
        const traceWay = this.getTraceWay();
        let col = 0;
        let row = 0;
        let index = 0;
        let horizonMatrix = [];
        let verticalMatrix = [];

        const sortedListSymbols = traceWay.sort(function (a, b) {
            return a - b;
        });

        const listTraceWayVertical = [];
        const listTraceWayHorizontal = [];

        horizonMatrix[0] = [];
        listTraceWayHorizontal[0] = [];

        for (let i = 0; i < formatMatrix.length; i++) {
            const size = formatMatrix[i].length;
            row = 0;
            verticalMatrix[i] = [];
            listTraceWayVertical[i] = [];
            for (let j = 0; j < size; j++) {
                const height = Number(formatMatrix[i][j]);
                if (i > 0 && i < formatMatrix.length - 1) {
                    if (row == 0) {
                        horizonMatrix[0][col] = `${matrix[index]}_1_${height}`;
                        if (sortedListSymbols.indexOf(index) > -1) {
                            listTraceWayHorizontal[0][col] = `-1_1_${height}`;
                        } else {
                            listTraceWayHorizontal[0][col] = `${matrix[index]}_1_${height}`;
                        }
                        col++;
                    } else {
                        verticalMatrix[i][row - 1] = `${matrix[index]}_1_${height}`;
                        if (sortedListSymbols.indexOf(index) > -1) {
                            listTraceWayVertical[i][row - 1] = `-1_1_${height}`;
                        } else {
                            listTraceWayVertical[i][row - 1] = `${matrix[index]}_1_${height}`;
                        }
                    }
                } else {
                    verticalMatrix[i][row] = `${matrix[index]}_1_${height}`;
                    if (sortedListSymbols.indexOf(index) > -1) {
                        listTraceWayVertical[i][row] = `-1_1_${height}`;
                    } else {
                        listTraceWayVertical[i][row] = `${matrix[index]}_1_${height}`;
                    }
                }
                row++;
                index++;
            }
        }

        return { verticalMatrix, listTraceWayVertical, horizonMatrix, listTraceWayHorizontal };
    }
}
```
