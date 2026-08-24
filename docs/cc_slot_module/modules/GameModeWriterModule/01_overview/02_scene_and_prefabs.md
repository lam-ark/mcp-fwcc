---
id: "cc_slot_module:GameModeWriterModule:overview:scene_and_prefabs"
title: "GameModeWriterModule Placement & Injected Services"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "overview", "scene", "prefabs"]
---

# 🌳 GameModeWriterModule Placement & Injected Services

## 1. Node Placement & Self-Binding

Mounted alongside companion directors on game mode nodes under `Canvas/Director/GameMode/*`:

```typescript
onLoadExtend(): void {
    this.node["writer"] = this;
}
```

---

## 2. Injected Services Reference

| Service Token | Injected Property | Role |
| :--- | :--- | :--- |
| **`GameDataStore`** | `@inject(GameDataStore) dataStore` | Reads `playSession.nextMode` and `playSession.jackpot` to branch scripts dynamically. |
| **`SlotGameSettings`** | `@inject(SlotGameSettings) gameSettings` | Queries active speed preferences. |
