---
id: "game-implement:9666:module:FreeGameDirectorModule9666:methods:_collectWildMultiplier"
title: "FreeGameDirectorModule9666._collectWildMultiplier Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "FreeGameDirectorModule9666", "free_game_director_module9666", "methods", "_collectWildMultiplier"]
---

# 📖 `FreeGameDirectorModule9666._collectWildMultiplier()`

---

## 1. Method Signature & Overview

```typescript
public _collectWildMultiplier(): Promise<void>
```

- **Declaring Class**: `FreeGameDirectorModule9666` ([`FreeGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameDirectorModule9666.ts))
- **Source Range**: Lines 128 to 130
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	_collectWildMultiplier(): Promise<void> {
		return this.eventManager.emit("COLLECT_WILD_MULTIPLIER", this.slotSymbolManager);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **128** | `_collectWildMultiplier(): Promise<void> {` | Method entry signature declaring `_collectWildMultiplier()` returning `Promise<void>`. |
| **129** | `return this.eventManager.emit("COLLECT_WILD_MULTIPLIER", this.slotSymbolManager);` | Returns value or promise to calling sequence. |
| **130** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as FreeGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _collectWildMultiplier()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
