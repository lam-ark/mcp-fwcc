---
id: "cc_slot_module:BaseUIPopup:game_flow:spin_phase_breakdown"
title: "BaseUIPopup Game Flow Lifecycle"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 BaseUIPopup Game Flow Lifecycle

---

## 1. Game Flow Breakdown

| Phase / State | BaseUIPopup Status |
| :--- | :--- |
| **Idle** | Can open upon user click on Header / Menu buttons. |
| **Active Open** | Blocks background input; updates view components. |
| **Close** | Plays exit transition and re-enables underlying UI. |
