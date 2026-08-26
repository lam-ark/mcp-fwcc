---
id: "game-implement:9666:module:FreeGameDirectorModule9666:methods:_clearWinAmount"
title: "FreeGameDirectorModule9666._clearWinAmount Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "FreeGameDirectorModule9666", "free_game_director_module9666", "methods", "_clearWinAmount"]
---

# 📖 `FreeGameDirectorModule9666._clearWinAmount()`

---

## 1. Method Signature & Overview

```typescript
public _clearWinAmount(): Promise<void>
```

- **Declaring Class**: `FreeGameDirectorModule9666` ([`FreeGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameDirectorModule9666.ts))
- **Source Range**: Lines 111 to 113
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	override async _clearWinAmount(): Promise<void> {
		await this.eventManager.emit(FADE_OUT_RESPIN_WIN_AMOUNT, 0.5);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **111** | `override async _clearWinAmount(): Promise<void> {` | Method entry signature declaring `_clearWinAmount()` returning `Promise<void>`. |
| **112** | `await this.eventManager.emit(FADE_OUT_RESPIN_WIN_AMOUNT, 0.5);` | Dispatches event `Event` to subscribers. |
| **113** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as FreeGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _clearWinAmount()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
