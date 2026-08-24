---
id: "cc_slot_module:SlotTableModule:customization:override_points_matrix"
title: "SlotTableModule Extension Points Matrix"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 SlotTableModule Extension Points Matrix

## 1. Extension Points Matrix

| Method Name | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`onReelStopExtend(idx)`** | Virtual hook | `YES` | None (Virtual) | Trigger column landing particles, Mascot reactions, or camera punches. |
| **`onReelPreStopExtend(idx)`**| Virtual hook | `YES` | None (Virtual) | Play anticipation anticipation SFX pitch increments. |
| **`onChangeStateExtend(s)`** | Virtual hook | `YES` | None (Virtual) | Update UI spin buttons or Turbo HUD indicators. |
| **`mapResumeMatrix()`** | Virtual hook | `YES` | None (Virtual) | Remap symbol codes after Megaways / Transformation rounds. |
| **`createReelNode(col)`** | Instantiates `reelPrefab` | `YES` | None | Customize column node parenting, positioning, or masking. |
