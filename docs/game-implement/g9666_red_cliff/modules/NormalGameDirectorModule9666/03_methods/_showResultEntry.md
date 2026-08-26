---
id: "game-implement:9666:module:NormalGameDirectorModule9666:methods:_showResultEntry"
title: "NormalGameDirectorModule9666._showResultEntry Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "normal_game_director_module9666", "methods", "_showResultEntry"]
---

# 📖 `NormalGameDirectorModule9666._showResultEntry()`

---

## 1. Method Signature & Overview

```typescript
public _showResultEntry(): Promise<void>
```

- **Declaring Class**: `NormalGameDirectorModule9666` ([`NormalGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts))
- **Source Range**: Lines 109 to 115
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	override _showResultEntry(): Promise<void> {
		const nextGameMode = this.dataStore.getNextGameMode();
		if (nextGameMode !== GAME_MODE_ENUM.NORMAL_GAME) {
			this._disableNormalSpinButton();
		}
		return super._showResultEntry();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **109** | `override _showResultEntry(): Promise<void> {` | Method entry signature declaring `_showResultEntry()` returning `Promise<void>`. |
| **110** | `const nextGameMode = this.dataStore.getNextGameMode();` | Allocates local variable `nextGameMode`. |
| **111** | `if (nextGameMode !== GAME_MODE_ENUM.NORMAL_GAME) {` | Conditional guard evaluating branching prerequisite. |
| **112** | `this._disableNormalSpinButton();` | Executes core logic. |
| **113** | `}` | Scope boundary closing block. |
| **114** | `return super._showResultEntry();` | Returns value or promise to calling sequence. |
| **115** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _showResultEntry()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
