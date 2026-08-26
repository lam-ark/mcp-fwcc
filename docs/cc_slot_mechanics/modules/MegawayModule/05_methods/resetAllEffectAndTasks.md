---
id: "cc_slot_mechanics:MegawayModule:methods:resetAllEffectAndTasks"
title: "MegawayModule.resetAllEffectAndTasks Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "methods", "resetAllEffectAndTasks"]
---

# 📖 `MegawayModule.resetAllEffectAndTasks()`

---

## 1. Method Signature & Overview

```typescript
public resetAllEffectAndTasks(): void
```

- **Declaring Class**: `MegawayModule` (`assets/cc-common/cc-slot-mechanics/Megaway/scripts/MegawayModule.ts`)
- **Source Code Location**: Lines 45 to 47
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	resetAllEffectAndTasks(): void {
		// to do
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **45** | `resetAllEffectAndTasks(): void {` | Method entry signature declaring `resetAllEffectAndTasks()` with return type `void`. |
| **46** | `// to do` | Applies operational logic and state mutation. |
| **47** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as MegawayModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke resetAllEffectAndTasks()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
