---
id: "game-implement:9666:module:NormalGameDirectorModule9666:methods:_playSureWinEffect"
title: "NormalGameDirectorModule9666._playSureWinEffect Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "normal_game_director_module9666", "methods", "_playSureWinEffect"]
---

# 📖 `NormalGameDirectorModule9666._playSureWinEffect()`

---

## 1. Method Signature & Overview

```typescript
public _playSureWinEffect(_data): Promise<void>
```

- **Declaring Class**: `NormalGameDirectorModule9666` ([`NormalGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts))
- **Source Range**: Lines 41 to 46
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	override _playSureWinEffect(_data): Promise<void> {
		if (this.dataStore.playSession.sureWin === 1) {
			return this.eventManager.emit("SHOW_EFFECT_SURE_WIN", _data);
		}
		return Promise.resolve();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **41** | `override _playSureWinEffect(_data): Promise<void> {` | Method entry signature declaring `_playSureWinEffect(_data)` returning `Promise<void>`. |
| **42** | `if (this.dataStore.playSession.sureWin === 1) {` | Conditional guard evaluating branching prerequisite. |
| **43** | `return this.eventManager.emit("SHOW_EFFECT_SURE_WIN", _data);` | Returns value or promise to calling sequence. |
| **44** | `}` | Scope boundary closing block. |
| **45** | `return Promise.resolve();` | Returns value or promise to calling sequence. |
| **46** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _playSureWinEffect(_data)
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
