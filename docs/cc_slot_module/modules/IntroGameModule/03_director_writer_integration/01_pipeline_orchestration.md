---
id: "cc_slot_module:IntroGameModule:director_writer:pipeline_orchestration"
title: "IntroGameModule Director Pipeline Orchestration"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 IntroGameModule Director Pipeline Orchestration

---

## 1. Lifecycle Gate Role

Acts as the visual gatekeeper between scene asset loading and gameplay initialization:
```text
GameInit / Scene Loaded
       │
       ▼
GameLogic emits JOIN_GAME_SUCCESS
       │
       ▼
IntroGameModule: Player confirms entry
       │
       ▼
IntroGameModule emits HIDE_INTRO_GAME
       │
       ▼
BaseGameDirector starts normal idle state
```
