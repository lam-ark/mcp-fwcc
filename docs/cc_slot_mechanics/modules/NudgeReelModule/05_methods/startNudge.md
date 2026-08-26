---
id: "cc_slot_mechanics:NudgeReelModule:methods:startNudge"
title: "NudgeReelModule.startNudge Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "startNudge"]
---

# 📖 `NudgeReelModule.startNudge()`

---

## 1. Method Signature & Overview

```typescript
public startNudge(): void
```

- **Declaring Class**: `NudgeReelModule` (`assets/cc-common/cc-slot-mechanics/NudgeReel/scripts/NudgeReelModule.ts`)
- **Source Code Location**: Lines 47 to 52
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	protected startNudge(): void {
		//add all symbols before nudging
		this.addNudgeSymbols();
        
		this.nudgeSpinning();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **47** | `protected startNudge(): void {` | Method entry signature declaring `startNudge()` with return type `void`. |
| **48** | `//add all symbols before nudging` | Applies operational logic and state mutation. |
| **49** | `this.addNudgeSymbols();` | Applies operational logic and state mutation. |
| **50** | `` | Applies operational logic and state mutation. |
| **51** | `this.nudgeSpinning();` | Applies operational logic and state mutation. |
| **52** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as NudgeReelModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke startNudge()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
