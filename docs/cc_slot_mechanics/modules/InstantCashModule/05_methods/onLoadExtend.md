---
id: "cc_slot_mechanics:InstantCashModule:methods:onLoadExtend"
title: "InstantCashModule.onLoadExtend Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["InstantCashModule", "instant_cash_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `InstantCashModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
public onLoadExtend(): void
```

- **Declaring Class**: `InstantCashModule` (`assets/cc-common/cc-slot-mechanics/InstantCash/scripts/InstantCashModule.ts`)
- **Source Code Location**: Lines 14 to 19
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onLoadExtend(): void {
		this._instantCashData = this.getComponent(InstantCashData);
		this._betData = this.gameLogic && this.gameLogic.getDataModel() && this.gameLogic.getDataModel().BetData;
		this.moduleEvent.on('SHOW_INSTANT_CASH', this.showInstantCash, this);
		this.moduleEvent.on('RESET_INSTANT_CASH', this.resetInstantCash, this);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **14** | `onLoadExtend(): void {` | Method entry signature declaring `onLoadExtend()` with return type `void`. |
| **15** | `this._instantCashData = this.getComponent(InstantCashData);` | Queries attached component instance from scene graph node. |
| **16** | `this._betData = this.gameLogic && this.gameLogic.getDataModel() && this.gameLogic.getDataModel().BetData;` | Applies operational logic and state mutation. |
| **17** | `this.moduleEvent.on('SHOW_INSTANT_CASH', this.showInstantCash, this);` | Applies operational logic and state mutation. |
| **18** | `this.moduleEvent.on('RESET_INSTANT_CASH', this.resetInstantCash, this);` | Applies operational logic and state mutation. |
| **19** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as InstantCashModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onLoadExtend()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
