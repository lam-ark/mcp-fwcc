---
id: "cc_slot_module:BonusGameItemModule:game_flow:spin_phase_breakdown"
title: "BonusGameItemModule Item Interaction Lifecycle Breakdown"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "game_flow", "item_lifecycle"]
---

# 🌀 BonusGameItemModule Item Interaction Lifecycle Breakdown

## 1. Item Interaction Sequence

```mermaid
sequenceDiagram
    autonumber
    actor Player
    participant Item as BonusGameItemModule
    participant Node as cc.Node
    participant Director as BonusGameDirectorModule

    Note over Player,Director: Phase 1: Tap Input & Event Bubbling
    Player->>Item: Taps Chest Button
    Item->>Item: onClickItem() -> Checks isOpen === false
    Item->>Node: dispatchEvent(SlotCustomEvent("CLICK_ITEM", true, { itemId }))
    Node-->>Director: Bubbles up to Director

    Note over Player,Director: Phase 2: Opening Reveal Animation
    Director->>Item: Node emits BOX_OPEN (bonusValue, callback)
    Item->>Item: playAnimOpen() -> isOpen = true & disableClick()
    Item->>Item: Switches itemSprite to staticFrameAssets[value]
    Item->>Item: Runs Tween: delay 0.5s -> showScore -> delay 0.5s -> callback()

    Note over Player,Director: Phase 3: Final Dimmed State
    opt If unpicked at end of round
        Director->>Item: Node emits DIM
        Item->>Item: itemSprite.color = colorDim
    end
```
