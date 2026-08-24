---
id: "cc_slot_module:SlotTableModule:methods:index"
title: "SlotTableModule Methods Index"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "methods", "index"]
---

# 📋 SlotTableModule Methods Index

---

## 1. Declared Methods Catalog

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`onLoadExtend(): void`](./onLoadExtend.md)** | `protected` | Resolves config, symbol pool, and data bindings. |
| **[`getConfigValue(): void`](./getConfigValue.md)** | `protected` | Caches `TOTAL_COLS` and `SYMBOL_WIDTH`. |
| **[`registerEvents(): void`](./registerEvents.md)** | `protected` | Binds all `this.moduleEvent` event listeners. |
| **[`initTable(): void`](./initTable.md)** | `public` | Computes offsets and instantiates all reel columns from prefab. |
| **[`syncTable(matrix?: string[][], gameMode?: number): void`](./syncTable.md)** | `public` | Reconstructs matrix symbols instantaneously for resume. |
| **[`mapResumeMatrix(): void`](./mapResumeMatrix.md)** | `public` | Virtual hook for symbol remapping upon reconnection. |
| **[`removeAllSymbols(): void`](./removeAllSymbols.md)** | `public` | Flushes active symbol instances back into the node pool. |
| **[`startSpin(): void`](./startSpin.md)** | `public` | Sets state to `START` and initiates reel spinning animations. |
| **[`stopSpin(matrix?: string[][], _forceStop?: boolean): Promise<void>`](./stopSpin.md)** | `public` | Ingests target matrix, delegates column stops, and returns a completion Promise. |
| **[`stopSpinWithRandomMatrix(): Promise<void>`](./stopSpinWithRandomMatrix.md)** | `public` | Stops spinning reels with fallback random symbols upon cancel/disconnect. |
| **[`resetAllEffectAndTasks(): void`](./resetAllEffectAndTasks.md)** | `protected` | Aborts active spinning animations. |
| **[`fastStop(): void`](./fastStop.md)** | `public` | Accelerates reel deceleration to instantly stop spinning columns. |
| **[`isFastToResult(): boolean`](./isFastToResult.md)** | `public` | Returns `true` if table is fast stopping. |
| **[`hideSymbolsOnReel(col: number): void`](./hideSymbolsOnReel.md)** | `public` | Deactivates visibility of a specific reel column. |
| **[`getSymbolByColRow(col: number, row: number): cc.Node`](./getSymbolByColRow.md)** | `public` | Returns the symbol node at specific grid coordinates. |
| **[`getSymbolByCol(col: number): cc.Node[]`](./getSymbolByCol.md)** | `public` | Returns all real symbol nodes in a column. |
| **[`showBeautyMatrix(): void`](./showBeautyMatrix.md)** | `public` | Renders a curated attract-mode matrix when entering scene. |
| **[`unregisterEvents(): void`](./unregisterEvents.md)** | `protected` | Removes all `this.moduleEvent` event listeners. |
| **[`onDestroy(): void`](./onDestroy.md)** | `public` | Cleanup lifecycle hook. |
| **[`createReelNode(col: number): cc.Node`](./createReelNode.md)** | `protected` | Instantiates and positions an individual reel column node. |
| **[`onReelStop(reelIndex: number): void`](./onReelStop.md)** | `protected` | Increments stopped column counter and resolves table stop Promise when all finish. |
| **[`onReelPreStop(reelIndex: number): void`](./onReelPreStop.md)** | `protected` | Dispatches audio clicks and near-win anticipation events right before bounce. |
| **[`onChangeState(state: TableSpinState): void`](./onChangeState.md)** | `protected` | Mutates state and forwards to extension hook. |
| **[`onChangeStateExtend(_state: TableSpinState): void`](./onChangeStateExtend.md)** | `protected` | Virtual hook for downstream state change reactions. |
| **[`onReelStopExtend(_reelIndex: number): void`](./onReelStopExtend.md)** | `protected` | Virtual hook for column landing VFX / mascot triggers. |
| **[`onReelPreStopExtend(_reelIndex: number): void`](./onReelPreStopExtend.md)** | `protected` | Virtual hook for column anticipation audio triggers. |
