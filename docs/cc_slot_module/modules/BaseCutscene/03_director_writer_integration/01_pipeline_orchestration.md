---
id: "cc_slot_module:BaseCutscene:director_writer:pipeline_orchestration"
title: "BaseCutscene Director & Script Pipeline Integration"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 BaseCutscene Director & Script Pipeline Integration

---

## 1. 3-Tier Pipeline Role

```text
GameModeDirectorModule / Writer (Dispatches PLAY_CUTSCENE command)
       │
       ▼
CutsceneController (Resolves target BaseCutscene instance & awaits completion)
       │
       ▼
BaseCutscene Subclass (Renders modal & calls exit() when finished)
```
