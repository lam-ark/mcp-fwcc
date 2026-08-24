---
id: "cc_slot_module:UIManagerModule:properties_and_state:inspector_properties"
title: "UIManagerModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ UIManagerModule Inspector Properties Specification

---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `jackpot` | `cc.Node` | `null` | Real mode jackpot display node. |
| `trialJackpot` | `cc.Node` | `null` | Demo trial jackpot display node. |
| `bet` | `cc.Node` | `null` | Bet selector container. |
| `hasExtraBet` | `boolean` | `false` | Enables Ante-Bet / Golden Bet toggle field. |
| `extraBet` | `cc.Node` | `null` | Ante-Bet switch node (visible only if `hasExtraBet`). |
| `wallet` | `cc.Node` | `null` | Balance HUD node. |
| `winAmount` | `cc.Node` | `null` | Win score label node. |
| `turbo` | `cc.Node` | `null` | Turbo mode switcher. |
| `normalSpinButton` | `cc.Node` | `null` | Main spin button for base game. |
| `freeSpinButton` | `cc.Node` | `null` | Free spins button component. |
| `normalSpinTimes` | `cc.Node` | `null` | Auto-spin remaining rounds badge. |
| `freeSpinTimes` | `cc.Node` | `null` | Free spin remaining rounds badge. |
| `paylineInfoNormalGame`| `cc.Node` | `null` | Normal game payline info banner. |
| `paylineInfoFreeGame` | `cc.Node` | `null` | Free game payline info banner. |
| `promotionUI` | `cc.Node[]`| `[]` | Promotional campaign overlay nodes. |
| `buyFeatureButton` | `cc.Node` | `null` | Direct Feature Buy button node. |
| `cutsceneControl` | `CutsceneController` | `null` | Cutscene subsystem reference. |
| `popupControl` | `PopupControllerModule` | `null` | Popup subsystem reference. |
