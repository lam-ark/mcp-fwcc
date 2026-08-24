---
id: "cc_slot_module:TrialModeManager:properties_and_state:inspector_properties"
title: "TrialModeManager Inspector Properties Specification"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ TrialModeManager Inspector Properties Specification

---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `trialModeData` | `TrialModeData[]` | `[]` | Array of per-currency trial bet settings. |
| `useSelectionPanel` | `boolean` | `false` | Enables scenario selection modal. |
| `trialModePanel` | `cc.Node` | `null` | Container modal node. |
| `optionHolder` | `cc.Node` | `null` | Container node holding scenario buttons. |
