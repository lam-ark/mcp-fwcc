---
id: "transfer-ark:feature:multi_milestone_big_win:06_gotchas"
title: "Multi-Milestone Big Win - Gotchas & Edge Cases"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["WinEffectModule9666", "sp.Skeleton"]
tags: ["gotchas", "edge_cases", "world_transform", "teardown", "memory_leak"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 6. ⚠️ Gotchas & Edge Cases

---

## 6.1 Gotchas Catalog

| # | Trap / Gotcha | Severity | Manifestation | Prevention / Fix |
|---|---------------|----------|---------------|------------------|
| **01** | `updateWorldTransform` Stale Matrices | **HIGH** | Label jumps to `(0, 0)` or lags 1 frame behind Spine bone | Call `skeleton.updateWorldTransform()` immediately before `findBone('slot_money')`. |
| **02** | Stale Track Listener Callbacks | **HIGH** | Outdated animation callback triggers when skipping | Clear listener via `skeleton.setCompleteListener(() => {})` on level switch & teardown. |
| **03** | Missing Debounce Tap-Through | **MEDIUM** | User rapidly tapping screen accidentally dismisses popup instantly upon count completion | Use `_tweenDebounce` (1.0s) setting `_canClickToClose = false` before allowing dismissal. |
| **04** | Redundant `resumeMainBGM()` in Turbo | **LOW** | BGM stutters or restarts in Turbo mode | Guard `if (this._isShowNormalEffect) this.resumeMainBGM()` in `exit()`. |
| **05** | Tween Memory Leak on Node Destroy | **MEDIUM** | Tween callback executes after node destruction, throwing null exception | Stop all tweens in `cleanupTweens()` and `onDestroy()`. |

---

## 6.2 Deep Dive: Animation Listener Cleanup

```typescript
// ❌ WRONG: Setting a new listener without clearing the old one
this.bigWinSkeleton.setAnimation(0, inAnim, false);
this.bigWinSkeleton.setCompleteListener((entry) => {
    // If the user skips or changes level before entry completes,
    // this callback will STILL fire later, overriding the new animation!
});

// ✅ CORRECT: Explicitly clear listener before starting new animation
this.bigWinSkeleton.setCompleteListener(() => { });
this.bigWinSkeleton.setAnimation(0, inAnim, false);
this.bigWinSkeleton.setCompleteListener((trackEntry: any) => {
    if (trackEntry && trackEntry.animation && trackEntry.animation.name === inAnim) {
        this.bigWinSkeleton.setCompleteListener(() => { }); // One-shot clear
        this.bigWinSkeleton.setAnimation(0, loopAnim, true);
    }
});
```
