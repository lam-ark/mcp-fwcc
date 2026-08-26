---
id: "transfer-ark:feature:multi_milestone_big_win:01_overview"
title: "Multi-Milestone Big Win - Overview & Business Requirements"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["WinEffectModule", "BaseCutscene"]
tags: ["big_win", "milestones", "overview", "business_rules"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 1. 📌 Problem & Business Requirements Overview

---

## 1.1 Business Context & Requirements
In modern video slot games, large win payouts must trigger a multi-tiered celebration popup with progressive milestones:
- **Level 1 (Big Win)**: Total Win $\ge 10\times$ Total Bet.
- **Level 2 (Mega Win)**: Total Win $\ge 20\times$ Total Bet.
- **Level 3 (Super Mega Win)**: Total Win $\ge 30\times$ Total Bet.

When total win exceeds a higher milestone threshold, the popup must not jump immediately to the end state. Instead, it must dynamically step through each milestone sequentially, escalating anticipation and audiovisual excitement.

---

## 1.2 Audiovisual & UX Choreography Goals
1. **Dynamic Milestone Roll-Up**:
   - Number tween counts upward progressively through each unlocked milestone tier.
   - Triggers matching audio cues upon reaching each tier (`BIGWIN_LEVEL1`, `BIGWIN_LEVEL2`, `BIGWIN_LEVEL3`).
2. **Seamless Spine Animation Transitions**:
   - Plays milestone entrance animation (`win_[N]_in`), transitioning to loop (`win_[N]_loop`) upon completion.
   - Smooth skeleton mix transitions prevent jarring jumps between levels.
3. **Dynamic Money Label Tracking (`slot_money` Bone)**:
   - The win amount label is anchored directly to a moving Spine bone (`slot_money`) in world space, giving the label natural bounce, scale, and movement matching the character animation.
4. **Intuitive Touch Controls**:
   - Tapping during counting immediately skips to the end of the current milestone and advances to the next.
   - A **1.0-second debounce lock** after the final milestone finishes prevents accidental popup dismissal.
   - Auto-dismisses after **3.0 seconds** if untouched.
5. **Turbo / Fast-To-Result Compatibility**:
   - Non-blocking 1-second coin particle burst without full popup overlay to preserve Turbo spin speed.

---

## 1.3 Vendor SDK vs ARK Business Discrepancy

| Aspect | Vendor SDK Default (`WinEffectModule`) | ARK Business Requirement (`WinEffectModule9666`) |
| :--- | :--- | :--- |
| **Milestone Model** | Single linear tween with threshold polling | Dynamic `IMilestone[]` array with multi-tier target steps |
| **Visual Assets** | Switches 2D SpriteFrames (`titleFrame`) | Choreographed Spine skeleton animations (`in` $\rightarrow$ `loop`) |
| **Label Positioning** | Static centered label | Dynamic World-Space bone tracking (`slot_money`) |
| **Touch Interaction** | Single click fast-forwards total amount | Per-milestone skip + 1.0s completion debounce + 3.0s auto-close |
| **State Management** | Implicit boolean flags | Explicit 4-state state machine (`WinPopupState`) |
