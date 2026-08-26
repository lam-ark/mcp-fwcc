---
id: "cc_slot_mechanics:MegawayModule:methods:onLoadExtend"
title: "MegawayModule.onLoadExtend Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `MegawayModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
public onLoadExtend(): void
```

- **Declaring Class**: `MegawayModule` (`assets/cc-common/cc-slot-mechanics/Megaway/scripts/MegawayModule.ts`)
- **Source Code Location**: Lines 16 to 21
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onLoadExtend(): void {
		this.moduleEvent.on('UPDATE_MEGAWAY', this.updateTotalMegaway, this);
		this.moduleEvent.on('REEL_STOPPED', this.onReelStopped, this);
		this.moduleEvent.on('RESET_MEGAWAY', this.reset, this);
		this._data = this.node.getComponent(MegawayData);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **16** | `onLoadExtend(): void {` | Method entry signature declaring `onLoadExtend()` with return type `void`. |
| **17** | `this.moduleEvent.on('UPDATE_MEGAWAY', this.updateTotalMegaway, this);` | Applies operational logic and state mutation. |
| **18** | `this.moduleEvent.on('REEL_STOPPED', this.onReelStopped, this);` | Applies operational logic and state mutation. |
| **19** | `this.moduleEvent.on('RESET_MEGAWAY', this.reset, this);` | Applies operational logic and state mutation. |
| **20** | `this._data = this.node.getComponent(MegawayData);` | Queries attached component instance from scene graph node. |
| **21** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as MegawayModule
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
