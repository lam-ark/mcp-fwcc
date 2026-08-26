---
id: "cc_slot_mechanics:BuyFeatureModule:methods:onBtnIncreaseBet"
title: "BuyFeatureModule.onBtnIncreaseBet Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "onBtnIncreaseBet"]
---

# 📖 `BuyFeatureModule.onBtnIncreaseBet()`

---

## 1. Method Signature & Overview

```typescript
public onBtnIncreaseBet(): void
```

- **Declaring Class**: `BuyFeatureModule` (`assets/cc-common/cc-slot-mechanics/BuyFeature/scripts/BuyFeatureModule.ts`)
- **Source Code Location**: Lines 85 to 88
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onBtnIncreaseBet(): void {
		this.soundPlayer && this.soundPlayer.playSfx(this.sfxIncreaseBetId);
		this.gameLogic.emit(GameLogicUIEvents.INCREASE_BET);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **85** | `onBtnIncreaseBet(): void {` | Method entry signature declaring `onBtnIncreaseBet()` with return type `void`. |
| **86** | `this.soundPlayer && this.soundPlayer.playSfx(this.sfxIncreaseBetId);` | Applies operational logic and state mutation. |
| **87** | `this.gameLogic.emit(GameLogicUIEvents.INCREASE_BET);` | Dispatches event to subscribers on the event bus. |
| **88** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as BuyFeatureModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onBtnIncreaseBet()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
