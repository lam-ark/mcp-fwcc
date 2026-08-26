---
id: "cc_slot_mechanics:BuyFeatureModule:methods:onUpdateTotalBet"
title: "BuyFeatureModule.onUpdateTotalBet Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "onUpdateTotalBet"]
---

# 📖 `BuyFeatureModule.onUpdateTotalBet()`

---

## 1. Method Signature & Overview

```typescript
public onUpdateTotalBet(betValue: number): void
```

- **Declaring Class**: `BuyFeatureModule` (`assets/cc-common/cc-slot-mechanics/BuyFeature/scripts/BuyFeatureModule.ts`)
- **Source Code Location**: Lines 49 to 52
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onUpdateTotalBet(betValue: number): void {
		this.lbBetValue.node.emit("ON_UPDATE_VALUE", betValue);
		this.lbTotalBet.node.emit("ON_UPDATE_VALUE", this.getTotalExtraBet());
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **49** | `onUpdateTotalBet(betValue: number): void {` | Method entry signature declaring `onUpdateTotalBet(betValue: number)` with return type `void`. |
| **50** | `this.lbBetValue.node.emit("ON_UPDATE_VALUE", betValue);` | Dispatches event to subscribers on the event bus. |
| **51** | `this.lbTotalBet.node.emit("ON_UPDATE_VALUE", this.getTotalExtraBet());` | Dispatches event to subscribers on the event bus. |
| **52** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as BuyFeatureModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onUpdateTotalBet(betValue: number)
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
