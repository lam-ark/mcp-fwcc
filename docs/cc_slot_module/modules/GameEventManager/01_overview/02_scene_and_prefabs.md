---
id: "cc_slot_module:GameEventManager:overview:scene_and_prefabs"
title: "GameEventManager IoC Placement & Service Injection"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ GameEventManager IoC Placement & Service Injection

---

## 1. Runtime Instantiation & Injection

`GameEventManager` is a pure TypeScript class instantiated at Frame 0 by `GameInit` on `Canvas/Director` and injected as a singleton service:

```typescript
// Registered in GameInit on Canvas/Director:
this.eventManager = new GameEventManager();
```

---

## 2. Injected Nodes Throughout Hierarchy

`GameEventManager` is automatically injected into all `SlotBaseModule` components across the scene tree:
- `Canvas/Director` (`GameDirector`)
- `Canvas/Director/GameMode/MainGamePrefab` (`NormalGameDirectorModule`)
- `Canvas/Director/UIManager` (`UIManagerModule`, `BetModule`, `WalletModule`)
- `Canvas/Director/CutsceneControl` (`CutsceneController`, `WinEffectModule`)
- `Canvas/Director/SlotSoundPlayer` (`SlotSoundPlayerModule`)
