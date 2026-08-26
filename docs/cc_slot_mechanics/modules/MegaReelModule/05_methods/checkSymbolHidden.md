---
id: "cc_slot_mechanics:MegaReelModule:methods:checkSymbolHidden"
title: "MegaReelModule.checkSymbolHidden Method Implementation"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "checkSymbolHidden"]
---

# 📖 `MegaReelModule.checkSymbolHidden()`

---

## 1. Method Signature

```typescript
checkSymbolHidden(symbol:cc.Node): boolean
```

- **Scope**: `MegaReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
protected checkSymbolHidden(symbol:cc.Node):boolean {
        const indexSymbol = SlotSymbolModule.getModuleComponent(symbol).getIndex();
        return (indexSymbol >= 0);
    }

    protected recycleSymbol(): void {
		if (!this.listSymbols.length) {
			return;
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
