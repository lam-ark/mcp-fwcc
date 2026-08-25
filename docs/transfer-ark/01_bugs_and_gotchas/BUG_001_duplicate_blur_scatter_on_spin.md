---
id: "transfer-ark:bugs:duplicate_blur_scatter_on_spin"
title: "Fix 2 Blur Scatter Symbols Appearing on 1 Reel During Spin"
category: "bugfix"
game_ids: ["g9666", "all"]
sdk_modules: ["SlotReelModule", "TableModuleConfig", "SlotSymbolModule"]
tags: ["scatter", "blur", "random_symbols", "reel_spin", "exception_symbols", "ark_business"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# BUG-001: 2 Blur Scatter Symbols Appearing on 1 Reel During Spin

---

## 1. 📌 Problem Overview
- **Visual Glitch**: During the reel spinning phase (`ReelSpinState !== SHOWING_RESULT`), multiple motion-blurred Scatter symbols (`"A"`) appear concurrently on the same column strip.
- **UX Impact**: Creates false anticipation for players, leading them to believe that a Free Spins feature is guaranteed before the authoritative server outcome has arrived.
- **Scope**: Affects all slot titles using standard `SlotReelModule` logic whenever `RANDOM_SYMBOLS_CODE` includes the Scatter symbol code.

---

## 2. 🏢 Vendor SDK vs ARK Business Discrepancy
- **Vendor SDK Default Behavior**:
  - The `RANDOM_SYMBOLS_CODE` array declared in `TableModuleConfig` contains the Scatter symbol identifier (`"A"`).
  - The base `getRandomSymbol()` method selects symbols independently on each animation tick, leading to high probabilistic clustering of Scatters on the same moving strip.
- **ARK Business Requirement**:
  - Motion-blurred Scatters are permitted during reel spin to generate suspense, but **at most 1 Scatter symbol may appear per reel column** throughout the entire spin duration.

---

## 3. 🔍 Root Cause Analysis in Base SDK
In `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotReelModule.ts` (`spawnReelSymbol: L353-L356`):
```typescript
} else {
    isBlurSymbol = true;
    ({ symbolCode: code, symbolSize: size } = this.getRandomSymbol());
}
```
The base `getRandomSymbol()` method:
```typescript
protected getRandomSymbol(): { symbolCode: string, symbolSize: cc.Vec2 } {
    const randomSymbols = this.RANDOM_SYMBOLS_CODE[this.reelIndex];
    const totalSymbols = randomSymbols.length;
    const randomCode = randomSymbols[Math.floor(Math.random() * totalSymbols)];
    const { symbolCode, symbolSize } = this.mapSymbolData(randomCode);
    return { symbolCode, symbolSize };
}
```
This method performs an unfiltered selection from `RANDOM_SYMBOLS_CODE` without evaluating whether `this.listSymbols` already contains an active Scatter instance on the column.

---

## 4. 🛠️ Implementation & Override Solution
Adhering to the **Zero-Code Modification on `cc-common`** principle, override `getRandomSymbol()` within the game-specific reel controller (`assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotReelModule9666.ts`):

```typescript
    /**
     * Override random symbol selector during spin phase.
     * Filters out Scatter symbol if the current reel strip already contains one active Scatter.
     */
    protected getRandomSymbol(): { symbolCode: string, symbolSize: cc.Vec2 } {
        let randomSymbols: string[] = (this.RANDOM_SYMBOLS_CODE as any)?.[this.reelIndex] || [];
        const scatterSymbol = (this.config && this.config.SCATTER_SYMBOL) ? this.config.SCATTER_SYMBOL : "A";

        // Check if there is already an active scatter symbol visible/moving on this reel
        const hasScatter = this.listSymbols.some((sym) => {
            if (!sym || !sym.isValid || !sym.active) return false;
            const comp = SlotSymbolModule.getModuleComponent(sym);
            return comp && comp.symbolCode === scatterSymbol;
        });

        // Filter out Scatter if one already exists on this column
        if (hasScatter) {
            const filtered = randomSymbols.filter((code: string) => {
                const { symbolCode } = this.mapSymbolData(code);
                return symbolCode !== scatterSymbol;
            });
            // Safety guard: ensure the candidate array is never empty
            if (filtered.length > 0) {
                randomSymbols = filtered;
            }
        }

        const totalSymbols = randomSymbols.length;
        const randomCode = randomSymbols[Math.floor(Math.random() * totalSymbols)];
        const { symbolCode, symbolSize } = this.mapSymbolData(randomCode);
        return { symbolCode, symbolSize };
    }
```

---

## 5. ⚠️ Gotchas & Edge Cases
1. **TypeScript Type Inference**:
   - `RANDOM_SYMBOLS_CODE` in base `SlotReelModule` is typed as `string[]` (rather than `string[][]`).
   - Casting `(this.RANDOM_SYMBOLS_CODE as any)?.[this.reelIndex]` prevents the compiler error `Property 'filter' does not exist on type 'string'`.
2. **Empty Array Safety Guard**:
   - Always wrap array reassignment with `if (filtered.length > 0)` to guard against empty selection pools.
3. **Symbol Size Mapping**:
   - Use `this.mapSymbolData(code).symbolCode` to correctly handle multi-dimensional or formatted symbol strings (e.g., `"A_1_1"`).

---

## 6. ♻️ Reusability Guide for Future Game Titles
When porting or building a new slot title (e.g., `g9777`, `g9888`):
1. Create `SlotReelModule<GameId>.ts` inheriting from `SlotReelModule`.
2. Copy the `getRandomSymbol()` implementation above.
3. In the game's `Table` prefab, ensure column reel nodes use `SlotReelModule<GameId>`.

---

## 7. 🔗 Codebase References
- Base Framework File: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotReelModule.ts`
- Game Override Implementation: `assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotReelModule9666.ts`
- Game Config: `assets/cc-release-slot/cc1-red-cliff/scripts/Table/TableModuleConfig9666.ts`
