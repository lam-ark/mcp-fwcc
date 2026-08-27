---
id: "game-implement:9666:multiplier:wild_lifecycle"
title: "Red Cliff (g9666) Multiplier Wild Lifecycle & State Machine"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SlotSymbolModule9666", "multiplier_wild", "lifecycle", "state_machine"]
---

# 🌟 Red Cliff (g9666) Multiplier Wild Lifecycle & State Machine

---

## 1. Overview & Multiplier Wild (K1) Data Format

In Red Cliff (`g9666`), Wild symbols have multiple variations. The **Multiplier Wild** is identified by the prefix `K1` followed by its multiplier value provided by the backend:
- **Symbol Code Format**: `K1-<multiplier>` (e.g., `K1-2`, `K1-3`, `K1-5`, `K1-8`, `K1-10`, `K1-20`).
- **Code Parsing**:
  - `prefix`: `"K1"` $\rightarrow$ Identifies this as a Multiplier Wild.
  - `multiplier`: Integer value after `"-"` (parsed via `parseInt(code.split("-")[1], 10)`).

```mermaid
graph TD
    A[Server Matrix Response: 'K1-8'] --> B[SlotSymbolModule9666.initExtend / changeToSymbol]
    B --> C{SymbolCode startsWith 'K1'? }
    C -- Yes --> D[applySymbolSkin: 'default']
    C -- Yes --> E[extractMultiplier -> multiplier = 8]
    C -- Yes --> F[updateMultiplierLabel: lbMultiplier.string = 'x8', active = true]
    C -- Yes --> G[updateZIndex: zIndex = 5]
    C -- No --> H[lbMultiplier.active = false, string = '']
```

---

## 2. Multiplier Wild State Machine

```mermaid
stateDiagram-v2
    [*] --> Landed: Symbol Code 'K1-x' appears on reel
    Landed --> BadgeRendered: lbMultiplier.string = 'xx' (active = true)
    
    state Has_Winning_Combine {
        BadgeRendered --> WinParticipated: Part of winning payway/payline
        WinParticipated --> FlyCollecting: Emit COLLECT_WILD_MULTIPLIER
        FlyCollecting --> BadgeHidden: hideMultiplierLabel() & playCollectMultiplierTransition()
        BadgeHidden --> CascadeExploded: Explodes and cascades away in respin
    }

    state No_Winning_Combine {
        BadgeRendered --> Unexploded: NOT part of winning payway
        Unexploded --> NextSpinReset: New spin / cascade starts (retained on board)
        NextSpinReset --> BadgeRendered: hasCollectedMultiplier = false -> 'xx' restored
    }
```

---

## 3. Symbol States & Lifecycle Handlers (`SlotSymbolModule9666.ts`)

| State | Method | UI & Logic Behavior |
| :--- | :--- | :--- |
| **Initialization / Recycle** | `initExtend()` / `changeToSymbol()` | Resets `hasCollectedMultiplier = false`, calls `updateMultiplierLabel()`. If code is `K1-x`, displays `"x" + multiplier`. |
| **Appear Animation** | `playAnimationAppear()` | Plays Spine `appear` animation, followed by queued loop on `idle_multi` if symbol is `K1`. |
| **Idle Animation** | `playAnimationIdle()` | If Multiplier Wild $\rightarrow$ plays Spine track 0 loop `idle_multi`. |
| **Win Animation** | `playAnimationWin()` | Plays Spine `coming_win_appear` $\rightarrow$ `coming_win_idle`. |
| **Collect Multiplier** | `hideMultiplierLabel()` | Sets `multiplierLabel.node.active = false`, clears `string = ''`, sets flag `hasCollectedMultiplier = true`. |
| **Post-Collection Transition** | `playCollectMultiplierTransition()` | Plays Spine `transition_multi` (non-loop) $\rightarrow$ transitions smoothly to default Spine `idle`. |
| **Disappear (Explode)** | `playAnimationDisappear()` | Scales animation time based on `this.speed` (Turbo Mode x2/x3) and clears track 1. |
