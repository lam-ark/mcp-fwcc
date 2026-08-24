---
id: "cc_slot_module:SlotSymbolManager:recipe:custom_sticky_wild_tracking"
title: "Recipe: Implementing Persistent Sticky Wild Symbols"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "recipe", "sticky_wild"]
---

# 🍳 Recipe: Implementing Persistent Sticky Wild Symbols

## 1. Problem Statement
In Free Spins, Wild symbols that land on reels must stay locked in place across subsequent spins until the free spin counter hits 0.

---

## 2. Step-by-Step Implementation

### Step 1: Tag Sticky Wilds on Reel Stop
```typescript
onWildLanded(wildNode: cc.Node): void {
    const symbolModule = this.symbolManager.getSymbolModule(wildNode);
    symbolModule.setIndex(SymbolIndexType.STICKY);
    symbolModule.setOwner("STICKY_FEATURE");
}
```

### Step 2: Clear Sticky Wilds on Free Spins Exit
```typescript
onExitFreeSpins(): void {
    const stickySymbols = this.symbolManager.usingSymbols.filter(node => {
        const mod = this.symbolManager.getSymbolModule(node);
        return mod && mod.getIndex() === SymbolIndexType.STICKY;
    });

    stickySymbols.forEach(node => {
        this.symbolManager.removeSymbol(node, true); // Force recycle
    });
}
```
