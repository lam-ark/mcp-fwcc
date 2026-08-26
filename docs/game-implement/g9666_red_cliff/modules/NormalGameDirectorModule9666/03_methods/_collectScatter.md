---
id: "game-implement:9666:module:NormalGameDirectorModule9666:methods:_collectScatter"
title: "NormalGameDirectorModule9666._collectScatter Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "normal_game_director_module9666", "methods", "_collectScatter"]
---

# 📖 `NormalGameDirectorModule9666._collectScatter()`

---

## 1. Method Signature & Overview

```typescript
public _collectScatter(): Promise<void>
```

- **Declaring Class**: `NormalGameDirectorModule9666` ([`NormalGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts))
- **Source Range**: Lines 52 to 56
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	_collectScatter(): Promise<void> {
		const scatterCollectData = this.getScatterCollectData();
		console.log('[NormalGameDirectorModule9666] emit COLLECT_SCATTER', scatterCollectData);
		return this.eventManager.emit('COLLECT_SCATTER', scatterCollectData);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **52** | `_collectScatter(): Promise<void> {` | Method entry signature declaring `_collectScatter()` returning `Promise<void>`. |
| **53** | `const scatterCollectData = this.getScatterCollectData();` | Allocates local variable `scatterCollectData`. |
| **54** | `console.log('[NormalGameDirectorModule9666] emit COLLECT_SCATTER', scatterCollectData);` | Executes core logic. |
| **55** | `return this.eventManager.emit('COLLECT_SCATTER', scatterCollectData);` | Returns value or promise to calling sequence. |
| **56** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _collectScatter()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
