---
id: "game-implement:9666:module:CombineEffectModule9666:methods:playOutEffect"
title: "CombineEffectModule9666.playOutEffect Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CombineEffectModule9666", "combine_effect_module9666", "methods", "playOutEffect"]
---

# 📖 `CombineEffectModule9666.playOutEffect()`

---

## 1. Method Signature & Overview

```typescript
public playOutEffect(activeEff: ActiveEffect): void
```

- **Declaring Class**: `CombineEffectModule9666` ([`CombineEffectModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Payline/CombineEffectModule9666.ts))
- **Source Range**: Lines 87 to 102
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	private playOutEffect(activeEff: ActiveEffect): void {
		if (activeEff.isDying) {
			return;
		}
		activeEff.isDying = true;

		const { effectNode } = activeEff;
		const effectComp = effectNode.getComponent(CombineEffectNode9666);
		if (effectComp) {
			effectComp.playOut(() => {
				this.removeEffect(activeEff);
			}, this.speed);
		} else {
			this.removeEffect(activeEff);
		}
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **87** | `private playOutEffect(activeEff: ActiveEffect): void {` | Method entry signature declaring `playOutEffect(activeEff: ActiveEffect)` returning `void`. |
| **88** | `if (activeEff.isDying) {` | Conditional guard evaluating branching prerequisite. |
| **89** | `return;` | Returns value or promise to calling sequence. |
| **90** | `}` | Scope boundary closing block. |
| **91** | `activeEff.isDying = true;` | Executes core logic. |
| **92** | `` | Executes core logic. |
| **93** | `const { effectNode } = activeEff;` | Allocates local variable `{ effectNode }`. |
| **94** | `const effectComp = effectNode.getComponent(CombineEffectNode9666);` | Allocates local variable `effectComp`. |
| **95** | `if (effectComp) {` | Conditional guard evaluating branching prerequisite. |
| **96** | `effectComp.playOut(() => {` | Executes core logic. |
| **97** | `this.removeEffect(activeEff);` | Executes core logic. |
| **98** | `}, this.speed);` | Executes core logic. |
| **99** | `} else {` | Executes core logic. |
| **100** | `this.removeEffect(activeEff);` | Executes core logic. |
| **101** | `}` | Scope boundary closing block. |
| **102** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as CombineEffectModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call playOutEffect(activeEff: ActiveEffect)
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return void
```
