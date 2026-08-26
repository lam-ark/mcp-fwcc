---
id: "cc_slot_mechanics:MultiplierReelModule:methods:help"
title: "MultiplierReelModule.help Method Implementation"
category: "cc_slot_mechanics"
tags: ["MultiplierReelModule", "multiplier_reel_module", "cc_slot_mechanics", "methods", "help"]
---

# 📖 `MultiplierReelModule.help()`

---

## 1. Method Signature

```typescript
help(HelpDocuments.MULTIPLIER_REELS_MODULE) export class MultiplierReelModule extends SlotBaseModule { @property(cc.Prefab) prefabMultiplierReel: cc.Prefab = null; _data: MultiplierReelData; _config: MultiplierReelConfig; _multiplierReels: cc.Node[] = []; onLoadExtend(): void
```

- **Scope**: `MultiplierReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
help(HelpDocuments.MULTIPLIER_REELS_MODULE)
export class MultiplierReelModule extends SlotBaseModule {
	@property(cc.Prefab) prefabMultiplierReel: cc.Prefab = null;
    
	_data: MultiplierReelData;
	_config: MultiplierReelConfig;
	_multiplierReels: cc.Node[] = [];

	onLoadExtend(): void {
		this._data = this.getComponent(MultiplierReelData);
		this._config = this.getComponent(MultiplierReelConfig);
        
		this.initReel();
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
