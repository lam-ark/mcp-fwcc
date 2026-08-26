---
id: "cc_slot_mechanics:StickySymbolData:methods:cleanStickyIndexes"
title: "StickySymbolData.cleanStickyIndexes Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["StickySymbolData", "sticky_symbol_data", "cc_slot_mechanics", "methods", "cleanStickyIndexes"]
---

# 📖 `StickySymbolData.cleanStickyIndexes()`

---

## 1. Method Signature & Overview

```typescript
public cleanStickyIndexes(): void
```

- **Declaring Class**: `StickySymbolData` (`assets/cc-common/cc-slot-mechanics/StickySymbol/scripts/StickySymbolData.ts`)
- **Source Code Location**: Lines 36 to 38
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	cleanStickyIndexes(): void {
		this.stickyIndexes = [];
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **36** | `cleanStickyIndexes(): void {` | Method entry signature declaring `cleanStickyIndexes()` with return type `void`. |
| **37** | `this.stickyIndexes = [];` | Applies operational logic and state mutation. |
| **38** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as StickySymbolData
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke cleanStickyIndexes()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
