---
id: "cc_slot_mechanics:BuyFeatureModule:methods:onBtnDecreaseBet"
title: "BuyFeatureModule.onBtnDecreaseBet Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "onBtnDecreaseBet"]
---

# 📖 `BuyFeatureModule.onBtnDecreaseBet()`

---

## 1. Method Signature & Overview

```typescript
public onBtnDecreaseBet(): void
```

- **Declaring Class**: `BuyFeatureModule` (`assets/cc-common/cc-slot-mechanics/BuyFeature/scripts/BuyFeatureModule.ts`)
- **Source Code Location**: Lines 90 to 93
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onBtnDecreaseBet(): void {
		this.soundPlayer && this.soundPlayer.playSfx(this.sfxDecreaseBetId);
		this.gameLogic.emit(GameLogicUIEvents.DECREASE_BET);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **90** | `onBtnDecreaseBet(): void {` | Method entry signature declaring `onBtnDecreaseBet()` with return type `void`. |
| **91** | `this.soundPlayer && this.soundPlayer.playSfx(this.sfxDecreaseBetId);` | Applies operational logic and state mutation. |
| **92** | `this.gameLogic.emit(GameLogicUIEvents.DECREASE_BET);` | Dispatches event to subscribers on the event bus. |
| **93** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as BuyFeatureModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onBtnDecreaseBet()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
