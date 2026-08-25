---
id: "cc_slot_module:WalletModule:overview:scene_and_prefabs"
title: "WalletModule Scene Node Hierarchy & Prefab Specifications"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "overview", "scene_prefabs", "hierarchy", "hud"]
---

# 🏛️ WalletModule Scene Node Hierarchy & Prefab Specifications

---

## 1. Live Inspected Scene Hierarchy Structure

Inspected directly from the canonical active template scene (`g9000L.fire` / `g9666L.fire`) via `cocos24-mcp-server`:

```text
Canvas
└── Director [Components: GameConfig, GameDataStore, GameInit, GameDirector]
    └── UIManager [Component: UIManagerModule]
        ├── Wallet [Component: WalletModule]
        │   ├── Frame_Wallet [Component: cc.Sprite]
        │   ├── RealWallet [Components: WalletLabel, cc.Label] (Bound to realWallet property)
        │   └── TrialWallet [Components: WalletLabel, cc.Label] (Bound to trialWallet property)
        ├── TrialModeTag [Components: TrialModeTag, cc.Sprite]
        └── TrialModePrefab [Component: TrialModeManager]
            └── Panel
                ├── gradient [Components: cc.Sprite, cc.BlockInputEvents]
                ├── Options (Option1, Option2, Option3)
                ├── ButtonSkip [Components: cc.Sprite, cc.Button]
                └── ButtonBack [Components: BackToRealModeButton, cc.Sprite, cc.Button]
```

---

## 2. Referenced Prefabs & Asset Inventory

| Name | Asset UUID | Asset Path | Purpose |
| :--- | :--- | :--- | :--- |
| `Wallet` | `d984cbf4-43e2-4101-97bb-b8db97b22197` | `assets/cc-common/cc-slot-module/GUI/Wallet/Wallet.prefab` | Dual currency player balance display container prefab. |
| `TrialModePrefab` | `ce9424cb-66bd-44a6-ac35-a104c422c61e` | `assets/cc-common/cc-slot-module/GUI/TrialMode/TrialModePrefab.prefab` | Volatility and balance selection popup for demo play. |
| `TrialModeTag` | `68690e0f-8bb1-409c-915a-e81ea3f5925b` | `assets/cc-common/cc-slot-module/GUI/TrialMode/TrialModeTag.prefab` | Visual demo mode banner badge. |

---

## 3. Companion Subsystems & Node Bindings

1. **`WalletLabel`**: Child component attached to `RealWallet` and `TrialWallet` handling string localization, comma formatting, and balance count-up tweening.
2. **`TrialModeManager`**: Sibling manager handling state transitions and credit allotments when entering/exiting Demo Mode.
3. **`UIManagerModule` Parent**: Controls overall HUD canvas coordinates and layout anchoring.
