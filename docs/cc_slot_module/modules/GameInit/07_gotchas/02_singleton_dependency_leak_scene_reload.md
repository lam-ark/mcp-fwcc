---
id: "cc_slot_module:GameInit:gotcha:singleton_dependency_leak_scene_reload"
title: "Gotcha: Singleton Dependency Leak on Scene Reload"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "gotchas", "singleton_leak", "memory_leak", "scene_reload", "clearGameDependencies"]
---

# 🛑 Gotcha: Singleton Dependency Leak on Scene Reload

## 1. Symptom & Visual Defect
After player leaves the slot game and returns back to the lobby or re-enters the slot scene, multiple ghost event listeners fire and memory steadily climbs.

---

## 2. Root Cause & Cocos 2.4 Engine Quirk
`eno.provide()` registers instances into a global container table keyed by `gameId`. When `cc.director.loadScene()` reloads the scene, old node instances are destroyed by the engine, but the container retain references unless explicitly purged.

---

## 3. Standard Code Solution & Fix
Ensure `GameInit.onDestroy()` calls `clearGameDependencies(gameId)`:

```typescript
onDestroy(): void {
    if (this._gameLogic) {
        this._gameLogic.destroy();
    }
    if (this._eventManager) {
        this._eventManager.destroy();
        this._eventManager = null;
    }

    clearGameDependencies(this._gameConfig.GAME_ID);
}
```
