---
id: "cc_slot_mechanics:MegaReelModule:methods:runReelSpin"
title: "MegaReelModule.runReelSpin Method Implementation"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "runReelSpin"]
---

# 📖 `MegaReelModule.runReelSpin()`

---

## 1. Method Signature

```typescript
runReelSpin(mode): void
```

- **Scope**: `MegaReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
runReelSpin(mode): void {
        super.runReelSpin(mode);
        this.listSymbols.forEach((symbol) => {
			const indexSymbol = SlotSymbolModule.getModuleComponent(symbol).getIndex();
            const isHidden = this.checkSymbolHidden(symbol);
            if (isHidden) {
                // check to hide small symbols
                this.hideSmallSymbol(symbol, indexSymbol);
            }
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
