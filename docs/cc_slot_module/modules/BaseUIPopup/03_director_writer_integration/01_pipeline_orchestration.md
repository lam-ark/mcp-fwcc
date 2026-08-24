---
id: "cc_slot_module:BaseUIPopup:director_writer:pipeline_orchestration"
title: "BaseUIPopup Pipeline & Event Integration"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 BaseUIPopup Pipeline & Event Integration

---

## 1. Event Integration

Dispatches modal closure commands to `GameLogic`:
```typescript
this.gameLogic.emit(GameLogicUIEvents.CLOSE_ALL_POPUPS);
```
Subclasses observe their respective domain models (`BetHistoryData`, `JackpotHistoryData`, `SettingData`).
