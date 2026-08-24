---
id: "cc_slot_module:SlotSymbolManager:methods:index"
title: "SlotSymbolManager Methods Index"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "methods", "index"]
---

# 📋 SlotSymbolManager Methods Index

---

## 1. Declared Methods Catalog

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`onLoadExtend(): void`](./onLoadExtend.md)** | `protected` | Initializes pool and registers developer debug listeners. |
| **[`initSymbolPool(): void`](./initSymbolPool.md)** | `public` | Pre-instantiates `initCount` symbol instances into `symbolPool`. |
| **[`setGameConfig(gameConfig: GameConfig): void`](./setGameConfig.md)** | `public` | Extracts `Priority` values into `layerConfig` for Z-order sorting. |
| **[`getSymbolByIndex(index: number, owner: string): cc.Node`](./getSymbolByIndex.md)** | `public` | Retrieves or allocates a symbol bound to a logical matrix index. |
| **[`getSymbol(owner: string, code: string): cc.Node`](./getSymbol.md)** | `public` | Borrows an active symbol node from the pool and tracks in `usingSymbols`. |
| **[`getSymbolFromPool(code: string): cc.Node`](./getSymbolFromPool.md)** | `public` | Pops a node from `NodePool` or instantiates a new one if pool is empty. |
| **[`removeSymbol(symbol: cc.Node, isForce: boolean): void`](./removeSymbol.md)** | `public` | Resets and returns a symbol to `symbolPool` (protects `STICKY` unless forced). |
| **[`returnSymbol(symbol: cc.Node): void`](./returnSymbol.md)** | `public` | Wrapper for recycling symbols or reparenting when pooling is disabled. |
| **[`removeAllSymbols(): void`](./removeAllSymbols.md)** | `public` | Reclaims all active non-sticky, non-gigablox symbols. |
| **[`findObjectByIndex(index: number): cc.Node`](./findObjectByIndex.md)** | `public` | Finds the active symbol instance matching a specific matrix index. |
| **[`createSymbol(code: string, size: cc.Vec2, parent: cc.Node, owner: string): cc.Node`](./createSymbol.md)** | `public` | Borrows, parents, and initializes a static symbol. |
| **[`createBlurSymbol(code: string, size: cc.Vec2, parent: cc.Node, owner: string): cc.Node`](./createBlurSymbol.md)** | `public` | Borrows, parents, and initializes a motion blur symbol. |
| **[`updateSymbolSiblingIndex(symbols: cc.Node[]): void`](./updateSymbolSiblingIndex.md)** | `public` | Reorders Sibling Index so high-priority winning symbols render on top. |
| **[`instantiateNewSymbol(): cc.Node`](./instantiateNewSymbol.md)** | `protected` | Instantiates a fresh symbol node from `template`. |
| **[`sortSymbols(symbols: cc.Node[]): cc.Node[]`](./sortSymbols.md)** | `protected` | Sorts symbols by `layerConfig` priority into rendering buckets. |
| **[`getSymbolModule(symbol: cc.Node): SlotSymbolModule`](./getSymbolModule.md)** | `public` | Fast cached retrieval of `SlotSymbolModule` component. |
| **[`resetAllEffectAndTasks(): void`](./resetAllEffectAndTasks.md)** | `protected` | Lifecycle reset placeholder. |
| **[`showLogUsingSymbolsWithOwner(tableFormat: number[]): void`](./showLogUsingSymbolsWithOwner.md)** | `public` | Debug logger printing active symbols grouped by owner and table format. |
| **[`showLogUsingSymbols(tableFormat: number[]): void`](./showLogUsingSymbols.md)** | `public` | Debug logger printing active symbols in a 2D matrix table format. |
