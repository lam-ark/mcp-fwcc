---
id: "cc_slot_module:GameDataStore:methods:index"
title: "GameDataStore Methods & API Specification Index"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "methods", "api", "index"]
---

# 🚀 GameDataStore Methods & API Specification Index

## 1. Master Method Index

| Method Signature | Visibility | Return Type | Purpose |
| :--- | :--- | :--- | :--- |
| **[`parseDataPS(data): void`](./parseDataPS.md)** | `public` | `void` | Ingests and stores raw server spin response payload into `this.playSession`. |
| **[`updateDataModules(): void`](./updateDataModules.md)** | `public` | `void` | Converts `playSession` and broadcasts deep-cloned key values to child `BaseDataModule` instances. |
| **[`getWinAmountInfo(win?): object`](./getWinAmountInfo.md)** | `public` | `object` | Calculates win level (1..4), coin counting time, and win line display delay. |
| **[`getWinLevel(win?): number`](./getWinLevel.md)** | `public` | `number` | Calculates `rate = win / totalBet` against `GameConfig.WIN_LEVEL_CONFIG.THRESHOLDS`. |
| **[`getBigWinData(): object`](./getBigWinData.md)** | `public` | `object` | Returns big win metadata payload for cutscenes and celebration modules. |
| **[`getJackpotInfo(): object \| null`](./getJackpotInfo.md)** | `public` | `object \| null` | Parses jackpot string format `['9000_4_GRAND;2500000']` into type and numeric value. |
| **[`registerModule(module): void`](./registerModule.md)** | `public` | `void` | Adds a `BaseDataModule` component into the update broadcast set. |
| **[`mapNewKeys(playSession, mapKeys): object`](./mapNewKeys.md)** | `public` | `object` | Utility remapping server payload JSON key names. |
