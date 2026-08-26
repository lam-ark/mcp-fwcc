---
id: "game-implement:9666:module:FreeGameDirectorModule9666:methods:_syncStackWild"
title: "FreeGameDirectorModule9666._syncStackWild Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "FreeGameDirectorModule9666", "free_game_director_module9666", "methods", "_syncStackWild"]
---

# 📖 `FreeGameDirectorModule9666._syncStackWild()`

---

## 1. Method Signature & Overview

```typescript
public _syncStackWild(): Promise<void>
```

- **Declaring Class**: `FreeGameDirectorModule9666` ([`FreeGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameDirectorModule9666.ts))
- **Source Range**: Lines 124 to 126
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	async _syncStackWild(): Promise<void> {
		return this.moduleEvent.emit("STACK_WILD_STOP");
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **124** | `async _syncStackWild(): Promise<void> {` | Method entry signature declaring `_syncStackWild()` returning `Promise<void>`. |
| **125** | `return this.moduleEvent.emit("STACK_WILD_STOP");` | Returns value or promise to calling sequence. |
| **126** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as FreeGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _syncStackWild()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
