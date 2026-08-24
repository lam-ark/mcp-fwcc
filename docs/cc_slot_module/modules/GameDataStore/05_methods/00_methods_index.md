---
id: "cc_slot_module:GameDataStore:methods:index"
title: "GameDataStore Methods Index"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "methods", "index"]
---

# 📋 GameDataStore Methods Index

---

## 1. Lifecycle, Registry & State Setup
* [`onLoad(): void`](./onLoad.md)
* [`setConfig(gameConfig): void`](./setConfig.md)
* [`setGameSpeed(speed): void`](./setGameSpeed.md)
* [`registerModule(module): void`](./registerModule.md)
* [`parseDataPS(data): void`](./parseDataPS.md)
* [`updateDataModules(): void`](./updateDataModules.md)

---

## 2. State Slicing & Storage Lookups
* [`getCurrentGameModeData(): any`](./getCurrentGameModeData.md)
* [`getGameModeData(gameMode): any`](./getGameModeData.md)
* [`setGameModeDataMap(key, value): void`](./setGameModeDataMap.md)
* [`convertData(data): void`](./convertData.md)
* [`setDataMap(key, value): void`](./setDataMap.md)
* [`mapNewKeys(playSession, mapKeys): Record<string, any>`](./mapNewKeys.md)
* [`hasPlaySession(): boolean`](./hasPlaySession.md)
* [`getNextGameMode(): number`](./getNextGameMode.md)

---

## 3. Win Calculation, Tiers & Timing Queries
* [`getWinAmountPS(): number`](./getWinAmountPS.md)
* [`getResumeWinAmount(): number`](./getResumeWinAmount.md)
* [`isBigWin(): boolean`](./isBigWin.md)
* [`getBigWinData(): any`](./getBigWinData.md)
* [`getJackpotInfo(): any`](./getJackpotInfo.md)
* [`getWinAmountInfo(win?): any`](./getWinAmountInfo.md)
* [`getWinLevel(win?): number`](./getWinLevel.md)
* [`getCountMoneyTime(level): number`](./getCountMoneyTime.md)
* [`getWinLineTime(level): number`](./getWinLineTime.md)

---

## 4. Reset & Cleanup Actions
* [`resetDataPS(): void`](./resetDataPS.md)
* [`resetWinAmount(): void`](./resetWinAmount.md)
