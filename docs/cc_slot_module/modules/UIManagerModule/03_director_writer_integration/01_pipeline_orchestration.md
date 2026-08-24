---
id: "cc_slot_module:UIManagerModule:director_writer:pipeline_orchestration"
title: "UIManagerModule Pipeline & Event Integration"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 UIManagerModule Pipeline & Event Integration

---

## 1. Event Orchestration

Dispatched by `GameModeDirectorModule` whenever entering a new mode:
```typescript
this.eventManager.emit(GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI, GAME_MODE_ENUM.FREE_GAME);
```
`UIManagerModule` handles the event by calling `this.updateGameModeUI(gameMode)`.
