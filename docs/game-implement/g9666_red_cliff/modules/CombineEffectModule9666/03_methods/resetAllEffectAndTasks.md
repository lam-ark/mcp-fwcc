---
id: "game-implement:9666:module:CombineEffectModule9666:methods:resetAllEffectAndTasks"
title: "CombineEffectModule9666.resetAllEffectAndTasks Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CombineEffectModule9666", "combine_effect_module9666", "methods", "resetAllEffectAndTasks"]
---

# 📖 `CombineEffectModule9666.resetAllEffectAndTasks()`

---

## 1. Method Signature & Overview

```typescript
public resetAllEffectAndTasks(): void
```

- **Declaring Class**: `CombineEffectModule9666` ([`CombineEffectModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Payline/CombineEffectModule9666.ts))
- **Source Range**: Lines 145 to 147
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	protected resetAllEffectAndTasks(): void {
		this.stopAllEffects(true);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **145** | `protected resetAllEffectAndTasks(): void {` | Method entry signature declaring `resetAllEffectAndTasks()` returning `void`. |
| **146** | `this.stopAllEffects(true);` | Executes core logic. |
| **147** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as CombineEffectModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call resetAllEffectAndTasks()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return void
```
