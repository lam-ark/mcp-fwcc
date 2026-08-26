---
id: "cc_slot_mechanics:NudgeReelModule:methods:changeBufferSymbol"
title: "NudgeReelModule.changeBufferSymbol Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "changeBufferSymbol"]
---

# 📖 `NudgeReelModule.changeBufferSymbol()`

---

## 1. Method Signature & Overview

```typescript
public changeBufferSymbol(index: number): cc.Node
```

- **Declaring Class**: `NudgeReelModule` (`assets/cc-common/cc-slot-mechanics/NudgeReel/scripts/NudgeReelModule.ts`)
- **Source Code Location**: Lines 152 to 156
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	protected changeBufferSymbol(index: number): cc.Node {
		const symbol = this.listSymbols[index];
		SlotSymbolModule.getModuleComponent(symbol).changeToSymbol(SYMBOL_NUDGE);
		return symbol;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **152** | `protected changeBufferSymbol(index: number): cc.Node {` | Method entry signature declaring `changeBufferSymbol(index: number)` with return type `cc.Node`. |
| **153** | `const symbol = this.listSymbols[index];` | Local variable initialization allocating `symbol`. |
| **154** | `SlotSymbolModule.getModuleComponent(symbol).changeToSymbol(SYMBOL_NUDGE);` | Applies operational logic and state mutation. |
| **155** | `return symbol;` | Returns computed value / promise to caller. |
| **156** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as NudgeReelModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke changeBufferSymbol(index: number)
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return cc.Node
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
