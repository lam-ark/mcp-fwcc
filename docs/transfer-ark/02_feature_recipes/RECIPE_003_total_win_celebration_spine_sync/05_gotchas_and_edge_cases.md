---
id: "transfer-ark:feature:total_win_celebration:05_gotchas"
title: "Total Win Celebration - Gotchas & Edge Cases"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["TotalWinModule9666", "sp.Skeleton"]
tags: ["gotchas", "edge_cases", "out_animation", "bgm_restore", "track_listener"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 5. ⚠️ Gotchas & Edge Cases

---

## 5.1 Gotchas Catalog

| # | Trap / Gotcha | Severity | Manifestation | Prevention / Fix |
|---|---------------|----------|---------------|------------------|
| **01** | Stuck in Outro (`out`) Animation | **HIGH** | If user taps during `out` anim, popup may hang if not handled | In `onClick()`, check `state === CLOSING` and call `this.exit()` immediately. |
| **02** | Stale Complete Listener on `out` | **HIGH** | `setCompleteListener` on 'in' or 'out' triggers after module destroy | Always reset listener `setCompleteListener(() => {})` in `exit()` and `onDestroy()`. |
| **03** | `slot_money` Bone Lag | **MEDIUM** | Number label positions lag behind Spine character during fast intro | Call `skeleton.updateWorldTransform()` before reading `bone.worldX, bone.worldY`. |
| **04** | Missing BGM Restore | **HIGH** | Game remains on `BGM_TOTAL_WIN` or silent after returning to Normal Game | Always call `this.resumeMainBGM()` in `exit()`. |
| **05** | Double Close Invocation | **LOW** | Race condition between user click and 3.0s auto-close timer | Guard `if (this._popupState === TotalWinState.CLOSING) return;` at entry of `closePopup()`. |

---

## 5.2 Deep Dive: 2-Tap Outro Handling

When a player taps screen to dismiss:
1. **Tap 1 (at `COUNTING_COMPLETED`)**: Transitions state to `CLOSING`, starts Spine `out` animation.
2. **Tap 2 (at `CLOSING`)**: Player does not want to wait for the `out` animation to finish. `onClick()` handles `state === CLOSING` $\rightarrow$ calls `this.exit()` immediately to skip the outro animation.

```typescript
public onClick(): void {
    if (this._popupState === TotalWinState.COUNTING) {
        this.playSoundSkip();
        this.skipCounting();
    } else if (this._popupState === TotalWinState.COUNTING_COMPLETED) {
        if (this._canClickToClose) {
            this.closePopup(); // Plays 'out' animation
        }
    } else if (this._popupState === TotalWinState.CLOSING) {
        this.exit(); // Skips 'out' animation directly to exit
    }
}
```
