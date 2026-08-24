---
id: "cc_slot_module:NormalGameWriterModule:overview:scene_and_prefabs"
title: "NormalGameWriterModule Scene Placement & Node Binding"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "overview", "scene", "prefabs"]
---

# 🌳 NormalGameWriterModule Scene Placement & Node Binding

## 1. Scene Graph Hierarchy

`NormalGameWriterModule` is mounted alongside `NormalGameDirectorModule` on the `NormalGame` node:

```text
Canvas/Director/GameMode/NormalGame
├── NormalGameDirectorModule ➔ (director)
└── NormalGameWriterModule   ➔ (writer)
```

In `onLoadExtend()`, it automatically registers itself to the node:
```typescript
onLoadExtend(): void {
    this.node["writer"] = this;
}
```
