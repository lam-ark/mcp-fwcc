---
id: "cc_slot_module:UIManagerModule:overview:scene_and_prefabs"
title: "UIManagerModule Scene Node Hierarchy"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ UIManagerModule Scene Node Hierarchy

---

## 1. Canonical Hierarchy Placement

Mounted at `Canvas/Director/UIManager`:

```text
Canvas/Director/UIManager [Component: UIManagerModule]
├── BG_BottomUI [cc.Sprite, cc.Widget]
├── Bet [Component: BetModule]
├── ExtraBet [Component: ExtraBetModule]
├── Wallet [Component: WalletModule]
├── WinAmount [Component: WinAmountModule]
├── Turbo [Component: TurboButtonSwitcher]
├── BuyFeatureButton [cc.Button]
├── NormalSpinButton [Component: SlotButtonNormal]
├── FreeSpinButton [Component: SlotButtonFree]
├── NormalSpinTimes [Component: SpinTimesModule]
├── FreeSpinTimes [Component: SpinTimesModule]
├── PaylineInfoNormalGame [Component: PaylineInfoModule]
├── PaylineInfoFreeGame [Component: PaylineInfoModule]
└── Promotion [Component: IconPromotion]
```
