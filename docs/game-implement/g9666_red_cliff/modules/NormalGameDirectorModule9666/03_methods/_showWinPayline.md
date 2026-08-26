---
id: "game-implement:9666:module:NormalGameDirectorModule9666:methods:_showWinPayline"
title: "NormalGameDirectorModule9666._showWinPayline Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "normal_game_director_module9666", "methods", "_showWinPayline"]
---

# 📖 `NormalGameDirectorModule9666._showWinPayline()`

---

## 1. Method Signature & Overview

```typescript
public _showWinPayline(data): Promise<void>
```

- **Declaring Class**: `NormalGameDirectorModule9666` ([`NormalGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts))
- **Source Range**: Lines 65 to 68
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	override async _showWinPayline(data): Promise<void> {
		const totalWin = this.dataStore.playSession.winAmountPS;
		return super._showWinPayline(totalWin > 0 ? { ...data, winAmount: totalWin } : data);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **65** | `override async _showWinPayline(data): Promise<void> {` | Method entry signature declaring `_showWinPayline(data)` returning `Promise<void>`. |
| **66** | `const totalWin = this.dataStore.playSession.winAmountPS;` | Allocates local variable `totalWin`. |
| **67** | `return super._showWinPayline(totalWin > 0 ? { ...data, winAmount: totalWin } : data);` | Returns value or promise to calling sequence. |
| **68** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _showWinPayline(data)
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
