---
id: "transfer-ark:bugfix:turbo_bigwin_skips_freegame_cutscene"
title: "Fix Big Win Fast-Track in Turbo Mode via SDK showFastEffectWin Standard"
category: "bugfix"
game_ids: ["g9666","all"]
sdk_modules: ["WinEffectModule","GameModeDirectorModule","IntroFreeGameModule","NormalGameDirectorModule"]
tags: ["turbo","fast_to_result","big_win","showFastEffectWin","particle","free_game","cutscene","transition"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---
# BUG-005: Fix Big Win Fast-Track in Turbo Mode via SDK showFastEffectWin Standard

---

## 1. 📌 Problem / Feature Overview
- **Visual Glitch & Flow Desync**: When playing with Turbo ON / Fast-To-Result (FTR), hitting a Big Win that simultaneously triggers Free Game caused visual glitches: the Free Game Intro cutscene was missing or obstructed, and in some cases the 7.5s Big Win Spine popup overlapped into the Free Game board.
- **UX Requirement**: Under Turbo ON / FTR mode, Big Win celebrations must skip the full-screen counting popup entirely, replacing it with a 1-second falling coin particle burst (`fastParticle`), and seamlessly transition into the Free Game intro cutscene (`IntroFreeGameModule`) without any blocking or visual corruption.

---

## 2. 🏢 Vendor SDK vs ARK Business Discrepancy
- **Vendor SDK Standard**: In Turbo / FTR mode, `WinEffectModule.showFastEffectWin()` disables `overlayNode` and `winInfo`, plays `fastParticle` for 1 second, and resolves the callback immediately to allow uninterrupted gameplay.
- **ARK Discrepancy in 9666**: `WinEffectModule9666` did not implement `showFastEffectWin()`, causing full popup rendering in Turbo mode and breaking mode transitions. By implementing `showFastEffectWin()`, 9666 perfectly conforms to the SDK standard.

---

## 3. 🔍 Root Cause Analysis in Base SDK
1. In `WinEffectModule9666.ts`, `enter()` was originally overridden to ALWAYS execute `this.showEffectWin()` (the full 7.5s 3-stage Spine counting popup), ignoring `isTurboActive` and `isFastToResult`.
2. In `GameModeDirectorModule.ts`, `_showFastBigWin` calls `this._showCutscene(data)` non-blockingly and returns `_showWinPayline` (resolving in 0s).
3. Because `_showFastBigWin` does not block, `Director` immediately initiated `TransitionGameMode` and `IntroFreeGameModule` while the full Big Win popup of 9666 was still opening and covering the entire screen, causing the Free Game transition cutscene to be obscured or destroyed when switching scenes.

---

## 4. 🛠️ Implementation & Override Solution
```typescript
Adhering to the **Zero-Code Modification on `cc-common`** principle and the **SDK Fast Big Win Standard**, implement `showFastEffectWin` support directly in the game's custom WinEffect module (`assets/cc-release-slot/cc1-red-cliff/scripts/Cutscene/WinEffectModule9666.ts`):

```typescript
@ccclass
export class WinEffectModule9666 extends WinEffectModule {
    // ...

    enter(): void {
        this.node.stopAllActions();
        this.cleanupTweens();

        const isTurboActive = this.gameSettings && this.gameSettings.isTurboActive;
        const isFastToResult = this.gameSettings && this.gameSettings.isFastToResult;

        // 1. In Turbo / FTR mode, route directly to fast particle effect
        if (isTurboActive || isFastToResult) {
            this.showFastEffectWin();
            return;
        }

        if (!this._lbWinAmount && this.winAmount) {
            this._lbWinAmount = this.winAmount.getComponent(cc.Label);
        }
        if (this._lbWinAmount) {
            this._lbWinAmount.node.active = true;
            this._lbWinAmount.string = "0";
        }

        this.showEffectWin();
    }

    showFastEffectWin(): void {
        // Deactivate full-screen Spine and overlays
        if (this.bigWinSkeleton) {
            this._isMoneySlotMoving = false;
            this.bigWinSkeleton.setCompleteListener(() => { });
            this.bigWinSkeleton.clearTracks();
            this.bigWinSkeleton.node.active = false;
        }
        if (this.overlayNode) {
            this.overlayNode.active = false;
        }
        if (this.winInfo) {
            this.winInfo.active = false;
        }

        // Delegate to base WinEffectModule (plays fastParticle for 1s, resolves callback immediately)
        super.showFastEffectWin();
    }

    playSfxFastBigWin(): void {
        if (this.soundPlayer) {
            this.soundPlayer.playSfx('BIGWIN_END');
        }
    }

    exit(): void {
        this.cleanupTweens();
        if (this.bigWinSkeleton) {
            this._isMoneySlotMoving = false;
            this.bigWinSkeleton.setCompleteListener(() => { });
            this.bigWinSkeleton.clearTracks();
            this.bigWinSkeleton.node.active = false;
        }
        if (this._lbWinAmount) {
            this._lbWinAmount.node.active = true;
            this._lbWinAmount.string = "";
        }
        this._popupState = WinPopupState.IDLE;
        if (this._isShowNormalEffect) {
            this.resumeMainBGM();
        }
        super.exit();
    }
}
```
```

---

## 5. ⚠️ Gotchas & Edge Cases
1. **SDK Fast Big Win Standard (`showFastEffectWin`)**:
   - In `cc-common` slot SDK, Turbo / FTR mode intentionally skips full-screen counting popups to maintain high spin speed.
   - It replaces the popup with a non-blocking 1-second falling coin particle burst (`fastParticle`) and resolves `callback()` immediately.
2. **Spine & Overlay Cleanup**:
   - When `showFastEffectWin()` is invoked in game-specific subclasses, ensure custom Spine skeletons (e.g. `bigWinSkeleton`) and overlay nodes are deactivated (`active = false`) so they do not obstruct gameplay or upcoming cutscenes.
3. **BGM Guarding on Exit**:
   - Only call `resumeMainBGM()` in `exit()` if `_isShowNormalEffect` was active. Since `showFastEffectWin()` does not replace the main background music, calling `resumeMainBGM()` unnecessarily can cause audio jitter or restart.

---

## 6. ♻️ Reusability Guide for Future Game Titles
1. When creating a game with a custom WinEffect / BigWin module subclassing `WinEffectModule`:
   - Always check if `enter()` routes to `showFastEffectWin()` when `isTurboActive || isFastToResult` is true.
2. In `showFastEffectWin()`, explicitly disable custom Spine animations, win amount labels, and darkening overlays so only the 1-second particle burst is visible.
3. Ensure `playSfxFastBigWin()` is implemented to give quick audio feedback.
4. Verify using the Cheat Tool:
   - Turn Turbo ON -> Trigger Big Win in base game -> Confirm falling coins appear for 1s without full popup.
   - Turn Turbo ON -> Trigger Big Win + Free Game -> Confirm falling coins play and Free Game Intro cutscene transitions cleanly.

---

## 7. 🔗 Codebase References
- `assets/cc-release-slot/cc1-red-cliff/scripts/Cutscene/WinEffectModule9666.ts`
- `assets/cc-common/cc-slot-module/CutScene/WinEffect/WinEffectModule.ts`
- `assets/cc-common/cc-slot-module/GameMode/GameModeDirectorModule.ts`
- `assets/cc-release-slot/cc1-red-cliff/scripts/Cutscene/IntroFreeGameModule9666.ts`
