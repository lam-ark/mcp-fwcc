---
id: "game-implement:9666:module:StackWildModuleData:methods:isFreeMode"
title: "StackWildModuleData.isFreeMode Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "StackWildModuleData", "stack_wild_module_data", "methods", "isFreeMode"]
---

# 📖 `StackWildModuleData.isFreeMode()`

---

## 1. Method Signature & Overview

```typescript
public isFreeMode(): boolean
```

- **Declaring Class**: `StackWildModuleData` ([`StackWildModuleData.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/StackWildModuleData.ts))
- **Source Range**: Lines 150 to 152
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	isFreeMode(): boolean {
		return this["state"] === 1; // FREE_GAME
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **150** | `isFreeMode(): boolean {` | Method entry signature declaring `isFreeMode()` returning `boolean`. |
| **151** | `return this["state"] === 1; // FREE_GAME` | Returns value or promise to calling sequence. |
| **152** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as StackWildModuleData
    participant Target as Engine / UI

    Caller->>Mod: Call isFreeMode()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return boolean
```
