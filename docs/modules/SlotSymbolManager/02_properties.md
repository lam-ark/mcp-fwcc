---
id: "SlotSymbolManager:properties"
title: "SlotSymbolManager Properties & Config"
category: "cc_slot_module"
tags: ["properties", "config", "pool", "decorators"]
---

# SlotSymbolManager: Properties & Configuration

## 1. Cocos Creator Inspector Properties (`@property`)

| Property Name | Data Type | Default | Required | Description & Usage |
| :--- | :--- | :---: | :---: | :--- |
| **`template`** | `cc.Prefab` | `null` | **Yes** | Master Symbol Prefab containing `SlotSymbolModule`, Sprite, Spine Skeleton, and Animators. |
| **`initCount`** | `number` | `15` | No | Number of Symbol nodes pre-allocated into `cc.NodePool` during initialization (recommended: 15-25 for 5x3 grids). |
| **`isSymbolPool`** | `boolean` | `true` | No | `true`: Recycles nodes back to `cc.NodePool`. `false`: Keeps nodes allocated without unparenting. |

---

## 2. Runtime Internal State Variables

| State Variable | Data Type | Purpose & Lifecycle Scope |
| :--- | :--- | :--- |
| **`symbolPool`** | `cc.NodePool` | In-memory object pool storing idle Symbol nodes ready for reuse. |
| **`usingSymbols`** | `cc.Node[]` | Tracking array containing all active Symbol nodes currently placed on the reel matrix. |
| **`gameConfig`** | `GameConfig` | Injected game configuration holding symbol priorities and payout mapping tables. |
| **`layerConfig`** | `Record<string, number>` | Z-index priority lookup cache derived from `GameConfig.SYMBOL_CONFIG[key].Priority`. |
