---
id: "game-implement:9666:module:NormalGameDirectorModule9666:methods:_clearWinAmount"
title: "NormalGameDirectorModule9666._clearWinAmount Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "normal_game_director_module9666", "methods", "_clearWinAmount"]
---

# 📖 `NormalGameDirectorModule9666._clearWinAmount()`

---

## 1. Method Signature & Overview

```typescript
public _clearWinAmount(): Promise<void>
```

- **Declaring Class**: `NormalGameDirectorModule9666` ([`NormalGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts))
- **Source Range**: Lines 105 to 107
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
| **105** | `override async _clearWinAmount(): Promise<void> {` | Method entry signature declaring `_clearWinAmount()` returning `Promise<void>`. |
| **106** | `await this.eventManager.emit(FADE_OUT_RESPIN_WIN_AMOUNT, 0.5);` | Dispatches event `Event` to subscribers. |
| **107** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _clearWinAmount()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
