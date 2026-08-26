---
id: "game-implement:9666:module:NormalGameDirectorModule9666:methods:_startRespinningTable"
title: "NormalGameDirectorModule9666._startRespinningTable Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "normal_game_director_module9666", "methods", "_startRespinningTable"]
---

# 📖 `NormalGameDirectorModule9666._startRespinningTable()`

---

## 1. Method Signature & Overview

```typescript
public _startRespinningTable(data: any): Promise<void>
```

- **Declaring Class**: `NormalGameDirectorModule9666` ([`NormalGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts))
- **Source Range**: Lines 58 to 63
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	override async _startRespinningTable(data: any): Promise<void> {
		await Promise.all([
			this.moduleEvent.emit("TABLE_START_RESPIN", data),
			this._collectScatter(),
		]);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **58** | `override async _startRespinningTable(data: any): Promise<void> {` | Method entry signature declaring `_startRespinningTable(data: any)` returning `Promise<void>`. |
| **59** | `await Promise.all([` | Executes core logic. |
| **60** | `this.moduleEvent.emit("TABLE_START_RESPIN", data),` | Dispatches event `TABLE_START_RESPIN` to subscribers. |
| **61** | `this._collectScatter(),` | Executes core logic. |
| **62** | `]);` | Executes core logic. |
| **63** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _startRespinningTable(data: any)
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
