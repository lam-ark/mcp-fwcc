---
id: "game-implement:9666:module:NormalGameDirectorModule9666:methods:onBackToGameMode"
title: "NormalGameDirectorModule9666.onBackToGameMode Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "normal_game_director_module9666", "methods", "onBackToGameMode"]
---

# 📖 `NormalGameDirectorModule9666.onBackToGameMode()`

---

## 1. Method Signature & Overview

```typescript
public onBackToGameMode(_fromMode: number): Promise<void>
```

- **Declaring Class**: `NormalGameDirectorModule9666` ([`NormalGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts))
- **Source Range**: Lines 23 to 26
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	onBackToGameMode(_fromMode: number): Promise<void> {
		this._enableNormalSpinButton();
		return super.onBackToGameMode(_fromMode);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **23** | `onBackToGameMode(_fromMode: number): Promise<void> {` | Method entry signature declaring `onBackToGameMode(_fromMode: number)` returning `Promise<void>`. |
| **24** | `this._enableNormalSpinButton();` | Executes core logic. |
| **25** | `return super.onBackToGameMode(_fromMode);` | Returns value or promise to calling sequence. |
| **26** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call onBackToGameMode(_fromMode: number)
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
