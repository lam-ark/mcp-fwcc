---
id: "game-implement:9666:module:NormalGameDirectorModule9666:methods:_showTransitionFreeGameOption"
title: "NormalGameDirectorModule9666._showTransitionFreeGameOption Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "normal_game_director_module9666", "methods", "_showTransitionFreeGameOption"]
---

# 📖 `NormalGameDirectorModule9666._showTransitionFreeGameOption()`

---

## 1. Method Signature & Overview

```typescript
public _showTransitionFreeGameOption(): Promise<void>
```

- **Declaring Class**: `NormalGameDirectorModule9666` ([`NormalGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts))
- **Source Range**: Lines 124 to 129
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	override async _showTransitionFreeGameOption(): Promise<void> {
		this._disableNormalSpinButton();
		this.eventManager.emit('ON_HIDE_PAYLINE_INFO', true);
		this.eventManager.emit('PLAY_MC_STATE', SpineStateMc9666.TransitionFreespin);
		return super._showTransitionFreeGameOption();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **124** | `override async _showTransitionFreeGameOption(): Promise<void> {` | Method entry signature declaring `_showTransitionFreeGameOption()` returning `Promise<void>`. |
| **125** | `this._disableNormalSpinButton();` | Executes core logic. |
| **126** | `this.eventManager.emit('ON_HIDE_PAYLINE_INFO', true);` | Dispatches event `ON_HIDE_PAYLINE_INFO` to subscribers. |
| **127** | `this.eventManager.emit('PLAY_MC_STATE', SpineStateMc9666.TransitionFreespin);` | Dispatches event `PLAY_MC_STATE` to subscribers. |
| **128** | `return super._showTransitionFreeGameOption();` | Returns value or promise to calling sequence. |
| **129** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _showTransitionFreeGameOption()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
