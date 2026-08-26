---
id: "cc_slot_mechanics:InfinityTableTest:methods:fastStop"
title: "InfinityTableTest.fastStop Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["InfinityTableTest", "infinity_table_test", "cc_slot_mechanics", "methods", "fastStop"]
---

# 📖 `InfinityTableTest.fastStop()`

---

## 1. Method Signature & Overview

```typescript
public fastStop(): void
```

- **Declaring Class**: `InfinityTableTest` (`assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityTableTest.ts`)
- **Source Code Location**: Lines 59 to 61
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	fastStop(): void {
		this.table.fastStop();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **59** | `fastStop(): void {` | Method entry signature declaring `fastStop()` with return type `void`. |
| **60** | `this.table.fastStop();` | Applies operational logic and state mutation. |
| **61** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as InfinityTableTest
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
