---
id: "transfer-ark:bugs:sub_reel_horizontal_table_no_blur_symbols_on_spin"
title: "Fix Sub Reel (Horizontal Table) Having No Blur Symbols and Map Horizontal Blur Frames"
category: "bugfix"
game_ids: ["g9666", "all"]
sdk_modules: ["HorizontalTableModule", "HorizontalReelModule", "SlotSymbolModule", "SlotSymbolResourceManager"]
tags: ["blur", "horizontal_reel", "blur_horizontal", "sub_reel", "top_table", "spawn_symbol", "ark_business"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# BUG-004: Sub Reel (Horizontal Table) Having No Blur Symbols During Spin & Horizontal Blur Asset Mapping

---

## 1. 📌 Problem / Feature Overview
- **Visual Glitch**: During the spin phase, symbols on the Sub Reel (Horizontal Table / Top Table) appeared completely sharp and static without motion blur.
- **Visual Direction Glitch**: Even when blur was enabled, symbols used vertical blur textures instead of designated horizontal motion blur textures (`_blur_horizontal.png`).
- **Occurrence Scope**: Affects Horizontal Sub Reel spin animation in Normal, Turbo, and Free Games.

---

## 2. 🏢 Vendor SDK vs ARK Business Discrepancy
- **Vendor SDK Default Behavior**:
  - `HorizontalReelModule` overrides `spawnSymbol(code: string, size: cc.Vec2)` but dropped the third parameter `isBlur: boolean = false` present in base `SlotReelModule`.
  - It hardcoded `this.symbolManager.createSymbol(code, size, ...)` (static symbols only) instead of calling `createBlurSymbol(...)` when `isBlur === true`.
  - Did not map or resolve specialized horizontal blur textures.
- **ARK Business Requirement**:
  - Horizontal reel strip symbols must properly display motion blur during continuous spin.
  - Horizontal reel symbols must specifically use horizontal motion blur assets (`9666_symbol_X_blur_horizontal`).
  - Fix must follow **Zero-Code Modification on `cc-common`**.

---

## 3. 🔍 Root Cause Analysis in Base SDK
In `cc-slot-mechanics/HorizontalReel/scripts/HorizontalReelModule.ts` (`spawnSymbol: L98-L107`):
```typescript
protected spawnSymbol(code: string, size: cc.Vec2): cc.Node {
    const offsetX = size.x > this.DEFAULT_SIZE.x ? (size.x / 2 - 0.5) * this.SYMBOL_WIDTH : 0;
    const offsetY = size.y > this.DEFAULT_SIZE.y ? (size.y / 2 - 0.5) * this.SYMBOL_HEIGHT : 0;
    const rightX = Math.abs(this.node.position.x) + this.reelManager.startX;
    
    // Always static symbol: ignores isBlur argument passed from spawnReelSymbol
    const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
    symbol.setPosition(rightX + offsetX, offsetY);

    this.listSymbols.push(symbol);
    return symbol;
}
```

---

## 4. 🛠️ Implementation & Override Solution

Adhering to **Zero-Code Modification on `cc-common`**, all changes are implemented inside `assets/cc-release-slot/cc1-red-cliff/`:

### Step 1: Create `HorizontalReelModule9666.ts`
```typescript
// File: assets/cc-release-slot/cc1-red-cliff/scripts/Table/HorizontalReelModule9666.ts
import { HorizontalReelModule } from "../../../../cc-common/cc-slot-mechanics/HorizontalReel/HorizontalReelExport";
import { SymbolOwnerType } from "../../../../cc-common/cc-slot-module/SlotModuleExport";

const { ccclass } = cc._decorator;

@ccclass
export default class HorizontalReelModule9666 extends HorizontalReelModule {
    /**
     * Override spawnSymbol in Red Cliff (9666) to support motion blur during horizontal reel spin.
     */
    protected spawnSymbol(code: string, size: cc.Vec2, isBlur: boolean = false): cc.Node {
        const offsetX = size.x > this.DEFAULT_SIZE.x ? (size.x / 2 - 0.5) * this.SYMBOL_WIDTH : 0;
        const offsetY = size.y > this.DEFAULT_SIZE.y ? (size.y / 2 - 0.5) * this.SYMBOL_HEIGHT : 0;
        const rightX = Math.abs(this.node.position.x) + this.reelManager.startX;
        
        let symbol = null;
        if (isBlur) {
            symbol = this.symbolManager.createBlurSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
        } else {
            symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
        }
        symbol.setPosition(rightX + offsetX, offsetY);

        this.listSymbols.push(symbol);
        return symbol;
    }
}
```

### Step 2: Override `initTable()` in `HorizontalTableModule9666.ts`
```typescript
// File: assets/cc-release-slot/cc1-red-cliff/scripts/Table/HorizontalTableModule9666.ts
import HorizontalReelModule9666 from "./HorizontalReelModule9666";

    initTable(): void {
        const horizontalReel = cc.instantiate(this.reelPrefab);
        horizontalReel.setPosition(0, 0);
        horizontalReel.setParent(this.table);

        horizontalReel.removeComponent(HorizontalReelModule);
        const reelComponent = horizontalReel.addComponent(HorizontalReelModule9666);
        reelComponent.initReel({ reelIndex: 0, config: this.config, pool: this.symbolManager });
        this.reels.push(reelComponent);
        this.showBeautyMatrix();
    }
```

### Step 3: Map Horizontal Blur Frames in `SymbolPrefab9666.prefab` & `SlotSymbolModule9666.ts`
- In `SymbolPrefab9666.prefab`, mapped 12 horizontal blur frames (`2_horizontal` $\rightarrow$ `K2_horizontal`) to their corresponding `9666_symbol_X_blur_horizontal` spriteframes.
- In `SlotSymbolModule9666.ts`, overrode `changeToBlurSymbol()`:
```typescript
    changeToBlurSymbol(): void {
        const baseName = this.getSymbolName();
        let symbolFrame: cc.SpriteFrame = null;
        if (this.isOnHorizontalReel()) {
            symbolFrame = this.resourceManager.getBlurSymbolFrame(`${baseName}_horizontal`);
        }
        if (!symbolFrame) {
            symbolFrame = this.resourceManager.getBlurSymbolFrame(baseName);
        }
        this.updateSymbolFrame(symbolFrame);
        this.updateBackgroundFrame(null);
    }
```

---

## 5. ⚠️ Gotchas & Edge Cases
1. **Zero-Code Modification on `cc-common`**:
   - Base `HorizontalReelModule.ts` is untouched. Game uses subclass `HorizontalReelModule9666`.
2. **Fallback Safety**:
   - `changeToBlurSymbol()` checks `getBlurSymbolFrame(`${baseName}_horizontal`)` first, and safely falls back to standard blur `getBlurSymbolFrame(baseName)` if horizontal blur frame is not defined.

---

## 6. ♻️ Reusability Guide for Future Game Titles
1. Create `HorizontalReelModule<GameId>` inheriting from `HorizontalReelModule` and override `spawnSymbol(code, size, isBlur)`.
2. In `HorizontalTableModule<GameId>`, replace component with `HorizontalReelModule<GameId>` in `initTable()`.
3. Add `${code}_horizontal` entries in `blurSymbolSfList` in `SymbolPrefab` and resolve via `isOnHorizontalReel()`.

---

## 7. 🔗 References & Codebase Links
- Base Mechanics: `assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalReelModule.ts`
- Game Reel Implementation: `assets/cc-release-slot/cc1-red-cliff/scripts/Table/HorizontalReelModule9666.ts`
- Game Table Implementation: `assets/cc-release-slot/cc1-red-cliff/scripts/Table/HorizontalTableModule9666.ts`
- Game Symbol Implementation: `assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotSymbolModule9666.ts`
- Symbol Prefab Configuration: `assets/cc-release-slot/cc1-red-cliff/data/prefabs/Table/SymbolPrefab9666.prefab`
