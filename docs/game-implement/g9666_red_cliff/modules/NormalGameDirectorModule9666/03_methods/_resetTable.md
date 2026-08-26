---
id: "game-implement:9666:module:NormalGameDirectorModule9666:methods:_resetTable"
title: "NormalGameDirectorModule9666._resetTable Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "normal_game_director_module9666", "methods", "_resetTable"]
---

# 📖 `NormalGameDirectorModule9666._resetTable()`

---

## 1. Method Signature & Overview

```typescript
public _resetTable(): Promise<void>
```

- **Declaring Class**: `NormalGameDirectorModule9666` ([`NormalGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts))
- **Source Range**: Lines 144 to 152
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	_resetTable(): Promise<void> {
		this.moduleEvent.emit("BEFORE_RESET_TABLE");
		this.moduleEvent.emit("CLEAR_PAYLINES");
		this.moduleEvent.emit("SYNC_TABLE");
		this.eventManager.emit('ON_HIDE_PAYLINE_INFO');
		this.eventManager.emit('RESET_SCATTER_COUNT');
		this.eventManager.emit('RESET_MULTIPLIER');
		return Promise.resolve();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **144** | `_resetTable(): Promise<void> {` | Method entry signature declaring `_resetTable()` returning `Promise<void>`. |
| **145** | `this.moduleEvent.emit("BEFORE_RESET_TABLE");` | Dispatches event `BEFORE_RESET_TABLE` to subscribers. |
| **146** | `this.moduleEvent.emit("CLEAR_PAYLINES");` | Dispatches event `CLEAR_PAYLINES` to subscribers. |
| **147** | `this.moduleEvent.emit("SYNC_TABLE");` | Dispatches event `SYNC_TABLE` to subscribers. |
| **148** | `this.eventManager.emit('ON_HIDE_PAYLINE_INFO');` | Dispatches event `ON_HIDE_PAYLINE_INFO` to subscribers. |
| **149** | `this.eventManager.emit('RESET_SCATTER_COUNT');` | Dispatches event `RESET_SCATTER_COUNT` to subscribers. |
| **150** | `this.eventManager.emit('RESET_MULTIPLIER');` | Dispatches event `RESET_MULTIPLIER` to subscribers. |
| **151** | `return Promise.resolve();` | Returns value or promise to calling sequence. |
| **152** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _resetTable()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
