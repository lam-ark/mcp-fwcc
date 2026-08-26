---
id: "game-implement:9666:module:NormalGameDirectorModule9666:methods:_startSpinningTable"
title: "NormalGameDirectorModule9666._startSpinningTable Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "normal_game_director_module9666", "methods", "_startSpinningTable"]
---

# 📖 `NormalGameDirectorModule9666._startSpinningTable()`

---

## 1. Method Signature & Overview

```typescript
public _startSpinningTable(): Promise<void>
```

- **Declaring Class**: `NormalGameDirectorModule9666` ([`NormalGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts))
- **Source Range**: Lines 131 to 134
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	override async _startSpinningTable(): Promise<void> {
		await this.moduleEvent.emit("RESET_MEGAWAY");
		return super._startSpinningTable();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **131** | `override async _startSpinningTable(): Promise<void> {` | Method entry signature declaring `_startSpinningTable()` returning `Promise<void>`. |
| **132** | `await this.moduleEvent.emit("RESET_MEGAWAY");` | Dispatches event `RESET_MEGAWAY` to subscribers. |
| **133** | `return super._startSpinningTable();` | Returns value or promise to calling sequence. |
| **134** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _startSpinningTable()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
