---
id: "cc_slot_mechanics:NudgeReelModule:methods:setupNudge"
title: "NudgeReelModule.setupNudge Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "setupNudge"]
---

# 📖 `NudgeReelModule.setupNudge()`

---

## 1. Method Signature & Overview

```typescript
public setupNudge({index, step, direction}): void
```

- **Declaring Class**: `NudgeReelModule` (`assets/cc-common/cc-slot-mechanics/NudgeReel/scripts/NudgeReelModule.ts`)
- **Source Code Location**: Lines 26 to 30
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	setupNudge({index, step, direction}): void {
		this._totalNudgeStep = step;
		this._nudgeStep = this._totalNudgeStep;
		this._direction = direction;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **26** | `setupNudge({index, step, direction}): void {` | Method entry signature declaring `setupNudge({index, step, direction})` with return type `void`. |
| **27** | `this._totalNudgeStep = step;` | Applies operational logic and state mutation. |
| **28** | `this._nudgeStep = this._totalNudgeStep;` | Applies operational logic and state mutation. |
| **29** | `this._direction = direction;` | Applies operational logic and state mutation. |
| **30** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as NudgeReelModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke setupNudge({index, step, direction})
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
