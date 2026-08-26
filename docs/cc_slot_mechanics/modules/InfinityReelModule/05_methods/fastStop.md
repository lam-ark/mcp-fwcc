---
id: "cc_slot_mechanics:InfinityReelModule:methods:fastStop"
title: "InfinityReelModule.fastStop Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["InfinityReelModule", "infinity_reel_module", "cc_slot_mechanics", "methods", "fastStop"]
---

# 📖 `InfinityReelModule.fastStop()`

---

## 1. Method Signature & Overview

```typescript
public fastStop(): void
```

- **Declaring Class**: `InfinityReelModule` (`assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityReelModule.ts`)
- **Source Code Location**: Lines 34 to 38
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	fastStop(): void {
		this.stopCallback && this.unschedule(this.stopCallback);
		this.reelManager.state = ReelSpinState.SHOWING_RESULT;
		this.reelManager.speed = this.reelManager.speed / this.config.FAST_SPIN_RATE;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **34** | `fastStop(): void {` | Method entry signature declaring `fastStop()` with return type `void`. |
| **35** | `this.stopCallback && this.unschedule(this.stopCallback);` | Applies operational logic and state mutation. |
| **36** | `this.reelManager.state = ReelSpinState.SHOWING_RESULT;` | Applies operational logic and state mutation. |
| **37** | `this.reelManager.speed = this.reelManager.speed / this.config.FAST_SPIN_RATE;` | Applies operational logic and state mutation. |
| **38** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as InfinityReelModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke fastStop()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
