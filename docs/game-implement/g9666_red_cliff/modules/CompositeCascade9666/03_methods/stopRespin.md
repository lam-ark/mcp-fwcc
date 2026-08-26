---
id: "game-implement:9666:module:CompositeCascade9666:methods:stopRespin"
title: "CompositeCascade9666.stopRespin Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CompositeCascade9666", "composite_cascade9666", "methods", "stopRespin"]
---

# 📖 `CompositeCascade9666.stopRespin()`

---

## 1. Method Signature & Overview

```typescript
public stopRespin(): Promise<void>
```

- **Declaring Class**: `CompositeCascade9666` ([`CompositeCascade9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/CompositeCascade9666.ts))
- **Source Range**: Lines 15 to 21
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	async stopRespin(): Promise<void> {
		const formatMatrix = this._compositeCascadeData.getFormatMatrix();
		const totalWays = formatMatrix.reduce((total, column) => total * column.length, 1);
		await this.moduleEvent.emit('UPDATE_MEGAWAY', totalWays);
		await super.stopRespin();
		await this.moduleEvent.emit('STACK_WILD_LANDED');
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **15** | `async stopRespin(): Promise<void> {` | Method entry signature declaring `stopRespin()` returning `Promise<void>`. |
| **16** | `const formatMatrix = this._compositeCascadeData.getFormatMatrix();` | Allocates local variable `formatMatrix`. |
| **17** | `const totalWays = formatMatrix.reduce((total, column) => total * column.length, 1);` | Allocates local variable `totalWays`. |
| **18** | `await this.moduleEvent.emit('UPDATE_MEGAWAY', totalWays);` | Dispatches event `UPDATE_MEGAWAY` to subscribers. |
| **19** | `await super.stopRespin();` | Delegates to parent superclass lifecycle implementation. |
| **20** | `await this.moduleEvent.emit('STACK_WILD_LANDED');` | Dispatches event `STACK_WILD_LANDED` to subscribers. |
| **21** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as CompositeCascade9666
    participant Target as Engine / UI

    Caller->>Mod: Call stopRespin()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
