# AutoSpinButton: Overview & Architecture

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/AutoSpin/AutoSpinButton.ts`  
> **Inheritance**: `AutoSpinButton` ➔ `SlotBaseModule` ➔ `cc.Component`  
> **Online Reference**: [AutoSpinButton on Enotion Platform](https://slot-platform.enostd.gay/api-references/slot-module/gui/auto-spin-panel.html)

---

## 1. Purpose & Architectural Role
`AutoSpinButton` is the GUI control component responsible for:
* Opening the Auto-Spin configuration popup dialog (`OPEN_AUTO_SPIN_PANEL`).
* Reactively listening to `UIManagerData.isUserInteractionEnabled` via the `eno.Observer` system to automatically enable or disable button interactability during active spin cycles and win animations.

---

## 2. Interaction & Observer Flow

```mermaid
sequenceDiagram
    participant User as Player
    participant Btn as AutoSpinButton
    participant Obs as eno.Observer
    participant Store as UIManagerData
    participant Logic as gameLogic

    Note over Btn,Store: 1. Initialization in onLoadExtend
    Btn->>Store: Get UIManagerData reference
    Btn->>Obs: watch("isUserInteractionEnabled")
    Store-->>Btn: Initial state (fireImmediately: true)

    Note over User,Btn: 2. Player Click Interaction
    User->>Btn: Click Button
    Btn->>Logic: emit(GameLogicUIEvents.OPEN_AUTO_SPIN_PANEL)

    Note over Store,Btn: 3. Reactive State Synchronization
    Store->>Btn: isUserInteractionEnabled changes (false during spin)
    Btn->>Btn: setEnableButton(false)
```
