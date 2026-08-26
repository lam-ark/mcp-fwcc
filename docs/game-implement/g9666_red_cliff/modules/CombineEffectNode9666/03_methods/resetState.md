---
id: "game-implement:9666:module:CombineEffectNode9666:methods:resetState"
title: "CombineEffectNode9666.resetState Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CombineEffectNode9666", "combine_effect_node9666", "methods", "resetState"]
---

# 📖 `CombineEffectNode9666.resetState()`

---

## 1. Method Signature & Overview

```typescript
public resetState(): void
```

- **Declaring Class**: `CombineEffectNode9666` ([`CombineEffectNode9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Payline/CombineEffectNode9666.ts))
- **Source Range**: Lines 44 to 50
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	public resetState(): void {
		if (this.spine) {
			this.spine.timeScale = 1.0;
			this.spine.clearTracks();
			this.spine.setToSetupPose();
		}
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **44** | `public resetState(): void {` | Method entry signature declaring `resetState()` returning `void`. |
| **45** | `if (this.spine) {` | Conditional guard evaluating branching prerequisite. |
| **46** | `this.spine.timeScale = 1.0;` | Executes core logic. |
| **47** | `this.spine.clearTracks();` | Executes core logic. |
| **48** | `this.spine.setToSetupPose();` | Executes core logic. |
| **49** | `}` | Scope boundary closing block. |
| **50** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as CombineEffectNode9666
    participant Target as Engine / UI

    Caller->>Mod: Call resetState()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return void
```
