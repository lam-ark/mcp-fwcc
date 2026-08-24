---
id: "cc_slot_module:BonusGameItemModule:overview:architecture_and_role"
title: "BonusGameItemModule Individual Pick Item & Animation Architecture"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "overview", "architecture", "chest_item"]
---

# 🏛️ BonusGameItemModule Individual Pick Item & Animation Architecture

## 1. Executive Summary & Purpose

`BonusGameItemModule` (`assets/cc-common/cc-slot-module/GameMode/BonusGame/BonusGameItemModule.ts`) is the **Individual Interactive Item/Chest Controller** instantiated by `BonusGameTableModule`.

Extending `SlotBaseModule`, it captures player tap inputs via `cc.Button`, dispatches bubbling `CLICK_ITEM` custom events up to `BonusGameDirectorModule`, manages prize frame swapping (`BonusItemSpriteFrame`), executes opening tweens/SFX (`playAnimOpen`), and controls dimmed styling (`colorDim`) when revealed at the end of the round.

```mermaid
graph TD
    Tap[Player Taps Chest] --> Item[BonusGameItemModule]
    Item --> Evt["dispatchEvent: SlotCustomEvent('CLICK_ITEM', true, { itemId })"]
    Evt --> Dir[BonusGameDirectorModule]
    
    Dir -->|Network Validation| OpenCmd[moduleEvent: OPEN_ITEM]
    OpenCmd --> Item
    Item --> SFX[Play soundBoxOpen SFX]
    Item --> Sprite[Switch itemSprite.spriteFrame to staticFrameAssets[value]]
    Item --> Tween[Tween Reveal: 0.5s delay -> showScore -> 0.5s delay -> callback]
```

---

## 2. Core Responsibilities

1. **Touch Interaction & Event Bubbling (`onClickItem`)**: Intercepts button clicks on unopened boxes and bubbles `SlotCustomEvent("CLICK_ITEM", true, { itemId })` up the node tree.
2. **Opening Animation & Asset Resolution (`playAnimOpen`)**: Maps prize IDs to SpriteFrames from `itemSfList` and plays timed opening tweens.
3. **Dimmed Filter Application (`dim`, `undim`)**: Applies `colorDim` tint to visually de-emphasize unpicked boxes during the final reveal.
