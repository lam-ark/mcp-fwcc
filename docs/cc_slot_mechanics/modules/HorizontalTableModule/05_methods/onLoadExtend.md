---
id: "cc_slot_mechanics:HorizontalTableModule:methods:onLoadExtend"
title: "HorizontalTableModule.onLoadExtend Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["HorizontalTableModule", "horizontal_table_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `HorizontalTableModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
public onLoadExtend(): void
```

- **Declaring Class**: `HorizontalTableModule` (`assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalTableModule.ts`)
- **Source Code Location**: Lines 14 to 23
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onLoadExtend(): void {
		this.config = this.getComponent(HorizontalTableConfig);
		if (!this.config) {
			warn("Config not add to this node");
			return;
		}

		this.currentMode = this.config.MODES.NORMAL;
		this._slotTableData = this.getComponent(HorizontalTableData);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **14** | `onLoadExtend(): void {` | Method entry signature declaring `onLoadExtend()` with return type `void`. |
| **15** | `this.config = this.getComponent(HorizontalTableConfig);` | Queries attached component instance from scene graph node. |
| **16** | `if (!this.config) {` | Conditional branch evaluation guarding edge cases or prerequisites. |
| **17** | `warn("Config not add to this node");` | Applies operational logic and state mutation. |
| **18** | `return;` | Applies operational logic and state mutation. |
| **19** | `}` | Method exit boundary, closing block scope. |
| **20** | `` | Applies operational logic and state mutation. |
| **21** | `this.currentMode = this.config.MODES.NORMAL;` | Applies operational logic and state mutation. |
| **22** | `this._slotTableData = this.getComponent(HorizontalTableData);` | Queries attached component instance from scene graph node. |
| **23** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as HorizontalTableModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onLoadExtend()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
