---
id: "game-implement:9666:module:NormalGameDirectorModule9666:methods:_showPaylineAmount"
title: "NormalGameDirectorModule9666._showPaylineAmount Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "normal_game_director_module9666", "methods", "_showPaylineAmount"]
---

# 📖 `NormalGameDirectorModule9666._showPaylineAmount()`

---

## 1. Method Signature & Overview

```typescript
public _showPaylineAmount(isFirstSpin: boolean = true): Promise<void>
```

- **Declaring Class**: `NormalGameDirectorModule9666` ([`NormalGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts))
- **Source Range**: Lines 101 to 103
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	private _showPaylineAmount(isFirstSpin: boolean = true): Promise<void> {
		return this.eventManager.emit('SHOW_PAYLINE_WIN_AMOUNT', { isFirstSpin });
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **101** | `private _showPaylineAmount(isFirstSpin: boolean = true): Promise<void> {` | Method entry signature declaring `_showPaylineAmount(isFirstSpin: boolean = true)` returning `Promise<void>`. |
| **102** | `return this.eventManager.emit('SHOW_PAYLINE_WIN_AMOUNT', { isFirstSpin });` | Returns value or promise to calling sequence. |
| **103** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _showPaylineAmount(isFirstSpin: boolean = true)
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
