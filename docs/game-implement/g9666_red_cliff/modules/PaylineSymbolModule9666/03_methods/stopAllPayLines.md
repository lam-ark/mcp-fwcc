---
id: "game-implement:9666:module:PaylineSymbolModule9666:methods:stopAllPayLines"
title: "PaylineSymbolModule9666.stopAllPayLines Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "PaylineSymbolModule9666", "payline_symbol_module9666", "methods", "stopAllPayLines"]
---

# 📖 `PaylineSymbolModule9666.stopAllPayLines()`

---

## 1. Method Signature & Overview

```typescript
public stopAllPayLines(): void
```

- **Declaring Class**: `PaylineSymbolModule9666` ([`PaylineSymbolModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Payline/PaylineSymbolModule9666.ts))
- **Source Range**: Lines 57 to 60
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	protected override stopAllPayLines(): void {
		super.stopAllPayLines();
		this.node.emit('STOP_ALL_COMBINE_EFFECTS');
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **57** | `protected override stopAllPayLines(): void {` | Method entry signature declaring `stopAllPayLines()` returning `void`. |
| **58** | `super.stopAllPayLines();` | Delegates to parent superclass lifecycle implementation. |
| **59** | `this.node.emit('STOP_ALL_COMBINE_EFFECTS');` | Executes core logic. |
| **60** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as PaylineSymbolModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call stopAllPayLines()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return void
```
