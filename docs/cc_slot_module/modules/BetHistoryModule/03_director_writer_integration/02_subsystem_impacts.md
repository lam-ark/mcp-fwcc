---
id: "cc_slot_module:BetHistoryModule:director_writer:subsystem_impacts"
title: "BetHistoryModule Subsystem Impacts"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 BetHistoryModule Subsystem Impacts

---

## 1. Impact Matrix

- **Audio Subsystem (`SlotSoundPlayerModule`)**: Plays click SFX on page navigation and modal open/close.
- **GUI Dashboard (`UIManagerModule`)**: Disables background spin buttons while modal dialog is active.
- **Network Subsystem**: Initiates HTTP GET / Socket request for paginated bet transactions.
- **Popup Controller (`PopupControllerModule`)**: Registers in `isDisplayPopup()` to prevent overlapping dialogs.
