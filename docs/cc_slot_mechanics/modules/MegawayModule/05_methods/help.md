---
id: "cc_slot_mechanics:MegawayModule:methods:help"
title: "MegawayModule.help Method Implementation"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "methods", "help"]
---

# 📖 `MegawayModule.help()`

---

## 1. Method Signature

```typescript
help(HelpDocuments.MEGAWAY_MODULE) export class MegawayModule extends SlotBaseModule { @inject(MoneyFormatter) moneyFormatter: eno.MoneyFormatter; @property(cc.Label) lbMegaway: cc.Label = null; @property defaultString: string = "..."; _data: MegawayData; onLoadExtend(): void
```

- **Scope**: `MegawayModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
help(HelpDocuments.MEGAWAY_MODULE)
export class MegawayModule extends SlotBaseModule {
	@inject(MoneyFormatter) moneyFormatter: eno.MoneyFormatter;
	@property(cc.Label) lbMegaway: cc.Label = null;
	@property defaultString: string = "...";

	_data: MegawayData;
	onLoadExtend(): void {
		this.moduleEvent.on('UPDATE_MEGAWAY', this.updateTotalMegaway, this);
		this.moduleEvent.on('REEL_STOPPED', this.onReelStopped, this);
		this.moduleEvent.on('RESET_MEGAWAY', this.reset, this);
		this._data = this.node.getComponent(MegawayData);
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
