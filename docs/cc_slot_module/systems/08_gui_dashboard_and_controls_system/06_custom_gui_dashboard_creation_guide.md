---
id: "cc_slot_module:systems:gui_dashboard:custom_gui_dashboard_creation_guide"
title: "Custom GUI Dashboard Assembly & Wiring Guide"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "gui_dashboard", "custom_gui", "hud_setup", "tutorial"]
---

# 🛠️ Custom GUI Dashboard Assembly & Wiring Guide

---

## 1. Scene Graph Layout Hierarchy

Create the following hierarchy under `Canvas/Director/UIManager`:

```text
Canvas/Director/UIManager [Component: UIManagerModule]
├── BG_BottomUI [cc.Sprite, cc.Widget: Bottom-aligned]
├── Bet [Component: BetModule]
│   ├── BtnDecrease [cc.Button]
│   ├── BtnIncrease [cc.Button]
│   ├── TotalBetLabel [Component: TotalBetLabel, cc.Label]
│   └── DenomLabel [Component: DenomLabel, cc.Label]
├── ExtraBet [Component: ExtraBetModule]
├── Wallet [Component: WalletModule]
│   ├── RealWallet [Component: WalletLabel]
│   └── TrialWallet [Component: WalletLabel]
├── WinAmountPrefab [Component: WinAmountModule]
│   └── WinLabel [cc.Label]
├── NormalSpinButton [Component: SlotButtonNormal]
│   ├── Display [Spine or Sprite]
│   └── SpinButtonTouch [cc.Node]
├── FreeSpinButton [Component: SlotButtonFree]
├── TurboButton [Component: TurboButtonSwitcher]
├── PaylineInfoNormalGame [Component: PaylineInfoModule]
└── PaylineInfoFreeGame [Component: PaylineInfoModule]
```

---

## 2. Inspector Wiring Checklist

1. On `UIManagerModule`:
   - Drag `Bet` to `bet`.
   - Drag `Wallet` to `wallet`.
   - Drag `WinAmountPrefab` to `winAmount`.
   - Drag `NormalSpinButton` to `normalSpinButton`.
   - Drag `FreeSpinButton` to `freeSpinButton`.
   - Drag `TurboButton` to `turbo`.
   - Drag `PaylineInfoNormalGame` and `PaylineInfoFreeGame`.
   - Drag `Canvas/Director/CutsceneControl` to `cutsceneControl`.
   - Drag `Canvas/Director/PopupControl` to `popupControl`.
2. Save as `BottomUIPrefab.prefab` and instantiate in your game scene.
