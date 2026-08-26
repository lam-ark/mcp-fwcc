---
id: "transfer-ark:bugs:archer_symbol_static_spriteframe_in_blur_list"
title: "Fix Symbol Archer (Code 3) Displaying Sharp/Static During Reel Spin"
category: "bugfix"
game_ids: ["g9666", "all"]
sdk_modules: ["SlotSymbolResourceManager", "SlotSymbolModule", "SymbolPrefab9666"]
tags: ["blur", "archer", "symbol_3", "sprite_frame", "resource_manager", "visual_glitch", "ark_business"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# BUG-003: Symbol Archer (Code 3) Displaying Sharp/Static During Reel Spin

---

## 1. 📌 Problem / Feature Overview
- **Visual Glitch**: During the reel spinning phase, all symbols display motion blur properly except the Archer symbol (Symbol Code `"3"`). The Archer symbol appears completely sharp and static while spinning.
- **UX Impact**: Creates visual inconsistency on the spinning reel strips, making the Archer symbol look frozen or desynced from the animation.
- **Occurrence Scope**: Affects reel spinning in Normal, Turbo, and Free Game modes.

---

## 2. 🏢 Vendor SDK vs ARK Business Discrepancy
- **Vendor SDK Asset Mapping**:
  - `SlotSymbolResourceManager` relies on `blurSymbolSfList` to resolve blur sprite frames when `changeToBlurSymbol()` is invoked.
  - Due to a misconfiguration in `SymbolPrefab9666.prefab`, symbol `"3"` in `blurSymbolSfList` was mapped to the static sprite frame `9666_symbol_3` (`uuid: 8ee2f389-92b0-4301-a71d-8a891eca2827`) instead of the motion-blurred frame `9666_symbol_3_blur` (`uuid: 696c694a-dc58-4b5b-b56e-27a19744b306`).
- **ARK Business Requirement**:
  - All symbols (including Archer `"3"`) must render their designated motion-blurred texture during continuous reel spinning.

---

## 3. 🔍 Root Cause Analysis in Base SDK
In `SlotSymbolModule.ts`:
```typescript
changeToBlurSymbol(): void {
    const symbolName = this.getSymbolName();
    const symbolFrame = this.resourceManager.getBlurSymbolFrame(symbolName);
    this.updateSymbolFrame(symbolFrame);
    this.updateBackgroundFrame(null);
}
```
In `SlotSymbolResourceManager.ts`:
```typescript
getBlurSymbolFrame(symbolCode: string): cc.SpriteFrame {
    return this.blurFrameAssets[symbolCode] || this.staticFrameAssets[symbolCode];
}
```
Because `blurSymbolSfList` in `SymbolPrefab9666.prefab` had `symbolCode: "3"` pointing to `9666_symbol_3` (the sharp static frame), `this.blurFrameAssets["3"]` was populated with the static texture, causing `SlotSymbolModule` to render a non-blurred sprite during spins.

---

## 4. 🛠️ Implementation & Override Solution

In `assets/cc-release-slot/cc1-red-cliff/data/prefabs/Table/SymbolPrefab9666.prefab`:

Updated `blurSymbolSfList` entry for `"3"`:
```diff
  {
    "__type__": "SymbolModuleSpriteFrame",
    "symbolCode": "3",
    "symbolSf": {
-     "__uuid__": "8ee2f389-92b0-4301-a71d-8a891eca2827"  // Static 9666_symbol_3
+     "__uuid__": "696c694a-dc58-4b5b-b56e-27a19744b306"  // Blur 9666_symbol_3_blur
    }
  }
```

---

## 5. ⚠️ Gotchas & Edge Cases
1. **Multi-Size vs Standard 1x1 Blur Frames**:
   - `3_1_2` and `3_1_3` already mapped correctly to `9666_symbol_3_2_blur` and `9666_symbol_3_3_blur`. Only the 1x1 base code `"3"` had the wrong UUID assignment.
2. **Editor Asset Cache Invalidation**:
   - When modifying `.prefab` files programmatically, invalidate Cocos cache via `cc.assetManager.releaseAsset` and `Editor.assetdb.refresh` to ensure the scene runtime instantiates the updated asset.

---

## 6. ♻️ Reusability Guide for Future Game Titles
1. Use the Cocos MCP tool to scan all entries in `blurSymbolSfList`:
   - Verify every item's `sfName` contains `blur`.
2. Ensure 1x1, 1x2, and 1x3 variants each point to their corresponding `_blur` sprite frame asset.

---

## 7. 🔗 Codebase References
- Prefab Resource Configuration: `assets/cc-release-slot/cc1-red-cliff/data/prefabs/Table/SymbolPrefab9666.prefab`
- Texture Asset: `assets/cc-release-slot/cc1-red-cliff/data/9666_UI/9666_StaticSymbols/9777_BlurSymbol/9666_symbol_3_blur.png`
- Symbol Resource Manager: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolResourceManager.ts`
