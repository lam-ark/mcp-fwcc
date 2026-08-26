---
id: "cc_slot_mechanics:InstantCashModule:methods:showInstantCash"
title: "InstantCashModule.showInstantCash Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["InstantCashModule", "instant_cash_module", "cc_slot_mechanics", "methods", "showInstantCash"]
---

# 📖 `InstantCashModule.showInstantCash()`

---

## 1. Method Signature & Overview

```typescript
public showInstantCash(): void
```

- **Declaring Class**: `InstantCashModule` (`assets/cc-common/cc-slot-mechanics/InstantCash/scripts/InstantCashModule.ts`)
- **Source Code Location**: Lines 21 to 26
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	showInstantCash(): void {
		const multiplier = this._instantCashData.getInstantCashMultiplier();
		const totalBet = this._betData ? this._betData.totalBet : 0;

		this.lbInstantCash.string = `${multiplier * totalBet}`;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **21** | `showInstantCash(): void {` | Method entry signature declaring `showInstantCash()` with return type `void`. |
| **22** | `const multiplier = this._instantCashData.getInstantCashMultiplier();` | Local variable initialization allocating `multiplier`. |
| **23** | `const totalBet = this._betData ? this._betData.totalBet : 0;` | Local variable initialization allocating `totalBet`. |
| **24** | `` | Applies operational logic and state mutation. |
| **25** | `this.lbInstantCash.string = `${multiplier * totalBet}`;` | Updates rendered text on label component. |
| **26** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as InstantCashModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke showInstantCash()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
