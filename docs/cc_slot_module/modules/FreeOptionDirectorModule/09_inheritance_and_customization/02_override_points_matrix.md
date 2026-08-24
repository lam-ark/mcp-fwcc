---
id: "cc_slot_module:FreeOptionDirectorModule:customization:override_points_matrix"
title: "FreeOptionDirectorModule Extension Points Matrix"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 FreeOptionDirectorModule Extension Points Matrix

## 1. Extension Points Matrix

| Method Name | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`enter()`** | Resets timer & enables buttons | `EXTEND_ONLY` | `MANDATORY` | Play option entrance animations or fanfare. |
| **`optionClick(ev, id)`**| Disables buttons & sends request | `EXTEND_ONLY` | `MANDATORY` | Play selected option highlight and unselected option fade-out. |
| **`_runAutoTrigger()`** | Selects random option | `YES` | None | Customize default fallback choice. |
