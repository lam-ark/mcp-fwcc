---
id: "game-implement:9666:module:FreeGameDirectorModule9666:methods:_gameExit"
title: "FreeGameDirectorModule9666._gameExit Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "FreeGameDirectorModule9666", "free_game_director_module9666", "methods", "_gameExit"]
---

# 📖 `FreeGameDirectorModule9666._gameExit()`

---

## 1. Method Signature & Overview

```typescript
public _gameExit(): Promise<void>
```

- **Declaring Class**: `FreeGameDirectorModule9666` ([`FreeGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameDirectorModule9666.ts))
- **Source Range**: Lines 77 to 81
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	override async _gameExit(): Promise<void> {
		await super._gameExit();
		this.eventManager.emit('RESET_MULTIPLIER', false);
		this.eventManager.emit('RESET_SCATTER_COUNT');
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **77** | `override async _gameExit(): Promise<void> {` | Method entry signature declaring `_gameExit()` returning `Promise<void>`. |
| **78** | `await super._gameExit();` | Delegates to parent superclass lifecycle implementation. |
| **79** | `this.eventManager.emit('RESET_MULTIPLIER', false);` | Dispatches event `RESET_MULTIPLIER` to subscribers. |
| **80** | `this.eventManager.emit('RESET_SCATTER_COUNT');` | Dispatches event `RESET_SCATTER_COUNT` to subscribers. |
| **81** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as FreeGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _gameExit()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
