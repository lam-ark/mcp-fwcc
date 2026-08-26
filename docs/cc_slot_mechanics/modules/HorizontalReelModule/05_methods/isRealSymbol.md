---
id: "cc_slot_mechanics:HorizontalReelModule:methods:isRealSymbol"
title: "HorizontalReelModule.isRealSymbol Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "methods", "isRealSymbol"]
---

# 📖 `HorizontalReelModule.isRealSymbol()`

---

## 1. Method Signature & Overview

```typescript
public isRealSymbol(index: number): boolean
```

- **Declaring Class**: `HorizontalReelModule` (`assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalReelModule.ts`)
- **Source Code Location**: Lines 12 to 14
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	protected isRealSymbol(index: number): boolean {
		return index >= this.config.BUFFER_LEFT && index < this.reelManager.totalSymbol - this.config.BUFFER_RIGHT;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **12** | `protected isRealSymbol(index: number): boolean {` | Method entry signature declaring `isRealSymbol(index: number)` with return type `boolean`. |
| **13** | `return index >= this.config.BUFFER_LEFT && index < this.reelManager.totalSymbol - this.config.BUFFER_RIGHT;` | Returns computed value / promise to caller. |
| **14** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as HorizontalReelModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke isRealSymbol(index: number)
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return boolean
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
