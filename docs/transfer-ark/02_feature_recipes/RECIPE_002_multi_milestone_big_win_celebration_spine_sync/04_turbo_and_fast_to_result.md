---
id: "transfer-ark:feature:multi_milestone_big_win:04_turbo_fallback"
title: "Multi-Milestone Big Win - Turbo & Fast-To-Result Fallback"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["WinEffectModule", "GameModeDirectorModule"]
tags: ["turbo", "fast_to_result", "fastParticle", "showFastEffectWin", "non_blocking"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 4. ⚡ Turbo & Fast-To-Result Fallback

---

## 4.1 SDK Fast Big Win Standard
When playing in **Turbo Mode** (`gameSettings.isTurboActive`) or **Fast-To-Result** (`gameSettings.isFastToResult`), players demand maximum spin velocity. Displaying a multi-second count-up popup ruins game pace and causes race conditions during game mode transitions (e.g. into Free Game).

### SDK Rules:
1. **No Fullscreen Overlay / Spine**: Deactivate `bigWinSkeleton`, `overlayNode`, and `winInfo`.
2. **Instant Callback Resolution**: Immediately call `this.callback()` to avoid pipeline stall.
3. **1-Second Particle Burst**: Run `fastParticle` for $1.0\text{s}$, then auto-cleanup.
4. **BGM Preservation**: Do not switch BGM to Big Win music; preserve the current active mode BGM.

---

## 4.2 Implementation

```typescript
enter(): void {
    this.node.stopAllActions();
    this.cleanupTweens();

    const isTurboActive = this.gameSettings && this.gameSettings.isTurboActive;
    const isFastToResult = this.gameSettings && this.gameSettings.isFastToResult;

    // Route to fast particle effect if Turbo/FTR is enabled
    if (isTurboActive || isFastToResult) {
        this.showFastEffectWin();
        return;
    }

    // Normal celebration setup
    this.showEffectWin();
}

showFastEffectWin(): void {
    // 1. Hide full popup assets
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

    // 2. Delegate to base WinEffectModule:
    // - Fires fastParticle burst for 1.0s
    // - Resolves this.callback() immediately
    // - Auto-teardowns after 3.0s
    super.showFastEffectWin();
}

playSfxFastBigWin(): void {
    if (this.soundPlayer) {
        this.soundPlayer.playSfx('BIGWIN_END');
    }
}

exit(): void {
    this.cleanupTweens();
    // ...
    // Guard: Only resume main BGM if normal celebration was actually played
    if (this._isShowNormalEffect) {
        this.resumeMainBGM();
    }
    super.exit();
}
```
