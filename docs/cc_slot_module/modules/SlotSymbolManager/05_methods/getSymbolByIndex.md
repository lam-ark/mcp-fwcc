---
id: "cc_slot_module:SlotSymbolManager:method:getSymbolByIndex"
title: "SlotSymbolManager.getSymbolByIndex() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "getSymbolByIndex", "matrix_index"]
---

# `SlotSymbolManager.getSymbolByIndex(index: number, owner: string): cc.Node`

---

## 1. Method Signature
```typescript
public getSymbolByIndex(index: number = SymbolIndexType.UNUSED, owner: string = SymbolOwnerType.SYMBOL_MANAGER): cc.Node
```

---

## 2. Detailed Algorithmic Execution Logic
1. Attempts to find an existing active symbol with the given index via `let symbol = this.findObjectByIndex(index)`.
2. If not found, allocates a new symbol via `symbol = this.getSymbol()`.
3. Retrieves `SlotSymbolModule` on the node.
4. Sets owner metadata: `symbolModule.setOwner(owner)`.
5. Sets index metadata: `symbolModule.setIndex(index)`.
6. Returns the symbol node.

---

## 3. Un-truncated Source Code Implementation
```typescript
getSymbolByIndex(index: number = SymbolIndexType.UNUSED, owner: string = SymbolOwnerType.SYMBOL_MANAGER): cc.Node {
    let symbol = this.findObjectByIndex(index);
    if (!symbol) {
        symbol = this.getSymbol();
    }

    const symbolModule = this.getSymbolModule(symbol);
    symbolModule.setOwner(owner);
    symbolModule.setIndex(index);
    return symbol;
}
```
