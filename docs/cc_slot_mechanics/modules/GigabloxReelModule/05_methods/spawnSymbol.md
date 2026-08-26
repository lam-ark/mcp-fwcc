---
id: "cc_slot_mechanics:GigabloxReelModule:methods:spawnSymbol"
title: "GigabloxReelModule.spawnSymbol Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["GigabloxReelModule", "gigablox_reel_module", "cc_slot_mechanics", "methods", "spawnSymbol"]
---

# 📖 `GigabloxReelModule.spawnSymbol()`

---

## 1. Method Signature & Overview

```typescript
public spawnSymbol(code: string, size: cc.Vec2, isGigaSymbol = false): cc.Node
```

- **Declaring Class**: `GigabloxReelModule` (`assets/cc-common/cc-slot-mechanics/Gigablox/scripts/GigabloxReelModule.ts`)
- **Source Code Location**: Lines 107 to 119
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	protected spawnSymbol(code: string, size: cc.Vec2, isGigaSymbol = false): cc.Node {
		const positionX = size.x > this.DEFAULT_SIZE.x ? (size.x / 2 - 0.5) * this.SYMBOL_WIDTH : 0;
		const positionY = this.calculatePositionY(size);
		const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
		symbol.setPosition(positionX, positionY);

		if (isGigaSymbol) {
			this.listGigaSymbols.push(symbol);
		} else {
			this.listSymbols.unshift(symbol);
		}
		return symbol;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **107** | `protected spawnSymbol(code: string, size: cc.Vec2, isGigaSymbol = false): cc.Node {` | Method entry signature declaring `spawnSymbol(code: string, size: cc.Vec2, isGigaSymbol = false)` with return type `cc.Node`. |
| **108** | `const positionX = size.x > this.DEFAULT_SIZE.x ? (size.x / 2 - 0.5) * this.SYMBOL_WIDTH : 0;` | Local variable initialization allocating `positionX`. |
| **109** | `const positionY = this.calculatePositionY(size);` | Local variable initialization allocating `positionY`. |
| **110** | `const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);` | Local variable initialization allocating `symbol`. |
| **111** | `symbol.setPosition(positionX, positionY);` | Applies operational logic and state mutation. |
| **112** | `` | Applies operational logic and state mutation. |
| **113** | `if (isGigaSymbol) {` | Conditional branch evaluation guarding edge cases or prerequisites. |
| **114** | `this.listGigaSymbols.push(symbol);` | Applies operational logic and state mutation. |
| **115** | `} else {` | Applies operational logic and state mutation. |
| **116** | `this.listSymbols.unshift(symbol);` | Applies operational logic and state mutation. |
| **117** | `}` | Method exit boundary, closing block scope. |
| **118** | `return symbol;` | Returns computed value / promise to caller. |
| **119** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as GigabloxReelModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke spawnSymbol(code: string, size: cc.Vec2, isGigaSymbol = false)
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return cc.Node
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
