---
id: "cc_slot_module:UIManagerModule:overview:scene_and_prefabs"
title: "UIManagerModule Scene Node Hierarchy & Prefab Specifications"
category: "cc_slot_module"
tags: ["UIManagerModule", "uimanager_module", "cc_slot_module", "overview", "scene_prefabs", "hierarchy", "hud"]
---

# 🏛️ UIManagerModule Scene Node Hierarchy & Prefab Specifications

---

## 1. Live Inspected Scene Hierarchy Structure

Inspected directly from the active canonical scene (`g9000L.fire` / `g9666L.fire`) via `cocos24-mcp-server`:

```text
Canvas
└── Director [Components: GameConfig, GameDataStore, GameInit, GameDirector]
    └── UIManager [Component: UIManagerModule]
        ├── BG_BottomUI [Component: cc.Sprite]
        ├── BackToLobbyButton [Component: BackToLobbyModule]
        ├── SettingButton [Components: SettingButton, cc.Button]
        ├── InfoButton [Components: InfoButton, cc.Button]
        ├── Bet [Component: BetModule]
        ├── ExtraBet [Component: ExtraBetModule]
        ├── Jackpot [Component: JackpotModule]
        ├── TrialJackpot [Component: TrialJackpotModule]
        ├── JackpotHistoryButton [Components: JackpotHistoryButton, cc.Button]
        ├── NormalPaylineInfo [Component: PaylineInfoModule]
        ├── FreePaylineInfo [Component: PaylineInfoModule]
        ├── FreeSpinButton [Components: SlotButtonFree, cc.Button]
        ├── FreeSpinTimes [Component: SpinTimesModule]
        ├── NormalSpinButton [Components: SlotButtonNormal, cc.Button]
        ├── NormalSpinTimes [Component: SpinTimesModule]
        ├── IconPromotion [Components: IconPromotion, cc.Sprite]
        ├── PromotionSpinTimes [Component: SlotPromotionSpinTimes]
        ├── TurboButton [Component: TurboButton]
        ├── WinAmountPrefab [Component: WinAmountModule]
        ├── Wallet [Component: WalletModule]
        ├── TrialModeTag [Components: TrialModeTag, cc.Sprite]
        └── TrialModePrefab [Component: TrialModeManager]
```

---

## 2. Referenced Prefabs & Asset Inventory

| Name | Asset UUID | Asset Path | Purpose |
| :--- | :--- | :--- | :--- |
| `Bet` | `6238a2e3-e80c-407c-846b-3192d835ca83` | `assets/cc-common/cc-slot-module/GUI/Bet/Bet.prefab` | Wager configuration and bet step button prefab. |
| `Wallet` | `d984cbf4-43e2-4101-97bb-b8db97b22197` | `assets/cc-common/cc-slot-module/GUI/Wallet/Wallet.prefab` | Dual currency balance container prefab. |
| `WinAmountPrefab` | `7a4066dc-585b-4c30-8cd2-13bd11db363c` | `assets/cc-common/cc-slot-module/GUI/WinAmount/WinAmountPrefab.prefab` | Rolling win amount HUD display prefab. |
| `TurboButton` | `8fb8e320-7fc6-4eba-ab7f-2eabe9fb5896` | `assets/cc-common/cc-slot-module/GUI/Turbo/TurboButton.prefab` | Turbo mode fast-spin toggle button. |
| `NormalSpinButton` | `2f2d5206-a45e-41dc-933b-9c5d200e513f` | `assets/cc-common/cc-slot-module/GUI/SpinButton/NormalSpinButton.prefab` | Base game spin button with hold-to-auto. |
| `FreeSpinButton` | `d8d1da76-99c4-4bfb-ae1c-bedf301d6f7a` | `assets/cc-common/cc-slot-module/GUI/SpinButton/FreeSpinButton.prefab` | Free spins feature spin button. |
| `NormalSpinTimes` | `c0cea6d5-c1ad-4615-9566-29f997039668` | `assets/cc-common/cc-slot-module/GUI/SpinTimes/NormalSpinTimes.prefab` | Auto-spin remaining count badge. |
| `FreeSpinTimes` | `34604e13-89f9-4f3d-bf9c-ce326cbcd9b8` | `assets/cc-common/cc-slot-module/GUI/SpinTimes/FreeSpinTimes.prefab` | Free spins remaining count badge. |
| `NormalPaylineInfo` | `5bd6fb1a-84f1-43ef-a425-8a384fd8c69d` | `assets/cc-common/cc-slot-module/GUI/PaylineInfo/NormalPaylineInfo.prefab` | Base game payout strip. |
| `FreePaylineInfo` | `ddc179a8-57e8-4d2f-a215-e7a97562cceb` | `assets/cc-common/cc-slot-module/GUI/PaylineInfo/FreePaylineInfo.prefab` | Free game payout strip. |

---

## 3. Companion Subsystems & Node Bindings

1. **`GameDirector`**: Master scene orchestrator mounting `UIManagerModule` under `Canvas/Director`.
2. **`SlotGameSettings`**: Injected configuration evaluating responsive layouts and fast/turbo states.
3. **`GameDataStore`**: Injected state store tracking `playSession` and `UIManagerData`.
