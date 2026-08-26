---
id: "cc_slot_mechanics:GigabloxReelModule:methods:setUpStopCallback"
title: "GigabloxReelModule.setUpStopCallback Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["GigabloxReelModule", "gigablox_reel_module", "cc_slot_mechanics", "methods", "setUpStopCallback"]
---

# 📖 `GigabloxReelModule.setUpStopCallback()`

---

## 1. Method Signature & Overview

```typescript
public setUpStopCallback(): void
```

- **Declaring Class**: `GigabloxReelModule` (`assets/cc-common/cc-slot-mechanics/Gigablox/scripts/GigabloxReelModule.ts`)
- **Source Code Location**: Lines 101 to 105
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	protected setUpStopCallback(): void {
		const cb = (): void => this.setStepToStop();
		this.stopCallback = cb;
		this.scheduleOnce(cb, this.gigabloxDelay * this.currentMode.delayStop);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **101** | `protected setUpStopCallback(): void {` | Method entry signature declaring `setUpStopCallback()` with return type `void`. |
| **102** | `const cb = (): void => this.setStepToStop();` | Local variable initialization allocating `cb`. |
| **103** | `this.stopCallback = cb;` | Applies operational logic and state mutation. |
| **104** | `this.scheduleOnce(cb, this.gigabloxDelay * this.currentMode.delayStop);` | Schedules delayed execution callback using Cocos Creator timer. |
| **105** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as GigabloxReelModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke setUpStopCallback()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
