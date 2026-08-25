---
id: "cc_slot_module:AutoSpinPanel:properties:runtime_state_variables"
title: "AutoSpinPanel Runtime State"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 AutoSpinPanel Runtime State

---

## 1. State Table

| Variable | Type | Purpose |
| :--- | :--- | :--- |
| `config` | `AutoSpinPanelConfig` | Component holding `AUTO_SPIN_NUMBERS` array (e.g. `[10, 20, 50, 100]`). |
| `currentSelectedIndex`| `number` | Currently selected round count index. |
| `autoSpinOption` | `Record` | Map of index to `AutoSpinNumber` components. |
