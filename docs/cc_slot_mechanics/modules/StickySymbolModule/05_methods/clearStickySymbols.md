---
id: "cc_slot_mechanics:StickySymbolModule:methods:clearStickySymbols"
title: "StickySymbolModule.clearStickySymbols Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "methods", "clearStickySymbols"]
---

# 📖 `StickySymbolModule.clearStickySymbols()`

---

## 1. Method Signature & Overview

```typescript
public clearStickySymbols(): void
```

- **Declaring Class**: `StickySymbolModule` (`assets/cc-common/cc-slot-mechanics/StickySymbol/scripts/StickySymbolModule.ts`)
- **Source Code Location**: Lines 82 to 92
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	clearStickySymbols(): void {
		this.hideStickyLayer();
		this.stickySymbols.forEach((symbol) => {
			if (symbol && symbol.isValid) {
				this.updateSymbolIndex(symbol, -1);
				this.stickyPool.removeSymbol(symbol);
			}
		});
		this.stickySymbols.clear();
		this.data.cleanStickyIndexes();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **82** | `clearStickySymbols(): void {` | Method entry signature declaring `clearStickySymbols()` with return type `void`. |
| **83** | `this.hideStickyLayer();` | Applies operational logic and state mutation. |
| **84** | `this.stickySymbols.forEach((symbol) => {` | Applies operational logic and state mutation. |
| **85** | `if (symbol && symbol.isValid) {` | Conditional branch evaluation guarding edge cases or prerequisites. |
| **86** | `this.updateSymbolIndex(symbol, -1);` | Applies operational logic and state mutation. |
| **87** | `this.stickyPool.removeSymbol(symbol);` | Applies operational logic and state mutation. |
| **88** | `}` | Method exit boundary, closing block scope. |
| **89** | `});` | Applies operational logic and state mutation. |
| **90** | `this.stickySymbols.clear();` | Applies operational logic and state mutation. |
| **91** | `this.data.cleanStickyIndexes();` | Applies operational logic and state mutation. |
| **92** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as StickySymbolModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke clearStickySymbols()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
