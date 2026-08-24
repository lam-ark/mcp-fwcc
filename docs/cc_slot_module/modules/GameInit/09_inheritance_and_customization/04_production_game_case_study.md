---
id: "cc_slot_module:GameInit:customization:production_game_case_study"
title: "Production Case Study: Root Bootstrap in Red Cliff Slot (g9666L)"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "customization", "case_study", "red_cliff", "g9666L", "production_code"]
---

# 📖 Production Case Study: Root Bootstrap in Red Cliff Slot (`g9666L`)

## 1. Context & Architecture Choice

In **Red Cliff (`g9666L`)**, the development team utilizes the **Standard Companion Bootstrap Pattern**:
* The base `GameInit.ts` is mounted unmodified on `Canvas/Director`.
* The game-specific configurations and key remappings are injected through subclassed sibling components (`GameConfig9666` and `GameDataStore9666`).

```text
Canvas/Director
├── GameInit.ts            ➔ (Standard SDK Bootstrap & IoC provider)
├── GameConfig9666.ts      ➔ (Custom Red Cliff 5-column Megaways config)
├── GameDataStore9666.ts   ➔ (Custom multiplier & win amount key mappings)
└── GameDirector.ts        ➔ (Spin loop coordinator)
```

---

## 2. Dynamic Component Resolution in `GameInit`

Because `GameInit.initializeConfigAndDataStore()` dynamically queries components:
```typescript
initializeConfigAndDataStore(): void {
    this._gameConfig = this.node.getComponent(GameConfig);
    this._dataStore = this.node.getComponent(GameDataStore);
    this._dataStore.setConfig(this._gameConfig);
}
```
When `GameConfig9666` (which extends `GameConfig`) and `GameDataStore9666` (which extends `GameDataStore`) are mounted on `Canvas/Director`, `this.node.getComponent()` polymorphically resolves the custom subclasses and provides them to the entire game seamlessly.
