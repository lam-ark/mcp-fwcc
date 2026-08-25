---
id: "cc_slot_module:BetHistoryDetailModule:director_writer:subsystem_impacts"
title: "BetHistoryDetailModule Subsystem Impacts"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 BetHistoryDetailModule Subsystem Impacts

---

## 1. Subsystem Impacts

- **Node Pool**: Recycles `ScrollItem` instances into `ScrollHistoryPool` upon view reset to prevent allocation overhead.
- **Audio Player**: Triggers `soundPlayer.playSFXClick()` on tab or navigation button click.
- **Data Model**: Watches `BetHistoryDetailData` properties: `gameModeData`, `currentData`, `currentIndex`, `isEnableNext`, `isEnablePrev`.
