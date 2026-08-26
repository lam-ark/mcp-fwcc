---
id: "cc_slot_mechanics:MultiplierReel:methods:onLoad"
title: "MultiplierReel.onLoad Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["MultiplierReel", "multiplier_reel", "cc_slot_mechanics", "methods", "onLoad"]
---

# 📖 `MultiplierReel.onLoad()`

---

## 1. Method Signature & Overview

```typescript
public onLoad(): void
```

- **Declaring Class**: `MultiplierReel` (`assets/cc-common/cc-slot-mechanics/MultiplierReel/scripts/MultiplierReel.ts`)
- **Source Code Location**: Lines 7 to 10
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onLoad(): void {
		this.node.on('SHOW_MULTIPLIER', this.showMultiplier, this);
		this.node.on('RESET_MULTIPLIER', this.resetMultiplier, this);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **7** | `onLoad(): void {` | Method entry signature declaring `onLoad()` with return type `void`. |
| **8** | `this.node.on('SHOW_MULTIPLIER', this.showMultiplier, this);` | Applies operational logic and state mutation. |
| **9** | `this.node.on('RESET_MULTIPLIER', this.resetMultiplier, this);` | Applies operational logic and state mutation. |
| **10** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as MultiplierReel
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onLoad()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
