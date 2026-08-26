---
id: "cc_slot_mechanics:NudgeReelModule:methods:resetNudgeReel"
title: "NudgeReelModule.resetNudgeReel Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "resetNudgeReel"]
---

# 📖 `NudgeReelModule.resetNudgeReel()`

---

## 1. Method Signature & Overview

```typescript
public resetNudgeReel(): void
```

- **Declaring Class**: `NudgeReelModule` (`assets/cc-common/cc-slot-mechanics/NudgeReel/scripts/NudgeReelModule.ts`)
- **Source Code Location**: Lines 188 to 196
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	protected resetNudgeReel(): void {
		const offset = Math.abs(this.node.position.y);
		this.listSymbols.forEach((s) => s.setPosition(s.position.x, s.position.y - this._direction * offset));
		this.listSymbols.sort((a, b) => b.position.y - a.position.y);
		this.node.setPosition(this.originalPosition);

		this._nudgeStep = 0;
		this._totalNudgeStep = 0;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **188** | `protected resetNudgeReel(): void {` | Method entry signature declaring `resetNudgeReel()` with return type `void`. |
| **189** | `const offset = Math.abs(this.node.position.y);` | Local variable initialization allocating `offset`. |
| **190** | `this.listSymbols.forEach((s) => s.setPosition(s.position.x, s.position.y - this._direction * offset));` | Applies operational logic and state mutation. |
| **191** | `this.listSymbols.sort((a, b) => b.position.y - a.position.y);` | Applies operational logic and state mutation. |
| **192** | `this.node.setPosition(this.originalPosition);` | Applies operational logic and state mutation. |
| **193** | `` | Applies operational logic and state mutation. |
| **194** | `this._nudgeStep = 0;` | Applies operational logic and state mutation. |
| **195** | `this._totalNudgeStep = 0;` | Applies operational logic and state mutation. |
| **196** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as NudgeReelModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke resetNudgeReel()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
