---
id: "transfer-ark:feature:multi_milestone_big_win:07_reusability"
title: "Multi-Milestone Big Win - Reusability & Setup Guide"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["WinEffectModule", "CutsceneController"]
tags: ["setup_guide", "checklist", "prefab", "porting"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 7. ♻️ Reusability & Setup Guide for New Games

---

## 7.1 Prefab Hierarchy Setup
In your game directory (`assets/cc-release-slot/[game-name]/data/prefabs/Cutscene/WinEffect.prefab`):

```text
WinEffect (Node with WinEffectModule[GameId] script)
├── Overlay (cc.Node with cc.Sprite - semi-transparent black background, 3000x3000)
├── fastParticle (cc.Node with cc.ParticleSystem - 1s coin burst for Turbo)
├── winInfo (cc.Node - container for normal mode assets)
│   ├── bigWinSkeleton (cc.Node with sp.Skeleton - multi-stage Spine character)
│   └── coinsEffect (cc.Node with cc.ParticleSystem - ongoing ambient coins)
└── winAmount (cc.Node with cc.Label - floating win number label)
```

---

## 7.2 Spine Art Asset Conventions
Inform the 2D Spine Animator of the following strict requirements:
1. **Bone Name**: Must contain a bone explicitly named `slot_money` placed at the center of where text should float.
2. **Animation Names**:
   - `win_1_in` (Big Win Intro) $\rightarrow$ `win_1_loop` (Big Win Idle)
   - `win_2_in` (Mega Win Intro) $\rightarrow$ `win_2_loop` (Mega Win Idle)
   - `win_3_in` (Super Mega Win Intro) $\rightarrow$ `win_3_loop` (Super Mega Win Idle)

---

## 7.3 Inspector Property Configuration
On the `WinEffectModule[GameId]` component in Cocos Creator Inspector:
- **`winInfo`**: Drag `winInfo` node.
- **`overlayNode`**: Drag `Overlay` node.
- **`winAmount`**: Drag `winAmount` label node.
- **`bigWinSkeleton`**: Drag `bigWinSkeleton` spine node.
- **`fastParticle`**: Drag `fastParticle` node.
- **`coinsEffect`**: Drag `coinsEffect` node.
- **`milestoneRatios`**: `[10, 20, 30]` (Array of numbers representing `totalBet` multipliers).
- **`milestoneDurations`**: `[2.5, 2.5, 2.5]` (Array of seconds for each milestone count-up).

---

## 7.4 CutsceneController Registration
In `CutsceneControl.prefab` (or Scene `CutsceneController` node):
1. In `cutsceneList`, add a new entry.
2. Link the instantiated `WinEffect` node.
3. Set `cutsceneType = CUTSCENE_TYPE_ENUM.BIG_WIN` (`0`).

---

## 7.5 Verification Checklist
- [ ] **Normal Mode Big Win**: Number counts up sequentially, Spine switches levels smoothly, text moves with `slot_money` bone.
- [ ] **Tap Skip**: Tapping fast-forwards current milestone without breaking Spine transition.
- [ ] **1.0s Debounce**: Rapid clicking during final count-up does not accidentally close popup immediately.
- [ ] **3.0s Auto-Close**: Popup automatically dismisses after 3 seconds of inactivity.
- [ ] **Turbo Mode**: Plays 1-second particle burst without full popup, and transitions seamlessly into Free Game if triggered.
