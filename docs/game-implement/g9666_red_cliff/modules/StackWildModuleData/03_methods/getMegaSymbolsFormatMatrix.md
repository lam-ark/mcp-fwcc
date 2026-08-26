---
id: "game-implement:9666:module:StackWildModuleData:methods:getMegaSymbolsFormatMatrix"
title: "StackWildModuleData.getMegaSymbolsFormatMatrix Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "StackWildModuleData", "stack_wild_module_data", "methods", "getMegaSymbolsFormatMatrix"]
---

# 📖 `StackWildModuleData.getMegaSymbolsFormatMatrix()`

---

## 1. Method Signature & Overview

```typescript
public getMegaSymbolsFormatMatrix(): string[]
```

- **Declaring Class**: `StackWildModuleData` ([`StackWildModuleData.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/StackWildModuleData.ts))
- **Source Range**: Lines 143 to 148
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	getMegaSymbolsFormatMatrix(): string[] {
		if (this.isFreeMode()) {
			return this['freeFormatMatrix'] || this['formatMatrix'] || [];
		}
		return this['normalFormatMatrix'] || this['formatMatrix'] || [];
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **143** | `getMegaSymbolsFormatMatrix(): string[] {` | Method entry signature declaring `getMegaSymbolsFormatMatrix()` returning `string[]`. |
| **144** | `if (this.isFreeMode()) {` | Conditional guard evaluating branching prerequisite. |
| **145** | `return this['freeFormatMatrix'] \|\| this['formatMatrix'] \|\| [];` | Returns value or promise to calling sequence. |
| **146** | `}` | Scope boundary closing block. |
| **147** | `return this['normalFormatMatrix'] \|\| this['formatMatrix'] \|\| [];` | Returns value or promise to calling sequence. |
| **148** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as StackWildModuleData
    participant Target as Engine / UI

    Caller->>Mod: Call getMegaSymbolsFormatMatrix()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return string[]
```
