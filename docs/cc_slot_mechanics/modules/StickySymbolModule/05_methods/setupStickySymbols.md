---
id: "cc_slot_mechanics:StickySymbolModule:methods:setupStickySymbols"
title: "StickySymbolModule.setupStickySymbols Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "methods", "setupStickySymbols"]
---

# 📖 `StickySymbolModule.setupStickySymbols()`

---

## 1. Method Signature & Overview

```typescript
public setupStickySymbols(): void
```

- **Declaring Class**: `StickySymbolModule` (`assets/cc-common/cc-slot-mechanics/StickySymbol/scripts/StickySymbolModule.ts`)
- **Source Code Location**: Lines 36 to 42
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	setupStickySymbols(): void {
		if (this.data.isFinishSticky()) {
			this.clearStickySymbols();
		} else {
			this.showStickySymbols();
		}
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **36** | `setupStickySymbols(): void {` | Method entry signature declaring `setupStickySymbols()` with return type `void`. |
| **37** | `if (this.data.isFinishSticky()) {` | Conditional branch evaluation guarding edge cases or prerequisites. |
| **38** | `this.clearStickySymbols();` | Applies operational logic and state mutation. |
| **39** | `} else {` | Applies operational logic and state mutation. |
| **40** | `this.showStickySymbols();` | Applies operational logic and state mutation. |
| **41** | `}` | Method exit boundary, closing block scope. |
| **42** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as StickySymbolModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke setupStickySymbols()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
