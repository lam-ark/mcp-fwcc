---
id: "cc_slot_module:LoadingScreenModule:pipeline:subsystem_impacts"
title: "LoadingScreenModule Subsystem Impacts"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "pipeline", "subsystem_impacts"]
---

# 🌐 LoadingScreenModule Subsystem Impacts

---

## 1. Subsystem Impacts

* **Audio Context**: Unlocks Howler audio context via `JsbUtils.registerLoadHowl()` so BGM plays immediately upon main scene start.
* **Network Failover**: If scene preload fails (e.g. 404 or corrupted asset), triggers `handleFlowOutGame()` to display reconnect/exit dialogues.
