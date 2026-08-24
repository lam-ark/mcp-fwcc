---
id: "cc_slot_module:SlotSymbolManager:method:createSymbol"
title: "SlotSymbolManager.createSymbol() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "createSymbol"]
---

# `SlotSymbolManager.createSymbol(code: string, size: cc.Vec2, parent: cc.Node, owner: string): cc.Node`

---

## 1. Method Signature
```typescript
public createSymbol(code: string, size: cc.Vec2, parent: cc.Node, owner: string = ""): cc.Node
```

---

## 2. Detailed Algorithmic Execution Logic
1. Obtains a symbol node: `this.getSymbol(owner, code)`.
2. Sets parent: `symbol.setParent(parent)`.
3. Calls `symbolModule.init(code, size)`.
4. Switches presentation: `symbolModule.changeToStaticSymbol()`.
5. Returns node.

---

## 3. Un-truncated Source Code Implementation
```typescript
createSymbol(code: string, size: cc.Vec2, parent: cc.Node, owner: string = ""): cc.Node {
    const symbol = this.getSymbol(owner, code);
    symbol.setParent(parent);

    const symbolModule = this.getSymbolModule(symbol);
    symbolModule.init(code, size);
    symbolModule.changeToStaticSymbol();

    return symbol;
}
```
