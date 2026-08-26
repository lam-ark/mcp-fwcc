---
id: "game-implement:9666:module:FreeGameDirectorModule9666:methods:_resetTable"
title: "FreeGameDirectorModule9666._resetTable Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "FreeGameDirectorModule9666", "free_game_director_module9666", "methods", "_resetTable"]
---

# 📖 `FreeGameDirectorModule9666._resetTable()`

---

## 1. Method Signature & Overview

```typescript
public _resetTable(): Promise<void>
```

- **Declaring Class**: `FreeGameDirectorModule9666` ([`FreeGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameDirectorModule9666.ts))
- **Source Range**: Lines 83 to 88
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	_resetTable(): Promise<void> {
		this.moduleEvent.emit("BEFORE_RESET_TABLE");
		this.moduleEvent.emit("CLEAR_PAYLINES");
		this.moduleEvent.emit("SYNC_TABLE");
		return Promise.resolve();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **83** | `_resetTable(): Promise<void> {` | Method entry signature declaring `_resetTable()` returning `Promise<void>`. |
| **84** | `this.moduleEvent.emit("BEFORE_RESET_TABLE");` | Dispatches event `BEFORE_RESET_TABLE` to subscribers. |
| **85** | `this.moduleEvent.emit("CLEAR_PAYLINES");` | Dispatches event `CLEAR_PAYLINES` to subscribers. |
| **86** | `this.moduleEvent.emit("SYNC_TABLE");` | Dispatches event `SYNC_TABLE` to subscribers. |
| **87** | `return Promise.resolve();` | Returns value or promise to calling sequence. |
| **88** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as FreeGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _resetTable()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
