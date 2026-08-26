---
id: "cc_slot_module:LoadingScreenModule:pipeline:pipeline_orchestration"
title: "LoadingScreenModule Scene Handshake & Director Handover"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "pipeline", "handover"]
---

# 🎛️ LoadingScreenModule Scene Handshake & Director Handover

---

## 1. Handover into Main Game Director

When `LoadingScreenModule` invokes `director.loadScene(this.updatedScene)`, the target main game scene mounts `GameInit.ts` and `GameDirector.ts`, which initialize game logic and begin socket handshakes.
