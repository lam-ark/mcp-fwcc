---
id: "game-implement:9666:module:NormalGameDirectorModule9666:methods:_stopSpinningTopTable"
title: "NormalGameDirectorModule9666._stopSpinningTopTable Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "normal_game_director_module9666", "methods", "_stopSpinningTopTable"]
---

# 📖 `NormalGameDirectorModule9666._stopSpinningTopTable()`

---

## 1. Method Signature & Overview

```typescript
public _stopSpinningTopTable(): Promise<void>
```

- **Declaring Class**: `NormalGameDirectorModule9666` ([`NormalGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts))
- **Source Range**: Lines 136 to 138
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	_stopSpinningTopTable(): Promise<void> {
		return this.moduleEvent.emit("TABLE_STOP_SPIN_TOP");
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **136** | `_stopSpinningTopTable(): Promise<void> {` | Method entry signature declaring `_stopSpinningTopTable()` returning `Promise<void>`. |
| **137** | `return this.moduleEvent.emit("TABLE_STOP_SPIN_TOP");` | Returns value or promise to calling sequence. |
| **138** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _stopSpinningTopTable()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
