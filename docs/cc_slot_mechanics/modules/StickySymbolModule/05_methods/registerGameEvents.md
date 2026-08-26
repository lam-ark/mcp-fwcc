---
id: "cc_slot_mechanics:StickySymbolModule:methods:registerGameEvents"
title: "StickySymbolModule.registerGameEvents Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "methods", "registerGameEvents"]
---

# 📖 `StickySymbolModule.registerGameEvents()`

---

## 1. Method Signature & Overview

```typescript
public registerGameEvents(): void
```

- **Declaring Class**: `StickySymbolModule` (`assets/cc-common/cc-slot-mechanics/StickySymbol/scripts/StickySymbolModule.ts`)
- **Source Code Location**: Lines 28 to 34
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	registerGameEvents(): void {
		if (this.moduleEvent) {
			this.moduleEvent.on('REEL_STOPPED', this.onReelStopped, this);
			this.moduleEvent.on('BEFORE_RESET_TABLE', this.setupStickySymbols, this);
			this.moduleEvent.on('TABLE_START_RESPIN', this.setupStickySymbols, this);
		}
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **28** | `registerGameEvents(): void {` | Method entry signature declaring `registerGameEvents()` with return type `void`. |
| **29** | `if (this.moduleEvent) {` | Conditional branch evaluation guarding edge cases or prerequisites. |
| **30** | `this.moduleEvent.on('REEL_STOPPED', this.onReelStopped, this);` | Applies operational logic and state mutation. |
| **31** | `this.moduleEvent.on('BEFORE_RESET_TABLE', this.setupStickySymbols, this);` | Applies operational logic and state mutation. |
| **32** | `this.moduleEvent.on('TABLE_START_RESPIN', this.setupStickySymbols, this);` | Applies operational logic and state mutation. |
| **33** | `}` | Method exit boundary, closing block scope. |
| **34** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as StickySymbolModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke registerGameEvents()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
