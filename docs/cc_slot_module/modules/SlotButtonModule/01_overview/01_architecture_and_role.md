---
id: "cc_slot_module:SlotButtonModule:overview:architecture_and_role"
title: "SlotButtonModule Architectural Role & Complete Spin Input Ecosystem"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "overview", "architecture", "spin_button", "ecosystem"]
---

# 🏛️ SlotButtonModule Architectural Role & Complete Spin Input Ecosystem

---

## 1. Architectural Mission

The **Spin Button Ecosystem** is the fundamental user input gateway in every Cocos Creator slot game. It bridges physical player interactions (mouse hover, touch taps, $0.7\text{s}$ hold gestures, desktop Spacebar keypresses) with reactive game data streams (`buttonModel`) and dynamic animation renderers (`SlotButtonSpine` / `SlotButtonSprite`).

```mermaid
graph TD
    User[Player Input: Tap / Hold / Spacebar] --> Touch[touchNode / spinButtonTouch]
    Touch --> SBM[SlotButtonModule Base]
    
    SBM --> SBN[SlotButtonNormal: Hold-to-Auto, SFX, Fast-Stop]
    SBM --> SBF[SlotButtonFree: Free Spins Continuous Trigger]
    SBM --> SBL[SlotButtonLightning: High-Speed Turbo Trigger]
    
    SBN -->|SPIN_BUTTON_STATE_CHANGE| DisplayBranch{Visual Renderer}
    DisplayBranch --> Spine[SlotButtonSpine: Skeleton animations]
    DisplayBranch --> Sprite[SlotButtonSprite: SpriteFrame texture swaps]
    
    SBN -->|NORMAL_SPIN_CLICKED| GL[GameLogic / GameModeDirector]
    SBN -->|START_AUTO_SPIN| GL
    SBN -->|STOP_BUTTON_NORMAL_CLICKED| GL
```

---

## 2. Comprehensive Class Anatomy

1. **`SlotButtonModule` (Base Component)**:
   - Manages generic registration with Director (`GameUIEvents.SPIN_BUTTON.SET_UP_BUTTON`), global keyboard Spacebar routing (`cc.systemEvent.on(KEY_UP)`), and input blocking via `UIManagerModule.checkDisplayPopup()`.
2. **`SlotButtonNormal` (Base Game Spin Button)**:
   - Handles base game spins, $0.7\text{s}$ hold-to-auto-spin countdown (`holdAction`), sound effects (`sfxSpinId`), text sprite swaps (`textHoldToAuto` $\leftrightarrow$ `textPressToStop`), mode transition locking (`_isSwitchingMode`), and promotional campaign overrides (`hasPromotion`).
3. **`SlotButtonFree` (Free Spins Button)**:
   - Dedicated component for Free Spins mode; dispatches `FREE_SPIN_CLICKED` on touch start and sets auto-spin flags.
4. **`SlotButtonLightning` (Lightning / Turbo Mode Button)**:
   - Dedicated component for high-speed turbo modes; dispatches `LIGHTNING_SPIN_CLICKED`.
5. **`SlotButtonSpine` (Skeleton Animation View Component)**:
   - Listens to `SPIN_BUTTON_STATE_CHANGE` and plays Spine tracks: `animIdle` ("Spin"), `animStop` ("Stop"), `animHover` ("Hover"), `animSpinToStop` ("Spin_To_Stop"). Handles `isResume` reconnect logic.
6. **`SlotButtonSprite` (2D Texture View Component)**:
   - Alternative lightweight 2D renderer that swaps `cc.SpriteFrame` textures for `normal`, `pressed`, `hover`, `disabled`, `stopNormal`, `stopHover`, and `stopPress`.
