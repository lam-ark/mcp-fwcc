# PaylineInfoModule: Overview & Architecture

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/PaylineInfo/PaylineInfoModule.ts`  
> **Inheritance**: `PaylineInfoModule` ➔ `SlotBaseModule` ➔ `cc.Component`  
> **Online Reference**: [PaylineInfo on Enotion Platform](https://slot-platform.enostd.gay/api-references/slot-module/gui/payline-info.html)

---

## 1. Purpose & Architectural Role
`PaylineInfoModule` controls the **bottom win presentation bar**, responsible for:
* Displaying individual winning lines with symbol icons and line payouts.
* Presenting total accumulated round wins with rolling `MoneyTween` animations.
* Synchronizing win impact animations with `SHOW_TOTAL_WIN_EFFECT` (Level 1, 2, 3 frames).

---

## 2. Presentation Flow

```mermaid
sequenceDiagram
    participant Dir as SlotDirector
    participant Pay as PaylineInfoModule
    participant Tween as MoneyTween
    participant UI as UIManager / WinEffect

    Dir->>Pay: SHOW_PAYLINE_WIN_AMOUNT
    Pay->>Pay: Calculate AllWays / Line Win
    Pay->>Tween: Run number animation on lbRight
    Tween-->>Pay: Animation Complete
    Pay->>UI: SHOW_TOTAL_WIN_EFFECT (Level 1/2/3)
    Pay-->>Dir: SHOW_RESULT_ENTRY
```
