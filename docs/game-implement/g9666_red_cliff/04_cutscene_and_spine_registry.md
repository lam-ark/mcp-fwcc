---
id: "game-implement:9666:cutscenes"
title: "Red Cliff (g9666) - Cutscenes, Spine Animations & Bone Anchors Registry"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
section: "cutscenes"
tags: ["game_implement", "9666", "cutscenes", "spine", "bones", "animations", "slot_money"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 4. 🎬 Cutscenes, Spine Animations & Bone Anchors Registry

---

## 4.1 Spine Assets & Bone Mapping

| Cutscene Feature | Cutscene Enum / ID | Spine Asset Path | Spine Animation States | Bone Anchor for Labels |
| :--- | :--- | :--- | :--- | :--- |
| **Big Win Celebration** | `CUTSCENE_TYPE_ENUM.BIG_WIN` | `data/spines/BigWin/BigWin` | `in` (Intro transition)<br>`loop` (Looping coin shower)<br>`out` (Outro dismissal) | `slot_money` (Win amount label node follows bone position) |
| **Total Win Celebration** | `CUTSCENE_TYPE_ENUM.TOTAL_WIN` | `data/spines/TotalWin/TotalWin` | `in` $ightarrow$ `loop` $ightarrow$ `out` | `slot_money` / `label_money` |
| **Intro Free Game Cutscene** | `CUTSCENE_TYPE_ENUM.INTRO_FREE_GAME` | `data/spines/IntroFG/IntroFG` | `animation` / `appear` | Text Free Spins Count anchor |
| **Outro Free Game Cutscene** | `CUTSCENE_TYPE_ENUM.OUTRO_FREE_GAME` | `data/spines/OutroFG/OutroFG` | `animation` / `disappear` | Summary total win anchor |
| **MC Character Mascot** | Custom | `data/spines/MC/Mascot9666` | `idle`, `TransitionFreespin`, `Cheer`, `Attack` | - |
