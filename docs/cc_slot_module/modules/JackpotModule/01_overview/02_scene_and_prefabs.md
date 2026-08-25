---
id: "cc_slot_module:JackpotModule:overview:scene_and_prefabs"
title: "JackpotModule Scene Node Hierarchy & Prefab Specifications"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "overview", "scene_prefabs", "hierarchy", "hud"]
---

# 🏛️ JackpotModule Scene Node Hierarchy & Prefab Specifications

---

## 1. Live Inspected Scene Hierarchy Structure

Inspected directly from the canonical active template scene (`g9000L.fire` / `g9666L.fire`) via `cocos24-mcp-server`:

```text
Canvas
└── Director [Components: GameConfig, GameDataStore, GameInit, GameDirector]
    └── UIManager [Component: UIManagerModule]
        ├── Jackpot [Component: JackpotModule]
        │   ├── Frame_Jackpot [Component: cc.Sprite]
        │   └── Grand [Components: JackpotLabel, cc.Label] (Mapped in jackpotItems)
        ├── TrialJackpot [Component: TrialJackpotModule]
        │   ├── Frame_Jackpot [Component: cc.Sprite]
        │   └── Grand [Components: JackpotLabel, cc.Label]
        └── JackpotHistoryButton [Components: JackpotHistoryButton, cc.Button]
```

---

## 2. Referenced Prefabs & Asset Inventory

| Name | Asset UUID | Asset Path | Purpose |
| :--- | :--- | :--- | :--- |
| `Jackpot` (HUD Meter) | `c453e51a-3a42-421a-8bed-1cc9c42eeb85` | `assets/cc-common/cc-slot-module/GUI/Jackpot/Jackpot.prefab` | Default progressive jackpot scoreboard HUD container. |
| `TrialJackpot` (Demo Meter) | `6eab77d0-e331-497f-9230-9c753ad32d05` | `assets/cc-common/cc-slot-module/GUI/Jackpot/TrialJackpot.prefab` | Trial / Demo mode jackpot meter container. |
| `JackpotHistoryPopup` | `d5149687-6e94-406a-bddc-66dab34b3358` | `assets/cc-common/cc-slot-module/Popup/JackpotHistory/JackpotHistoryPopup.prefab` | Jackpot history records overview modal. |
| `JackpotHistoryCell` | `146036da-69c3-47a7-a075-74587dbdcf33` | `assets/cc-common/cc-slot-module/Popup/JackpotHistory/JackpotHistoryCell.prefab` | History cell rendering winning jackpot records and timestamps. |
| `JackpotHistoryButton` | `22bd996d-e6b7-4380-88dc-4cdede97d29a` | `assets/cc-common/cc-slot-module/Popup/JackpotHistory/JackpotHistoryButton.prefab` | HUD button opening the Jackpot history popup. |

---

## 3. Companion Subsystems & Node Bindings

1. **`JackpotModuleItem`**: Serialized `@property` entry binding the `cc.Label` to a specific `JACKPOT_TYPE_ENUM` (`GRAND`, `MAJOR`, `MINOR`, `MINI`).
2. **`JackpotLabel`**: Helper script managing font formatting, money symbol styling, and `MoneyTween` count-up stepping.
3. **`UIManagerModule` Parent**: Toggles visibility via `uiManagerData.isJackpotActive`.
