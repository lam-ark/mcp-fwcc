---
id: "cc_slot_module:GameDataStore:overview:scene_and_prefabs"
title: "GameDataStore Scene Hierarchy & IoC Registration"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "overview", "scene", "ioc"]
---

# 🌳 GameDataStore Scene Hierarchy & IoC Registration

## 1. Scene Hierarchy Placement

`GameDataStore` is attached at the root Director level so it is instantiated before child UI modules:

```text
Canvas/Director
├── GameDataStore (Global Single Source of Truth, IoC container provided)
├── GameDirector (Root game coordinator)
└── GameMode
    ├── NormalGameDirector
    ├── FreeGameDirector
    └── BoardG
        ├── Table (contains SlotTableData extending BaseDataModule)
        └── Payline (contains SlotTablePaylineData extending BaseDataModule)
```

---

## 2. Auto-Discovery in `onLoad`

During scene bootstrapping, `GameDataStore.onLoad()` automatically crawls all descendant nodes:
```typescript
protected onLoad(): void {
    this.getComponentsInChildren("BaseDataModule").forEach((module) => {
        this.registerModule(module as BaseDataModule);
    });
}
```
Any `BaseDataModule` dynamically instantiated later also registers itself explicitly via `BaseDataModule.start() ➔ dataStore.registerModule(this)`.
