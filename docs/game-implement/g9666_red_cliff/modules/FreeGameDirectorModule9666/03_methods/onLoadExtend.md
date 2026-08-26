---
id: "game-implement:9666:module:FreeGameDirectorModule9666:methods:onLoadExtend"
title: "FreeGameDirectorModule9666.onLoadExtend Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "FreeGameDirectorModule9666", "free_game_director_module9666", "methods", "onLoadExtend"]
---

# 📖 `FreeGameDirectorModule9666.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
public onLoadExtend(): void
```

- **Declaring Class**: `FreeGameDirectorModule9666` ([`FreeGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameDirectorModule9666.ts))
- **Source Range**: Lines 14 to 18
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	onLoadExtend(): void {
		super.onLoadExtend();
		this.slotSymbolManager = this.getSlotSymbolManager();
		this.eventManager.on('ADD_FREE_SPIN_TIMES', this.onAddFreeSpinTimes, this);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **14** | `onLoadExtend(): void {` | Method entry signature declaring `onLoadExtend()` returning `void`. |
| **15** | `super.onLoadExtend();` | Delegates to parent superclass lifecycle implementation. |
| **16** | `this.slotSymbolManager = this.getSlotSymbolManager();` | Executes core logic. |
| **17** | `this.eventManager.on('ADD_FREE_SPIN_TIMES', this.onAddFreeSpinTimes, this);` | Subscribes listener for `ADD_FREE_SPIN_TIMES` event. |
| **18** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as FreeGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call onLoadExtend()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return void
```
