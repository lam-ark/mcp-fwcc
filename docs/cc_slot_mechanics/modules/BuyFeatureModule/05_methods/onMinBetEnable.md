---
id: "cc_slot_mechanics:BuyFeatureModule:methods:onMinBetEnable"
title: "BuyFeatureModule.onMinBetEnable Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "methods", "onMinBetEnable"]
---

# 📖 `BuyFeatureModule.onMinBetEnable()`

---

## 1. Method Signature & Overview

```typescript
public onMinBetEnable(minBetEnable: boolean): void
```

- **Declaring Class**: `BuyFeatureModule` (`assets/cc-common/cc-slot-mechanics/BuyFeature/scripts/BuyFeatureModule.ts`)
- **Source Code Location**: Lines 95 to 97
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onMinBetEnable(minBetEnable: boolean): void {
		this.btnDecreaseBet.interactable = minBetEnable;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **95** | `onMinBetEnable(minBetEnable: boolean): void {` | Method entry signature declaring `onMinBetEnable(minBetEnable: boolean)` with return type `void`. |
| **96** | `this.btnDecreaseBet.interactable = minBetEnable;` | Applies operational logic and state mutation. |
| **97** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as BuyFeatureModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onMinBetEnable(minBetEnable: boolean)
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
