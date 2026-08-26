---
id: "cc_slot_mechanics:NudgeReelModule:methods:start"
title: "NudgeReelModule.start Method Implementation"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "start"]
---

# 📖 `NudgeReelModule.start()`

---

## 1. Method Signature

```typescript
start(); } protected startNudge(): void
```

- **Scope**: `NudgeReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
start();
	}

	protected startNudge(): void {
		//add all symbols before nudging
		this.addNudgeSymbols();
        
		this.nudgeSpinning();
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
