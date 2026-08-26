---
id: "cc_slot_mechanics:HorizontalReelModule:methods:spawnSymbol"
title: "HorizontalReelModule.spawnSymbol Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "methods", "spawnSymbol"]
---

# 📖 `HorizontalReelModule.spawnSymbol()`

---

## 1. Method Signature & Overview

```typescript
public spawnSymbol(code: string, size: cc.Vec2): cc.Node
```

- **Declaring Class**: `HorizontalReelModule` (`assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalReelModule.ts`)
- **Source Code Location**: Lines 98 to 107
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	protected spawnSymbol(code: string, size: cc.Vec2): cc.Node {
		const offsetX = size.x > this.DEFAULT_SIZE.x ? (size.x / 2 - 0.5) * this.SYMBOL_WIDTH : 0;
		const offsetY = size.y > this.DEFAULT_SIZE.y ? (size.y / 2 - 0.5) * this.SYMBOL_HEIGHT : 0;
		const rightX = Math.abs(this.node.position.x) + this.reelManager.startX;
		const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
		symbol.setPosition(rightX + offsetX, offsetY);

		this.listSymbols.push(symbol);
		return symbol;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **98** | `protected spawnSymbol(code: string, size: cc.Vec2): cc.Node {` | Method entry signature declaring `spawnSymbol(code: string, size: cc.Vec2)` with return type `cc.Node`. |
| **99** | `const offsetX = size.x > this.DEFAULT_SIZE.x ? (size.x / 2 - 0.5) * this.SYMBOL_WIDTH : 0;` | Local variable initialization allocating `offsetX`. |
| **100** | `const offsetY = size.y > this.DEFAULT_SIZE.y ? (size.y / 2 - 0.5) * this.SYMBOL_HEIGHT : 0;` | Local variable initialization allocating `offsetY`. |
| **101** | `const rightX = Math.abs(this.node.position.x) + this.reelManager.startX;` | Local variable initialization allocating `rightX`. |
| **102** | `const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);` | Local variable initialization allocating `symbol`. |
| **103** | `symbol.setPosition(rightX + offsetX, offsetY);` | Applies operational logic and state mutation. |
| **104** | `` | Applies operational logic and state mutation. |
| **105** | `this.listSymbols.push(symbol);` | Applies operational logic and state mutation. |
| **106** | `return symbol;` | Returns computed value / promise to caller. |
| **107** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as HorizontalReelModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke spawnSymbol(code: string, size: cc.Vec2)
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return cc.Node
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
