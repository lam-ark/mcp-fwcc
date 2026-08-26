---
id: "cc_slot_mechanics:NudgeReelModule:methods:help"
title: "NudgeReelModule.help Method Implementation"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "help"]
---

# 📖 `NudgeReelModule.help()`

---

## 1. Method Signature

```typescript
help(HelpDocuments.NUDGE_REEL_MODULE) export class NudgeReelModule extends SlotReelModule { protected _nudgeStep: number = 0; protected _totalNudgeStep: number = 0; protected _direction: NudgeDirection; setupNudge({index, step, direction}): void
```

- **Scope**: `NudgeReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
help(HelpDocuments.NUDGE_REEL_MODULE)
export class NudgeReelModule extends SlotReelModule {

	protected _nudgeStep: number = 0;
	protected _totalNudgeStep: number = 0;
	protected _direction: NudgeDirection;

	setupNudge({index, step, direction}): void {
		this._totalNudgeStep = step;
		this._nudgeStep = this._totalNudgeStep;
		this._direction = direction;
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
