---
id: "transfer-ark:feature:total_win_celebration:06_reusability"
title: "Total Win Celebration - Reusability & Setup Guide"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["TotalWinModule", "CutsceneController"]
tags: ["setup_guide", "checklist", "prefab", "porting", "total_win"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 6. ♻️ Reusability & Setup Guide for New Games

---

## 6.1 Prefab Hierarchy Setup
In your game directory (`assets/cc-release-slot/[game-name]/data/prefabs/Cutscene/TotalWin.prefab`):

```text
TotalWin (Node with TotalWinModule[GameId] script)
├── Overlay (cc.Node with cc.Sprite - semi-transparent black background, 3000x3000)
├── totalWinSkeleton (cc.Node with sp.Skeleton - 3-stage Spine character)
└── winAmount (cc.Node with cc.Label - floating total win number label)
```

---

## 6.2 Spine Art Asset Conventions
Inform the 2D Spine Animator of the following strict requirements:
1. **Bone Anchor**: Must contain a bone explicitly named `slot_money` anchored at the exact point where the win number text should float.
2. **Animation Names**:
   - `in`: Intro celebration entrance animation.
   - `loop`: Idle victory celebration loop.
   - `out`: Outro exit/dismissal animation.

---

## 6.3 Inspector Property Configuration
On the `TotalWinModule[GameId]` component in Cocos Creator Inspector:
- **`winAmount`**: Drag `winAmount` label node.
- **`overlayNode`**: Drag `Overlay` node.
- **`totalWinSkeleton`**: Drag `totalWinSkeleton` spine node.
- **`animDuration`**: `7.0` (Seconds for full count-up duration).

---

## 6.4 CutsceneController Registration
In `CutsceneControl.prefab` (or Scene `CutsceneController` node):
1. In `cutsceneList`, add an entry.
2. Link the instantiated `TotalWin` node.
3. Set `cutsceneType = CUTSCENE_TYPE_ENUM.TOTAL_WIN` (`3`).

---

## 6.5 FreeGameDirector Trigger Flow
At the end of all free spins in `FreeGameDirectorModule[GameId]`:

```typescript
// Triggers Total Win cutscene and transitions back to Normal Game mode
protected async _showTotalWin(): Promise<void> {
    const totalWinAmount = this.dataStore.playSession.freeGameTotalWin;
    if (totalWinAmount > 0) {
        await this._showCutscene({
            name: CUTSCENE_NAME.TOTAL_WIN,
            content: { winAmount: totalWinAmount }
        });
    }
}
```

---

## 6.6 Verification Checklist
- [ ] **Entrance**: Spine plays `in`, number rolls up smoothly from 0 to total win amount, label dynamically moves with `slot_money` bone.
- [ ] **Loop**: Spine transitions to `loop` upon reaching total win amount with 0.2s crossfade mix.
- [ ] **Tap Skip**: Tapping during count immediately jumps to final total win amount.
- [ ] **1.0s Debounce**: Rapid clicking during final count-up does not accidentally close popup immediately.
- [ ] **3.0s Auto-Close**: Popup automatically plays `out` and dismisses after 3 seconds of inactivity.
- [ ] **Outro Skip**: Tapping again during `out` animation immediately forces module exit without hanging.
- [ ] **BGM Restore**: `resumeMainBGM()` cleanly restores base game music when returning to Normal Game mode.
