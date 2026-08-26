---
id: "cc_slot_module:systems:pooling_compatibility:waiting_overlays"
title: "Network Latency & Waiting Overlays"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "waiting_scene", "latency_spinner", "reconnect_overlay"]
---

# ⏳ Network Latency & Waiting Overlays

---

## 1. WaitingSceneModule
Observes `WaitingSceneData.active` in the reactive data store:
- Automatically reveals a semi-transparent dark mask and rotating spinner if network round-trip time exceeds thresholds or during session reconnects.
- Swallows all touch events to prevent erratic user input during network stalls.
