---
id: "cc_slot_module:GameDataStore:overview:scene_and_prefabs"
title: "GameDataStore Scene Hierarchy & Child BaseDataModules"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "overview", "scene", "prefabs", "BaseDataModule", "director"]
---

# 🌳 GameDataStore Scene Hierarchy & Child BaseDataModules

## 1. Canonical Scene Node Anchor

`GameDataStore` is attached to `Canvas/Director` and automatically scans its child hierarchy in `onLoad()` for any components inheriting from `BaseDataModule`:

```text
Canvas/Director [GameInit.ts, GameConfig.ts, GameDataStore.ts]
├── Canvas/Director/TableData       ➔ (TableDataModule extends BaseDataModule)
├── Canvas/Director/BetData         ➔ (BetDataModule extends BaseDataModule)
├── Canvas/Director/WalletData      ➔ (WalletDataModule extends BaseDataModule)
└── Canvas/Director/FreeSpinData    ➔ (FreeSpinDataModule extends BaseDataModule)
```

---

## 2. Child Module Auto-Discovery
During `onLoad()`, `GameDataStore` executes:
```typescript
protected onLoad(): void {
    this.getComponentsInChildren("BaseDataModule").forEach((module) => {
        this.registerModule(module as BaseDataModule);
    });
}
```
Any data module mounted underneath `Canvas/Director` is registered into `this._dataModules` without requiring manual inspector wiring.
