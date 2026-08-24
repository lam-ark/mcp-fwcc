---
id: "cc_slot_module:PopupControllerModule:director_writer:pipeline_orchestration"
title: "PopupControllerModule Pipeline Integration"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 PopupControllerModule Pipeline Integration

---

## 1. System Integration

`GameModeDirectorModule` checks `isDisplayPopup()` to prevent spins during modal review:
```typescript
if (this.popupController && this.popupController.isDisplayPopup()) {
    log("Spin prevented: modal popup is currently open");
    return;
}
```
