---
id: "cc_slot_module:TrialModeManager:events:global_event_bus"
title: "TrialModeManager Global Event Bus Specification"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "events", "global_bus"]
---

# 🌐 TrialModeManager Global Event Bus Specification

---

## 1. Global Events Emitted

| Event Constant | Payload | Target | Purpose |
| :--- | :--- | :--- | :--- |
| `GameLogicUIEvents.INIT_TRIAL_MODE` | `this.trialModeData` | `GameLogic` | Initializes trial configuration. |
| `GameLogicUIEvents.PLAY_TUTORIAL_OPTION` | `option: number` | `GameLogic` | Triggers specific demo scenario. |
| `GameLogicUIEvents.SKIP_TRIAL_DATA` | None | `GameLogic` | Closes demo selection panel. |
