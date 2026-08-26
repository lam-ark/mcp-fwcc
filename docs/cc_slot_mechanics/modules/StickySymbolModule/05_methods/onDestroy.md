---
id: "cc_slot_mechanics:StickySymbolModule:methods:onDestroy"
title: "StickySymbolModule.onDestroy Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "methods", "onDestroy"]
---

# 📖 `StickySymbolModule.onDestroy()`

---

## 1. Method Signature & Overview

```typescript
public onDestroy(): void
```

- **Declaring Class**: `StickySymbolModule` (`assets/cc-common/cc-slot-mechanics/StickySymbol/scripts/StickySymbolModule.ts`)
- **Source Code Location**: Lines 109 to 113
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onDestroy(): void {
		if (this.moduleEvent) {
			this.moduleEvent.targetOff(this);
		}
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **109** | `onDestroy(): void {` | Method entry signature declaring `onDestroy()` with return type `void`. |
| **110** | `if (this.moduleEvent) {` | Conditional branch evaluation guarding edge cases or prerequisites. |
| **111** | `this.moduleEvent.targetOff(this);` | Applies operational logic and state mutation. |
| **112** | `}` | Method exit boundary, closing block scope. |
| **113** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as StickySymbolModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onDestroy()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
