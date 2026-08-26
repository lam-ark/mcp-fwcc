---
id: "game-implement:9666:module:FreeGameDirectorModule9666:methods:_syncGameMultiplier"
title: "FreeGameDirectorModule9666._syncGameMultiplier Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "FreeGameDirectorModule9666", "free_game_director_module9666", "methods", "_syncGameMultiplier"]
---

# 📖 `FreeGameDirectorModule9666._syncGameMultiplier()`

---

## 1. Method Signature & Overview

```typescript
public _syncGameMultiplier(): Promise<void>
```

- **Declaring Class**: `FreeGameDirectorModule9666` ([`FreeGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameDirectorModule9666.ts))
- **Source Range**: Lines 132 to 134
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	_syncGameMultiplier(): Promise<void> {
		return this.moduleEvent.emit("SYNC_GAME_MULTIPLIER");
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **132** | `_syncGameMultiplier(): Promise<void> {` | Method entry signature declaring `_syncGameMultiplier()` returning `Promise<void>`. |
| **133** | `return this.moduleEvent.emit("SYNC_GAME_MULTIPLIER");` | Returns value or promise to calling sequence. |
| **134** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as FreeGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _syncGameMultiplier()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
