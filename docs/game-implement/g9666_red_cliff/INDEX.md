---
id: "game-implement:9666:index"
title: "Game Architecture & Implementation Dossier: Red Cliff (g9666)"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
section: "index"
tags: ["game_implement", "9666", "red_cliff", "megaways", "cascade", "subclass_matrix", "index"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 🎮 Game Architecture Dossier: Red Cliff (Game ID: 9666)

> **Game Name**: Red Cliff (Đại Chiến Xích Bích)  
> **Game ID**: `g9666` / `9666`  
> **Theme**: Historical 3-Kingdoms Asian War Slot  
> **Engine Base**: Cocos Creator 2.4.x + ARK `cc-common` (cc-slot-module)  
> **Mechanic Style**: Dynamic Ways (Megaways) + Cascade Refill + Multi-size Symbols (1x1 to 1x4) + Stack Wild Multiplier

---

## 🗂️ 6-Module Architecture Index

| Module | Document | Core Content |
| :---: | :--- | :--- |
| **01** | [**01. Game Overview & Rules**](./01_game_overview_and_rules.md) | Reel layout (6x5 Megaways), Dynamic Ways (up to 32,400), Symbol hierarchy, Bet steps |
| **02** | [**02. Scene Tree & Prefab Hierarchy**](./02_scene_and_prefab_hierarchy.md) | Node tree of `MainGame9666.fire`, Canvas, MainGameBoard, Layers, Z-Index stacking |
| **03** | [**03. Custom Subclasses & Overrides Matrix**](./03_custom_modules_and_overrides.md) | Complete mapping of SDK base classes $ightarrow$ `cc1-red-cliff` custom subclasses |
| **04** | [**04. Cutscenes, Spine Animations & Bones**](./04_cutscene_and_spine_registry.md) | Cutscene IDs, Spine files, Animation states (`in`/`loop`/`out`), Bone money anchors (`slot_money`) |
| **05** | [**05. Events & Audio Mapping Dictionary**](./05_events_and_audio_mapping.md) | Custom Event bus, Sound keys (`BGM`, `SFX`, `MC_STATE`), SoundPlayer integration |
| **06** | [**06. Cheat Keys, Mock Data & Debug Scenarios**](./06_cheat_and_mockup_guide.md) | Mock payload samples, Fast-trigger Free Game, Big Win test steps, Dev cheat overlay |
