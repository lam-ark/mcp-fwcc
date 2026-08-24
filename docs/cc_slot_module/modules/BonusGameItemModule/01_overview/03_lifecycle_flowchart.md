---
id: "cc_slot_module:BonusGameItemModule:overview:lifecycle_flowchart"
title: "BonusGameItemModule Item State Flowchart"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 BonusGameItemModule Item State Flowchart

## 1. Item Lifecycle State Flowchart

```mermaid
graph TD
    Init[INIT itemId -> resetBoxUI] --> Idle[Unopened Idle: isOpen = false, Button Enabled]
    
    Idle -->|User Click / Auto-Trigger| Click[onClickItem: dispatchEvent 'CLICK_ITEM']
    Click --> WaitServer[Waiting for Server Response]
    
    WaitServer -->|BOX_OPEN value| Open[playAnimOpen: isOpen = true, disableClick]
    Open --> SFX[Play soundBoxOpen]
    Open --> Sprite[Assign staticFrameAssets value]
    Open --> Reveal[Tween Delay 0.5s -> showScore -> Callback]
    
    Reveal --> DimCheck{DIM event received?}
    DimCheck -->|Yes: Unpicked Reveal| DimColor[itemSprite.color = colorDim]
    DimCheck -->|No: Active Pick| NormalColor[itemSprite.color = colorNormal]
    
    DimColor --> End[End of Round State]
    NormalColor --> End
    End -->|BOX_RESET| Reset[resetBox -> Return to Idle]
```
