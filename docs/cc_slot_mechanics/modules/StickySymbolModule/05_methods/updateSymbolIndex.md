---
id: "cc_slot_mechanics:StickySymbolModule:methods:updateSymbolIndex"
title: "StickySymbolModule.updateSymbolIndex Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "methods", "updateSymbolIndex"]
---

# 📖 `StickySymbolModule.updateSymbolIndex()`

---

## 1. Method Signature & Overview

```typescript
public updateSymbolIndex(symbol: cc.Node, index: number): void
```

- **Declaring Class**: `StickySymbolModule` (`assets/cc-common/cc-slot-mechanics/StickySymbol/scripts/StickySymbolModule.ts`)
- **Source Code Location**: Lines 94 to 99
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	updateSymbolIndex(symbol: cc.Node, index: number): void {
		const symbolModule: SlotSymbolModule = SlotSymbolModule.getModuleComponent(symbol);
		if (symbolModule) {
			symbolModule.setIndex(index);
		}
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **94** | `updateSymbolIndex(symbol: cc.Node, index: number): void {` | Method entry signature declaring `updateSymbolIndex(symbol: cc.Node, index: number)` with return type `void`. |
| **95** | `const symbolModule: SlotSymbolModule = SlotSymbolModule.getModuleComponent(symbol);` | Local variable initialization allocating `symbolModule: SlotSymbolModule`. |
| **96** | `if (symbolModule) {` | Conditional branch evaluation guarding edge cases or prerequisites. |
| **97** | `symbolModule.setIndex(index);` | Applies operational logic and state mutation. |
| **98** | `}` | Method exit boundary, closing block scope. |
| **99** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as StickySymbolModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke updateSymbolIndex(symbol: cc.Node, index: number)
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
