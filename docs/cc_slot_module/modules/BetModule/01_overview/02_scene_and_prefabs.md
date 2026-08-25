---
id: "cc_slot_module:BetModule:overview:scene_and_prefabs"
title: "BetModule Scene Node Hierarchy & Prefab Specifications"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "overview", "scene_prefabs", "hierarchy", "hud"]
---

# 🏛️ BetModule Scene Node Hierarchy & Prefab Specifications

---

## 1. Live Inspected Scene Hierarchy Structure

Inspected directly from the canonical active template scene (`g9000L.fire` / `g9666L.fire`) via `cocos24-mcp-server`:

```text
Canvas
└── Director [Components: GameConfig, GameDataStore, GameInit, GameDirector]
    └── UIManager [Component: UIManagerModule]
        ├── Bet [Component: BetModule]
        │   ├── Frame_TotalBet [Component: cc.Sprite]
        │   ├── Frame_BetSize [Component: cc.Sprite]
        │   ├── TotalBetLabel [Components: BetLabelModule, cc.Label]
        │   ├── DenomLabel [Components: DenomLabel, cc.Label]
        │   ├── TotalLineLabel [Component: cc.Label]
        │   ├── TotalCreditLabel [Components: TotalBetLabel, cc.Label]
        │   ├── BetIncrease [Components: cc.Sprite, cc.Button]
        │   └── BetDecrease [Components: cc.Sprite, cc.Button]
        └── ExtraBet [Component: ExtraBetModule]
            ├── Frame_ExtraBet [Component: cc.Sprite]
            ├── ExtraBetLabel [Components: ExtraBetLabel, cc.Label]
            ├── ExtraBetIncrease [Components: cc.Sprite, cc.Button]
            └── ExtraBetDecrease [Components: cc.Sprite, cc.Button]
```

---

## 2. Referenced Prefabs & Asset Inventory

| Name | Asset UUID | Asset Path | Purpose |
| :--- | :--- | :--- | :--- |
| `Bet` | `6238a2e3-e80c-407c-846b-3192d835ca83` | `assets/cc-common/cc-slot-module/GUI/Bet/Bet.prefab` | Bottom wager control deck container prefab. |
| `ExtraBet` | `904d3559-c2e6-4bb6-afdd-932508b9bdf0` | `assets/cc-common/cc-slot-module/GUI/Bet/ExtraBet.prefab` | Side-bet multiplier / feature boost controller prefab. |

---

## 3. Companion Subsystems & Node Bindings

1. **`BetLabelModule` / `DenomLabel` / `TotalBetLabel`**: Specialized helper scripts mounted on child labels for currency symbol injection and reactive text formatting.
2. **`cc.Button` (`BetIncrease`, `BetDecrease`)**: Wired to `onIncreaseBet()` and `onDecreaseBet()` methods.
3. **`UIManagerModule` Parent**: Orchestrates HUD z-ordering and responsive positioning.
