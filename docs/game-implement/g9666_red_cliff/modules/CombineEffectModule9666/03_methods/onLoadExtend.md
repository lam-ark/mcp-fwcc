---
id: "game-implement:9666:module:CombineEffectModule9666:methods:onLoadExtend"
title: "CombineEffectModule9666.onLoadExtend Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CombineEffectModule9666", "combine_effect_module9666", "methods", "onLoadExtend"]
---

# 📖 `CombineEffectModule9666.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
public onLoadExtend(): void
```

- **Declaring Class**: `CombineEffectModule9666` ([`CombineEffectModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Payline/CombineEffectModule9666.ts))
- **Source Range**: Lines 29 to 37
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	onLoadExtend(): void {
		if (!this.vfxPool) {
			this.vfxPool = this.getComponent(PoolFactoryModule);
		}

		if (!this.layerContainer) {
			this.layerContainer = this.node;
		}
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **29** | `onLoadExtend(): void {` | Method entry signature declaring `onLoadExtend()` returning `void`. |
| **30** | `if (!this.vfxPool) {` | Conditional guard evaluating branching prerequisite. |
| **31** | `this.vfxPool = this.getComponent(PoolFactoryModule);` | Executes core logic. |
| **32** | `}` | Scope boundary closing block. |
| **33** | `` | Executes core logic. |
| **34** | `if (!this.layerContainer) {` | Conditional guard evaluating branching prerequisite. |
| **35** | `this.layerContainer = this.node;` | Executes core logic. |
| **36** | `}` | Scope boundary closing block. |
| **37** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as CombineEffectModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call onLoadExtend()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return void
```
