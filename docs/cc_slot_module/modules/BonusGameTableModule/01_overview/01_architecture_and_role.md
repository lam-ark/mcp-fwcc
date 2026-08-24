---
id: "cc_slot_module:BonusGameTableModule:overview:architecture_and_role"
title: "BonusGameTableModule Interactive Pick Grid Orchestrator Architecture"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "overview", "architecture", "grid", "box_pooling"]
---

# 🏛️ BonusGameTableModule Interactive Pick Grid Orchestrator Architecture

## 1. Executive Summary & Purpose

`BonusGameTableModule` (`assets/cc-common/cc-slot-module/GameMode/BonusGame/BonusGameTableModule.ts`) is the **Interactive Grid & Item Matrix Manager** for Pick Mini-Games.

Extending `SlotBaseModule`, it dynamically instantiates the matrix of clickable treasure chests/boxes (`boxPrefab`) based on `BonusTableConfig` dimensions (`COL_NUMBER` × `ROW_NUMBER`). It routes scoped module events (`INIT_BONUS_GAME`, `OPEN_ITEM`, `OPEN_FINAL_ITEM`, `OPEN_ALL_ITEMS`) to individual child `BonusGameItemModule` instances, handles timeout auto-clicks (`autoClick`), and uncovers remaining unopened items with dimmed grayscale styling when the feature concludes.

```mermaid
graph TD
    Director[BonusGameDirectorModule] -->|moduleEvent: INIT_BONUS_GAME| Table[BonusGameTableModule]
    Table -->|Instantiate boxPrefab| Boxes["Child Chest Nodes (BonusGameItemModule)<br/>[Box 0, Box 1, Box 2 ... Box N]"]
    
    subgraph Pick & Revelation
        Director -->|OPEN_ITEM itemId, val| Table
        Table -->|emit: BOX_OPEN| TargetBox[Target BonusGameItemModule]
        TargetBox -->|Play Open Spine/Tween| Show[Reveal Cash/Jackpot Prize]
    end

    subgraph Feature End
        Director -->|OPEN_ALL_ITEMS matrix| Table
        Table -->|emit: BOX_OPEN + DIM| OtherBoxes[Unopened Chests Dimmed]
    end
```

---

## 2. Core Responsibilities

1. **Dynamic Grid Instantiation (`initBoxes`)**: Calculates centering offsets (`startX`, `startY`) and instantiates `COL_NUMBER * ROW_NUMBER` chest nodes from `boxPrefab`.
2. **Interactive Item State Management**: Tracks `listBoxes` array and routes open/dim/undim/disable commands to individual item nodes.
3. **Auto-Selection Execution (`autoClick`)**: Chooses an unopened chest index at random when the player's countdown timer expires.
4. **End-of-Round Matrix Reveal (`openAllBoxes`)**: Reconstructs the remaining unpicked prize pool and reveals all unopened chests with `DIM` filters.
