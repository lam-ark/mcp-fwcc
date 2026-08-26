---
id: "cc_slot_mechanics:StickySymbolData:methods:getStickyIndexes"
title: "StickySymbolData.getStickyIndexes Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["StickySymbolData", "sticky_symbol_data", "cc_slot_mechanics", "methods", "getStickyIndexes"]
---

# 📖 `StickySymbolData.getStickyIndexes()`

---

## 1. Method Signature & Overview

```typescript
public getStickyIndexes(): number[]
```

- **Declaring Class**: `StickySymbolData` (`assets/cc-common/cc-slot-mechanics/StickySymbol/scripts/StickySymbolData.ts`)
- **Source Code Location**: Lines 57 to 62
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	getStickyIndexes(): number[] {
		if (this.customStickyProperty) {
			return this.getStickyDataFromProperty();
		}
		return this.getStickyDataFromMatrix();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **57** | `getStickyIndexes(): number[] {` | Method entry signature declaring `getStickyIndexes()` with return type `number[]`. |
| **58** | `if (this.customStickyProperty) {` | Conditional branch evaluation guarding edge cases or prerequisites. |
| **59** | `return this.getStickyDataFromProperty();` | Returns computed value / promise to caller. |
| **60** | `}` | Method exit boundary, closing block scope. |
| **61** | `return this.getStickyDataFromMatrix();` | Returns computed value / promise to caller. |
| **62** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as StickySymbolData
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke getStickyIndexes()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return number[]
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
