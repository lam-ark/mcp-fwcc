---
id: "SlotSymbolManager:methods"
title: "SlotSymbolManager Methods & API Reference"
category: "cc_slot_module"
tags: ["api", "methods", "pool", "functions"]
methods: ["initSymbolPool", "getSymbol", "removeSymbol", "removeAllSymbols", "cleanStickySymbols", "getSymbolByIndex"]
---

# SlotSymbolManager: Methods & API Reference

---

## 1. `initSymbolPool(): void`
* **Purpose**: Instantiates `cc.NodePool` and pre-allocates `this.initCount` Symbol node instances from `this.template`.
* **Execution Timing**: Automatically called during `onLoadExtend()`.

---

## 2. `getSymbol(owner?: string, code?: string): cc.Node`
* **Purpose**: Retrieves a Symbol node from the pool to be placed on a reel column or used by a cascade feature.
* **Parameters**:
  * `owner` (`string`, optional): Identifier of the caller entity (e.g. `'Reel_0'`, `'CascadeFeature'`).
  * `code` (`string`, optional): Symbol asset identifier code (e.g. `'W'`, `'A'`, `'K'`).
* **Returns**: `cc.Node` - Active symbol node with `active = true`.
* **Execution Flow**:
  1. Calls `this.getSymbolFromPool(code)`. If pool is empty, dynamically instantiates via `instantiateNewSymbol()`.
  2. Sets ownership via `symbolModule.setOwner(owner)`.
  3. Registers node into active tracking array `this.usingSymbols.push(symbol)`.
  4. Returns the ready node.

---

## 3. `removeSymbol(symbol: cc.Node, isForce: boolean = false): void`
* **Purpose**: Safely recycles a Symbol node back to `cc.NodePool`.
* **Parameters**:
  * `symbol` (`cc.Node`): Target symbol node to remove.
  * `isForce` (`boolean`, default: `false`): When `true`, forces recycling even if the symbol is a Sticky Wild.
* **Safety Guardrails**:
  * If `symbolModule.getIndex() === SymbolIndexType.STICKY` and `isForce === false`: **Skips removal** (preserves sticky wilds across consecutive respins).
  * Calls `symbolModule.resetBeforeBackToPool()` to clean up dirty animation states.
  * Removes from `this.usingSymbols` array.
  * Recycles into `this.symbolPool.put(symbol)`.

---

## 4. `removeAllSymbols(): void`
* **Purpose**: Cleans all active symbols from the table upon starting a new spin round. Automatically ignores special symbols marked as `STICKY` or `GIGABLOX`.

---

## 5. `cleanStickySymbols(): void`
* **Purpose**: Forcefully removes (`isForce = true`) all Sticky Wild symbols upon completion of a Free Spin session or bonus round.
