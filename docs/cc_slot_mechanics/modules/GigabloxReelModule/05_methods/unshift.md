---
id: "cc_slot_mechanics:GigabloxReelModule:methods:unshift"
title: "GigabloxReelModule.unshift Method Implementation"
category: "cc_slot_mechanics"
tags: ["GigabloxReelModule", "gigablox_reel_module", "cc_slot_mechanics", "methods", "unshift"]
---

# 📖 `GigabloxReelModule.unshift()`

---

## 1. Method Signature

```typescript
unshift(symbol); } return symbol; } runReelSpin(mode: any): void
```

- **Scope**: `GigabloxReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
unshift(symbol);
		}
		return symbol;
	}

	runReelSpin(mode: any): void {
		super.runReelSpin(mode);
		this.reelManager.totalSymbol = this.config.BUFFER_TOP + this.reelManager.showSymbol + this.config.BUFFER_BOT;
		this.listSymbols.forEach((s) => s.active = !this._isGigablox);
		this._isGigablox = false; // reset gigablox state
		this._gigabloxIndex = -1;
		this._isBeginHidingSymbol = false;
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
