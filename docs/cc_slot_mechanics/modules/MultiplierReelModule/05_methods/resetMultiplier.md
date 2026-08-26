---
id: "cc_slot_mechanics:MultiplierReelModule:methods:resetMultiplier"
title: "MultiplierReelModule.resetMultiplier Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["MultiplierReelModule", "multiplier_reel_module", "cc_slot_mechanics", "methods", "resetMultiplier"]
---

# 📖 `MultiplierReelModule.resetMultiplier()`

---

## 1. Method Signature & Overview

```typescript
public resetMultiplier(): void
```

- **Declaring Class**: `MultiplierReelModule` (`assets/cc-common/cc-slot-mechanics/MultiplierReel/scripts/MultiplierReelModule.ts`)
- **Source Code Location**: Lines 37 to 41
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	resetMultiplier(): void {
		this._multiplierReels.forEach(reel => {
			reel.emit("RESET_MULTIPLIER");
		});
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **37** | `resetMultiplier(): void {` | Method entry signature declaring `resetMultiplier()` with return type `void`. |
| **38** | `this._multiplierReels.forEach(reel => {` | Applies operational logic and state mutation. |
| **39** | `reel.emit("RESET_MULTIPLIER");` | Dispatches event to subscribers on the event bus. |
| **40** | `});` | Applies operational logic and state mutation. |
| **41** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as MultiplierReelModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke resetMultiplier()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
