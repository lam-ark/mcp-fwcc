---
id: "cc_slot_mechanics:MegaReelData:methods:onloadExtend"
title: "MegaReelData.onloadExtend Method Implementation"
category: "cc_slot_mechanics"
tags: ["MegaReelData", "mega_reel_data", "cc_slot_mechanics", "methods", "onloadExtend"]
---

# 📖 `MegaReelData.onloadExtend()`

---

## 1. Method Signature

```typescript
onloadExtend(): void
```

- **Scope**: `MegaReelData`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
onloadExtend(): void {
		this.registeredKeys = [...this.registeredKeys, "fBi", "hBi"];
        this._megaReelConfig = this.getComponent(MegaReelConfig);
		super.onloadExtend();
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
