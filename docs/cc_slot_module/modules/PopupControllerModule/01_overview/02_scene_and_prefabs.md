---
id: "cc_slot_module:PopupControllerModule:overview:scene_and_prefabs"
title: "PopupControllerModule Scene Node Hierarchy & Prefab Specifications"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "overview", "scene_prefabs", "hierarchy", "popups"]
---

# 🏛️ PopupControllerModule Scene Node Hierarchy & Prefab Specifications

---

## 1. Live Inspected Scene Hierarchy Structure

Inspected directly from the active canonical scene (`g9000L.fire` / `g9666L.fire`) via `cocos24-mcp-server`:

```text
Canvas
└── Director [Components: GameConfig, GameDataStore, GameInit, GameDirector]
    └── PopupControl [Component: PopupControllerModule]
        ├── TutorialPopup [Component: BaseUIPopup / TutorialModule]
        ├── SettingPanel [Component: SettingPanel] (Audio / Language options)
        ├── InfoPanel [Component: InfoPanel] (Paytable rules / Symbol payouts)
        ├── BetHistory [Component: BetHistoryModule] (Round replay & player history)
        └── JackpotHistory [Component: JackpotHistoryModule] (Jackpot award records)
```

---

## 2. Referenced Prefabs & Asset Inventory

| Name | Asset UUID | Asset Path | Purpose |
| :--- | :--- | :--- | :--- |
| `SettingPanel` | `80aca085-6c05-4252-b7d8-f4f16d5aa739` | `assets/cc-common/cc-slot-module/Popup/Setting/SettingPanel.prefab` | In-game sound toggles and setting options modal prefab. |
| `InfoPanel` | `46c8fcf5-82e8-4e44-b82f-c698ab5d7d2b` | `assets/cc-common/cc-slot-module/Popup/Info/InfoPanel.prefab` | Paytable rules and symbol payout information modal prefab. |
| `BetHistory` | `e57c34fb-8ad0-4de6-a151-205354ad42e5` | `assets/cc-common/cc-slot-module/Popup/BetHistory/prefabs/BetHistory.prefab` | Player bet history and round summary list modal prefab. |
| `JackpotHistoryPopup` | `d5149687-6e94-406a-bddc-66dab34b3358` | `assets/cc-common/cc-slot-module/Popup/JackpotHistory/JackpotHistoryPopup.prefab` | Progressive jackpot records modal prefab. |
| `TutorialPopup` | `f22cde0a-4f82-47c8-975f-67331dd7326e` | `assets/cc-common/cc-slot-module/GUI/TrialMode/TutorialPopup.prefab` | First-time tutorial and rule walkthrough modal prefab. |

---

## 3. Companion Subsystems & Node Bindings

1. **`BaseUIPopup`**: Abstract modal class providing standard open, close, and transition animations for all child popups.
2. **`GameLogic`**: Emits UI commands (e.g. `GameLogicUIEvents.OPEN_SETTING_PANEL`) triggering modal activation.
