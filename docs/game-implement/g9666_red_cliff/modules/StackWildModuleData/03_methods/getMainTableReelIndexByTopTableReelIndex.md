---
id: "game-implement:9666:module:StackWildModuleData:methods:getMainTableReelIndexByTopTableReelIndex"
title: "StackWildModuleData.getMainTableReelIndexByTopTableReelIndex Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "StackWildModuleData", "stack_wild_module_data", "methods", "getMainTableReelIndexByTopTableReelIndex"]
---

# 📖 `StackWildModuleData.getMainTableReelIndexByTopTableReelIndex()`

---

## 1. Method Signature & Overview

```typescript
public getMainTableReelIndexByTopTableReelIndex(topTableReelIndex: number): number
```

- **Declaring Class**: `StackWildModuleData` ([`StackWildModuleData.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/StackWildModuleData.ts))
- **Source Range**: Lines 75 to 77
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	getMainTableReelIndexByTopTableReelIndex(topTableReelIndex: number): number {
		return this._config.REEL_MAP_STACK_WILD[topTableReelIndex];
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **75** | `getMainTableReelIndexByTopTableReelIndex(topTableReelIndex: number): number {` | Method entry signature declaring `getMainTableReelIndexByTopTableReelIndex(topTableReelIndex: number)` returning `number`. |
| **76** | `return this._config.REEL_MAP_STACK_WILD[topTableReelIndex];` | Returns value or promise to calling sequence. |
| **77** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as StackWildModuleData
    participant Target as Engine / UI

    Caller->>Mod: Call getMainTableReelIndexByTopTableReelIndex(topTableReelIndex: number)
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return number
```
