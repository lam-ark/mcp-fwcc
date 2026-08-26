---
id: "transfer-ark:bugs:multi_size_blur_symbols_standard_vs_special_1x1_rule"
title: "Fix Multi-Size Blur Symbols (1x2, 1x3) Standard vs Special 1x1 Rule"
category: "bugfix"
game_ids: ["g9666", "all"]
sdk_modules: ["TableModuleConfig", "SlotReelModule", "SlotSymbolModule", "SlotSymbolResourceManager"]
tags: ["multi_size", "blur", "mega_symbols", "1x2", "1x3", "random_symbols", "special_symbols", "1x1", "ark_business"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# BUG-002: Multi-Size Blur Symbols (1x2, 1x3) Standard vs Special 1x1 Rule

---

## 1. 📌 Problem / Feature Overview
- **Visual Glitch**: During the reel spinning phase (`ReelSpinState !== SHOWING_RESULT`), only 1x1 motion-blurred symbols appear on the reel strips. Multi-cell / Mega blur symbols (1x2, 1x3) never appear during spins.
- **UX Impact**: Creates a monotonous visual experience during spinning and breaks player anticipation for slot games featuring multi-height / Mega symbols.
- **Occurrence Scope**: Affects spinning reel strip generation across Normal, Turbo, and Free Spin rolling phases.

---

## 2. 🏢 Vendor SDK vs ARK Business Discrepancy
- **Vendor SDK Default Behavior**:
  - `RANDOM_SYMBOLS_CODE` in `TableModuleConfig` contains only single-character string codes (`["2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D"]`).
  - Base `getRandomSymbol()` relies on `mapSymbolData(randomCode)`: If the code lacks the underscore separator `_`, it automatically defaults to `symbolSize = DEFAULT_SIZE` (1x1).
- **ARK Business Requirement**:
  - **All Standard Symbols** (`"2"`, `"3"`, `"4"`, `"5"`, `"6"`, `"7"`, `"8"`, `"9"`, `"B"`, `"C"`, `"D"`) can land as Mega Symbols on the main grid (**1x1, 1x2, 1x3**).
  - **Special Symbols** (Wilds and Scatters: `"A"`, `"K"`) are **strictly excluded** from Mega Symbols and will **ONLY appear as 1x1 standard sizes**.

---

## 3. 🔍 Root Cause Analysis in Base SDK
In `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotReelModule.ts`:

1. **Spinning Reel Spawner (`spawnReelSymbol`)**:
```typescript
} else {
    isBlurSymbol = true;
    ({ symbolCode: code, symbolSize: size } = this.getRandomSymbol());
}
```

2. **Symbol Value Parsing (`mapSymbolData`)**:
```typescript
protected mapSymbolData(value: string): { symbolCode: string, symbolSize: cc.Vec2, stop: number } {
    if (value.indexOf('_') >= 0) {
        const resultList = value.split("_");
        const [symbolCode, sizeX, sizeY] = resultList;
        const symbolSize = sizeX && sizeY ? v2(+sizeX, +sizeY) : this.config.DEFAULT_SIZE;
        return { symbolCode, symbolSize, stop: symbolSize.y };
    } else {
        return { symbolCode: value, symbolSize: this.config.DEFAULT_SIZE, stop: this.config.DEFAULT_SIZE.y };
    }
}
```
Because the hardcoded array in `TableModuleConfig` only had 1x1 symbols, `getRandomSymbol()` never returned multi-cell tokens (`${code}_1_2` or `${code}_1_3`).

---

## 4. 🛠️ Implementation & Override Solution

In `assets/cc-release-slot/cc1-red-cliff/scripts/Table/TableModuleConfig9666.ts`:

```typescript
const { _decorator } = cc;
import { TableModuleConfig } from '../../../../cc-common/cc-slot-module/SlotModuleExport';
const { ccclass } = _decorator;

// 1. Define standard symbols and strictly 1x1 special symbols
const STANDARD_SYMBOLS: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "B", "C", "D"];
const SPECIAL_SYMBOLS_1X1_ONLY: string[] = ["A", "K"];
const MEGA_SIZES: number[] = [1, 2, 3];

/**
 * Helper generating multi-size symbol codes (e.g. '5', '5_1_2', '5_1_3')
 */
const generateMultiSizeSymbols = (symbols: string[], sizes: number[]): string[] => {
    const list: string[] = [];
    symbols.forEach((sym) => {
        sizes.forEach((height) => {
            list.push(height === 1 ? sym : `${sym}_1_${height}`);
        });
    });
    return list;
};

// Generates all 1x1, 1x2, and 1x3 variants for all standard symbols
const ALL_STANDARD_VARIANTS: string[] = generateMultiSizeSymbols(STANDARD_SYMBOLS, MEGA_SIZES);

@ccclass
export class TableModuleConfig9666 extends TableModuleConfig {
    public SYMBOL_WIDTH: number = 141;
    public SYMBOL_HEIGHT: number = 110;
    public TABLE_FORMAT: number[] = [4, 4, 4, 4, 4, 4];

    // Dynamic generation per reel column
    public RANDOM_SYMBOLS_CODE: string[][] = this.TABLE_FORMAT.map(() => [
        ...ALL_STANDARD_VARIANTS,       // Standard symbols: 1x1, 1x2, 1x3
        ...SPECIAL_SYMBOLS_1X1_ONLY,    // Special symbols: Strictly 1x1 only
    ]);

    public get SYMBOL_INDEXES(): number[][] {
        return [[0, 1, 2, 3], [5, 6, 7, 8], [10, 11, 12, 13], [15, 16, 17, 18], [20, 21, 22, 23], [24, 25, 26, 27]];
    }

    public BUFFER_TOP: number = 3;
    public BUFFER_BOT: number = 3;
    // ...
}
```

---

## 5. ⚠️ Gotchas & Edge Cases
1. **Strict Special Symbols Constraint**:
   - Special symbols (Scatter `"A"`, Guan Yu Wild `"K"`) must never be passed to `generateMultiSizeSymbols` and must be appended directly as 1x1 literals.
2. **Buffer Rows Margin Requirement (`02_missing_buffer_rows_mega_symbols_pop`)**:
   - When table uses 1x3 Mega symbols, `BUFFER_TOP: 3` and `BUFFER_BOT: 3` must be configured in `TableModuleConfig` to prevent popping/snapping at viewport boundaries.
3. **Asset Registration in `SlotSymbolResourceManager`**:
   - `SlotSymbolModule.getSymbolName()` converts multi-cell symbols to `${symbolCode}_${size.x}_${size.y}` (e.g. `"5_1_2"`).
   - Ensure `blurSymbolSfList` in `SlotSymbolResourceManager` on the Table prefab contains frames mapped to `"5_1_2"`, `"7_1_2"`, `"9_1_3"`. If not present, it will fallback to static sprite frame assets.

---

## 6. ♻️ Reusability Guide for Future Game Titles
1. Identify all standard symbols (`STANDARD_SYMBOLS`) and 1x1-only special symbols (`SPECIAL_SYMBOLS_1X1_ONLY`) for the new title.
2. Use `generateMultiSizeSymbols(STANDARD_SYMBOLS, [1, 2, 3])` to generate all multi-size combinations.
3. Use `TABLE_FORMAT.map(...)` in `TableModuleConfig<GameId>.ts` to dynamically assign `RANDOM_SYMBOLS_CODE`.
4. Ensure `BUFFER_TOP >= 3` and `BUFFER_BOT >= 3`.

---

## 7. 🔗 Codebase References
- Base Reel Spawner: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotReelModule.ts`
- Base Symbol Module: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolModule.ts`
- Game Config Implementation: `assets/cc-release-slot/cc1-red-cliff/scripts/Table/TableModuleConfig9666.ts`
- Game Reel Implementation: `assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotReelModule9666.ts`
