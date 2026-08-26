---
id: "cc_slot_mechanics:MegaReelModule:methods:updateMegaIndex"
title: "MegaReelModule.updateMegaIndex Method Implementation"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "updateMegaIndex"]
---

# 📖 `MegaReelModule.updateMegaIndex()`

---

## 1. Method Signature

```typescript
updateMegaIndex(hasMulti:any): void
```

- **Scope**: `MegaReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
protected updateMegaIndex(hasMulti:any): void {
        this.megaIndex = this.reelIndex;
        if (this.megaData.length) {
            this.megaData.forEach(data => {
                if (data["reel"] != this.reelIndex) {
                    this.megaIndex = Number(data["reel"]);
                }
            });
        }
        if (hasMulti) {
            this.megaIndex = 0;
        }
    }

    protected spawnReelSymbol(): cc.Node {
		let code = "", size = Vec2.ONE;
		let skip = false;
		let stop = 0;
		let indexSymbol = -1;
		let isBlurSymbol = false;

		if (this.reelManager.state === ReelSpinState.SHOWING_RESULT && this.data.length) {
			const symbolValue = this.data[this.reelManager.index];
			indexSymbol = this.getIndexSymbol(this.reelManager.index);

			if (symbolValue) {
				({ symbolCode: code, symbolSize: size, stop } = this.mapSymbolData(symbolValue));
				this.reelManager.stop += stop;
			}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
