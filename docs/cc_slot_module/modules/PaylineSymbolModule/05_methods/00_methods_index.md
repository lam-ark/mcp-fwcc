---
id: "cc_slot_module:PaylineSymbolModule:methods:index"
title: "PaylineSymbolModule Methods Index"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "index"]
---

# 📋 PaylineSymbolModule Methods Index

---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`registerPaylineEvents(): void`](./registerPaylineEvents.md)** | `protected` | Subscribes to `payLineEmitter` and `moduleEvent` topics. |
| **[`showIdleSymbols(symbols): void`](./showIdleSymbols.md)** | `protected` | Puts symbols into idle looping animation state. |
| **[`setupPayLines(data): void`](./setupPayLines.md)** | `protected` | Stores incoming matrix and payline models. |
| **[`blinkAllPayLines(data): void`](./blinkAllPayLines.md)** | `protected` | Concurrently highlights all winning symbols on Stage 1. |
| **[`stopAllPayLines(): void`](./stopAllPayLines.md)** | `protected` | Halts all symbol animations and restores highlights. |
| **[`dimAllPayLines(excludeSymbols): void`](./dimAllPayLines.md)** | `protected` | Darkens non-winning symbols with `DISABLE_HIGHLIGHT`. |
| **[`showSinglePayLine(payLine, duration): void`](./showSinglePayLine.md)** | `protected` | Highlights winning symbols for a single line in cycle. |
| **[`showJackpotLine(payLine, duration): void`](./showJackpotLine.md)** | `protected` | Highlights jackpot winning symbols. |
| **[`showSpecialSymbolById(symbolId, duration): void`](./showSpecialSymbolById.md)** | `protected` | Highlights symbols matching a specific symbol ID code. |
| **[`clearAll(): void`](./clearAll.md)** | `protected` | Returns all symbol instances to `SlotSymbolManager` pool. |
| **[`getSymbol(reel, row): cc.Node`](./getSymbol.md)** | `protected` | Retrieves or allocates symbol node by coordinates. |
| **[`getAllWinSymbols(): cc.Node[]`](./getAllWinSymbols.md)** | `protected` | Returns nodes of all winning symbols across all lines. |
| **[`getWinSymbolsInPayLine(payLine): cc.Node[]`](./getWinSymbolsInPayLine.md)** | `protected` | Returns nodes of winning symbols for a specific line. |
| **[`mapSymbolToPayLine(): void`](./mapSymbolToPayLine.md)** | `protected` | Maps current matrix to 2D node array. |
| **[`updateSymbolSiblingIndex(symbols): void`](./updateSymbolSiblingIndex.md)** | `protected` | Reorders z-indices and partitions dimmed containers. |
| **[`showListWinSymbols(symbolSet, duration): void`](./showListWinSymbols.md)** | `protected` | Helper applying dims and playing animations. |
| **[`playSymbolAnimation(symbol, duration): void`](./playSymbolAnimation.md)** | `protected` | Dispatches `PLAY_ANIMATION_WIN` and emits event. |
