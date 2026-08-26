---
id: "cc_slot_mechanics:MegaReelModule:methods:help"
title: "MegaReelModule.help Method Implementation"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "help"]
---

# 📖 `MegaReelModule.help()`

---

## 1. Method Signature

```typescript
help(HelpDocuments.MEGA_REEL_MODULE) export class MegaReelModule extends SlotReelModule { protected megaData: number[]; protected megaIndex: number; protected megaSymbolList: cc.Node[] = []; /* * reelData { symbols, megaData, hasMulti} */ showResult(reelData, reelStopCallback, reelPreStopCallback): void
```

- **Scope**: `MegaReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
help(HelpDocuments.MEGA_REEL_MODULE)
export class MegaReelModule extends SlotReelModule {

    protected megaData: number[];
    protected megaIndex: number;
    protected megaSymbolList: cc.Node[] = [];

    /*
    * reelData { symbols, megaData, hasMulti}
    */
    showResult(reelData, reelStopCallback, reelPreStopCallback): void {
		this.resultSymbols = [];
        this.megaData = reelData.megaData;

        this.updateMegaIndex(reelData.hasMulti);
		this.updateReelResult(reelData.symbols);
		this.setUpStopCallback();
		this.reelStopCB = reelStopCallback;
		this.reelPreStopCB = reelPreStopCallback;
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
