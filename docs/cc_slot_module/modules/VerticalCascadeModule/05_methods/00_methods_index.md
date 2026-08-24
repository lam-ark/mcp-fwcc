---
id: "cc_slot_module:VerticalCascadeModule:methods:index"
title: "VerticalCascadeModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "methods", "index"]
---

# 📚 VerticalCascadeModule Methods Catalog Index

---

## 1. Declared Methods Index

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend`](./onLoadExtend.md)** | `public` | `void` | Initializes config, layout positions, and caches symbol manager. |
| **[`getConfig`](./getConfig.md)** | `public` | `CascadeModuleConfig` | Retrieves `CascadeModuleConfig` component. |
| **[`registerEvents`](./registerEvents.md)** | `protected` | `void` | Subscribes to `TABLE_START_RESPIN` and `TABLE_STOP_RESPIN`. |
| **[`initLayout`](./initLayout.md)** | `protected` | `void` | Computes 2D centered coordinate positions for all cells. |
| **[`resetSymbolList`](./resetSymbolList.md)** | `protected` | `void` | Allocates empty 2D array matching `SYMBOL_INDEXES`. |
| **[`updateLatestMatrix`](./updateLatestMatrix.md)** | `public` | `void` | Shallow-clones matrix parameter. |
| **[`startRespin`](./startRespin.md)** | `public` | `void` | Eliminates winning symbols based on `traceWay`. |
| **[`stopRespin`](./stopRespin.md)** | `public` | `Promise<void>` | Prepares and launches gravity fall tweens; returns Promise. |
| **[`resetAllEffectAndTasks`](./resetAllEffectAndTasks.md)**| `public` | `void` | Interrupt recovery reconstructing visible table symbols. |
| **[`stopRespinWithNearwin`](./stopRespinWithNearwin.md)** | `protected` | `Promise<void>` | Drop execution with near-win column delays. |
| **[`preparingSymbols`](./preparingSymbols.md)** | `protected` | `void` | Calls `processOldSymbols()` and `processNewSymbols()`. |
| **[`droppingSymbols`](./droppingSymbols.md)** | `protected` | `void` | Calls `fallingSymbols()` on dropped and new symbol lists. |
| **[`droppingSymbolsWithNearwin`](./droppingSymbolsWithNearwin.md)**| `protected` | `void` | Delayed drops for near-win suspense. |
| **[`checkForDropSymbols`](./checkForDropSymbols.md)** | `protected` | `void` | Identifies all column indices with eliminated symbols. |
| **[`removeDroppedSymbols`](./removeDroppedSymbols.md)** | `protected` | `void` | Removes eliminated symbols from the grid. |
| **[`processOldSymbols`](./processOldSymbols.md)** | `protected` | `void` | Calculates drop targets for surviving symbols. |
| **[`processNewSymbols`](./processNewSymbols.md)** | `protected` | `void` | Spawns incoming symbols and updates sibling Z-indexes. |
| **[`fallingSymbols`](./fallingSymbols.md)** | `protected` | `void` | Iterates and triggers `playFalling()` on symbol list. |
| **[`fallingNewSymbols`](./fallingNewSymbols.md)** | `protected` | `void` | Drops new symbols and schedules completion. |
| **[`fallingSymbolsWithDelay`](./fallingSymbolsWithDelay.md)**| `protected` | `void` | Schedules delayed fall for near-win effects. |
| **[`getFallingTime`](./getFallingTime.md)** | `protected` | `Object` | Computes fall and bounce timings with Turbo scaling. |
| **[`playFalling`](./playFalling.md)** | `protected` | `void` | Executes `cc.tween` with `cubicIn` and bounce curve. |
| **[`completeCascading`](./completeCascading.md)** | `protected` | `void` | Schedules final step callback and clears state. |
| **[`updateSymbolList`](./updateSymbolList.md)** | `protected` | `void` | Reconstructs visual symbol nodes matching current matrix. |
| **[`removeSymbolAt`](./removeSymbolAt.md)** | `protected` | `void` | Recycles symbol at `(col, row)` to symbol pool. |
| **[`getOldSymbols`](./getOldSymbols.md)** | `protected` | `void` | Computes shift offsets for surviving symbols in a column. |
| **[`getNewSymbols`](./getNewSymbols.md)** | `protected` | `void` | Computes top entrance positions for new symbols in a column. |
| **[`createNewSymbol`](./createNewSymbol.md)** | `protected` | `cc.Node` | Fetches symbol from manager, initializes code, and parents to container. |
| **[`mapSymbolData`](./mapSymbolData.md)** | `protected` | `Object` | Parses `code_width_height` into `{ code, size }`. |
| **[`calculatePosition`](./calculatePosition.md)** | `protected` | `Object` | Computes `{ targetPos, targetBouncePos }`. |
| **[`getSymbolIndex`](./getSymbolIndex.md)** | `protected` | `number` | Looks up global index from `SYMBOL_INDEXES[col][row]`. |
| **[`swapSymbol`](./swapSymbol.md)** | `protected` | `void` | Swaps grid array slots within a column. |
| **[`clearSymbols`](./clearSymbols.md)** | `protected` | `void` | Returns all cascade symbol nodes to `SlotSymbolManager`. |
| **[`getSymbolAt`](./getSymbolAt.md)** | `protected` | `cc.Node` | Retrieves node reference at visual matrix coordinate. |
| **[`convertRow`](./convertRow.md)** | `protected` | `number` | Maps traceWay row to variable-height reel row. |
| **[`onDestroy`](./onDestroy.md)** | `public` | `void` | Unregisters event listeners. |
