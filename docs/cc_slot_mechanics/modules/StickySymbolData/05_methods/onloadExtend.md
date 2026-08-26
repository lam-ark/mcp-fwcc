---
id: "cc_slot_mechanics:StickySymbolData:methods:onloadExtend"
title: "StickySymbolData.onloadExtend Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["StickySymbolData", "sticky_symbol_data", "cc_slot_mechanics", "methods", "onloadExtend"]
---

# 📖 `StickySymbolData.onloadExtend()`

---

## 1. Method Signature & Overview

```typescript
public onloadExtend(): void
```

- **Declaring Class**: `StickySymbolData` (`assets/cc-common/cc-slot-mechanics/StickySymbol/scripts/StickySymbolData.ts`)
- **Source Code Location**: Lines 29 to 34
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onloadExtend(): void {
		this.config = this.getComponent(StickySymbolConfig);
		if (this.customStickyProperty) {
			this.registeredKeys.push(this.customStickyProperty);
		}
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **29** | `onloadExtend(): void {` | Method entry signature declaring `onloadExtend()` with return type `void`. |
| **30** | `this.config = this.getComponent(StickySymbolConfig);` | Queries attached component instance from scene graph node. |
| **31** | `if (this.customStickyProperty) {` | Conditional branch evaluation guarding edge cases or prerequisites. |
| **32** | `this.registeredKeys.push(this.customStickyProperty);` | Applies operational logic and state mutation. |
| **33** | `}` | Method exit boundary, closing block scope. |
| **34** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as StickySymbolData
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onloadExtend()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
