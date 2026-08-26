---
id: "game-implement:9666:module:CombineEffectNode9666:methods:onLoad"
title: "CombineEffectNode9666.onLoad Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CombineEffectNode9666", "combine_effect_node9666", "methods", "onLoad"]
---

# 📖 `CombineEffectNode9666.onLoad()`

---

## 1. Method Signature & Overview

```typescript
public onLoad(): void
```

- **Declaring Class**: `CombineEffectNode9666` ([`CombineEffectNode9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Payline/CombineEffectNode9666.ts))
- **Source Range**: Lines 9 to 13
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	onLoad(): void {
		if (!this.spine) {
			this.spine = this.getComponentInChildren(sp.Skeleton) || this.getComponent(sp.Skeleton);
		}
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **9** | `onLoad(): void {` | Method entry signature declaring `onLoad()` returning `void`. |
| **10** | `if (!this.spine) {` | Conditional guard evaluating branching prerequisite. |
| **11** | `this.spine = this.getComponentInChildren(sp.Skeleton) \|\| this.getComponent(sp.Skeleton);` | Executes core logic. |
| **12** | `}` | Scope boundary closing block. |
| **13** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as CombineEffectNode9666
    participant Target as Engine / UI

    Caller->>Mod: Call onLoad()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return void
```
