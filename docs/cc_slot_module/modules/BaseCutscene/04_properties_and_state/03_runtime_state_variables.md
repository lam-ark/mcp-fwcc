---
id: "cc_slot_module:BaseCutscene:properties_and_state:runtime_state_variables"
title: "BaseCutscene Runtime State Variables"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 BaseCutscene Runtime State Variables

---

## 1. Runtime Variables

| Variable | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `content` | `any` | `undefined` | Payload passed into `play(content)`. |
| `callback` | `Function` | `null` | Completion callback resolved upon `exit()`. |
| `fullDisplay`| `boolean` | `true` | When true, emits `SHOW_FULL_DISPLAY_CUTSCENE` to block UI touches. |
