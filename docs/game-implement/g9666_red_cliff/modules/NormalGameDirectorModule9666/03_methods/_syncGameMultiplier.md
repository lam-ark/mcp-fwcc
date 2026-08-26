---
id: "game-implement:9666:module:NormalGameDirectorModule9666:methods:_syncGameMultiplier"
title: "NormalGameDirectorModule9666._syncGameMultiplier Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "normal_game_director_module9666", "methods", "_syncGameMultiplier"]
---

# 📖 `NormalGameDirectorModule9666._syncGameMultiplier()`

---

## 1. Method Signature & Overview

```typescript
public _syncGameMultiplier(): Promise<void>
```

- **Declaring Class**: `NormalGameDirectorModule9666` ([`NormalGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts))
- **Source Range**: Lines 162 to 164
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
| **162** | `_syncGameMultiplier(): Promise<void> {` | Method entry signature declaring `_syncGameMultiplier()` returning `Promise<void>`. |
| **163** | `return this.moduleEvent.emit("SYNC_GAME_MULTIPLIER");` | Returns value or promise to calling sequence. |
| **164** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _syncGameMultiplier()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
