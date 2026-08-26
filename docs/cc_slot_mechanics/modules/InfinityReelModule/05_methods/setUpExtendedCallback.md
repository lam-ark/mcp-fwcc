---
id: "cc_slot_mechanics:InfinityReelModule:methods:setUpExtendedCallback"
title: "InfinityReelModule.setUpExtendedCallback Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["InfinityReelModule", "infinity_reel_module", "cc_slot_mechanics", "methods", "setUpExtendedCallback"]
---

# 📖 `InfinityReelModule.setUpExtendedCallback()`

---

## 1. Method Signature & Overview

```typescript
public setUpExtendedCallback(): void
```

- **Declaring Class**: `InfinityReelModule` (`assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityReelModule.ts`)
- **Source Code Location**: Lines 27 to 32
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	protected setUpExtendedCallback(): void {
		this.stopCallback = () => {
			this.reelManager.step = this.currentMode.stepStop;
		};
		this.scheduleOnce(this.stopCallback, this.currentMode.delayStop);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **27** | `protected setUpExtendedCallback(): void {` | Method entry signature declaring `setUpExtendedCallback()` with return type `void`. |
| **28** | `this.stopCallback = () => {` | Applies operational logic and state mutation. |
| **29** | `this.reelManager.step = this.currentMode.stepStop;` | Applies operational logic and state mutation. |
| **30** | `};` | Applies operational logic and state mutation. |
| **31** | `this.scheduleOnce(this.stopCallback, this.currentMode.delayStop);` | Schedules delayed execution callback using Cocos Creator timer. |
| **32** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as InfinityReelModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke setUpExtendedCallback()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
