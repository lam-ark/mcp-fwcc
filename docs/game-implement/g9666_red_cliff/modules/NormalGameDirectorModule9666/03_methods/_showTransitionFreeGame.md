---
id: "game-implement:9666:module:NormalGameDirectorModule9666:methods:_showTransitionFreeGame"
title: "NormalGameDirectorModule9666._showTransitionFreeGame Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "normal_game_director_module9666", "methods", "_showTransitionFreeGame"]
---

# 📖 `NormalGameDirectorModule9666._showTransitionFreeGame()`

---

## 1. Method Signature & Overview

```typescript
public _showTransitionFreeGame(): Promise<void>
```

- **Declaring Class**: `NormalGameDirectorModule9666` ([`NormalGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts))
- **Source Range**: Lines 117 to 122
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	override async _showTransitionFreeGame(): Promise<void> {
		this._disableNormalSpinButton();
		this.eventManager.emit('ON_HIDE_PAYLINE_INFO', true);
		this.eventManager.emit('PLAY_MC_STATE', SpineStateMc9666.TransitionFreespin);
		return super._showTransitionFreeGame();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **117** | `override async _showTransitionFreeGame(): Promise<void> {` | Method entry signature declaring `_showTransitionFreeGame()` returning `Promise<void>`. |
| **118** | `this._disableNormalSpinButton();` | Executes core logic. |
| **119** | `this.eventManager.emit('ON_HIDE_PAYLINE_INFO', true);` | Dispatches event `ON_HIDE_PAYLINE_INFO` to subscribers. |
| **120** | `this.eventManager.emit('PLAY_MC_STATE', SpineStateMc9666.TransitionFreespin);` | Dispatches event `PLAY_MC_STATE` to subscribers. |
| **121** | `return super._showTransitionFreeGame();` | Returns value or promise to calling sequence. |
| **122** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _showTransitionFreeGame()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
