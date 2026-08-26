---
id: "cc_slot_mechanics:InfinityReelModule:methods:runExtendedReelSpin"
title: "InfinityReelModule.runExtendedReelSpin Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["InfinityReelModule", "infinity_reel_module", "cc_slot_mechanics", "methods", "runExtendedReelSpin"]
---

# 📖 `InfinityReelModule.runExtendedReelSpin()`

---

## 1. Method Signature & Overview

```typescript
public runExtendedReelSpin(): void
```

- **Declaring Class**: `InfinityReelModule` (`assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityReelModule.ts`)
- **Source Code Location**: Lines 44 to 52
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	runExtendedReelSpin(): void {
		this.node.active = true;
		this.reelManager.speed = this.currentMode.speed;
		this.reelManager.changeState(ReelSpinState.START);

		this.reelStopCB = null;
		this.tween && this.tween.stop();
		this.spinAction();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **44** | `runExtendedReelSpin(): void {` | Method entry signature declaring `runExtendedReelSpin()` with return type `void`. |
| **45** | `this.node.active = true;` | Applies operational logic and state mutation. |
| **46** | `this.reelManager.speed = this.currentMode.speed;` | Applies operational logic and state mutation. |
| **47** | `this.reelManager.changeState(ReelSpinState.START);` | Applies operational logic and state mutation. |
| **48** | `` | Applies operational logic and state mutation. |
| **49** | `this.reelStopCB = null;` | Applies operational logic and state mutation. |
| **50** | `this.tween && this.tween.stop();` | Applies operational logic and state mutation. |
| **51** | `this.spinAction();` | Applies operational logic and state mutation. |
| **52** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as InfinityReelModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke runExtendedReelSpin()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
