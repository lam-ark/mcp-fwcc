---
id: "cc_slot_module:WaitingSceneModule:overview:architecture_and_role"
title: "WaitingSceneModule Architectural Role & Reconnect Spinner Overlay"
category: "cc_slot_module"
tags: ["WaitingSceneModule", "waiting_scene_module", "cc_slot_module", "overview", "architecture", "network_waiting", "spinner"]
---

# 🏛️ WaitingSceneModule Architectural Role & Reconnect Spinner Overlay

---

## 1. Architectural Mission

`WaitingSceneModule` is the **network latency and reconnect waiting spinner overlay** mounted at `Canvas/Director/waitingScene`. Inheriting from `SlotBaseModule`, it observes the reactive data store field `WaitingSceneData.active` via `this.observer.watch()`, toggling `this.node.active` and opacity between 255 (visible) and 0 (hidden).

```mermaid
graph TD
    Net[Network / GameLogic DataModel] -->|WaitingSceneData.active = true/false| Obs[Observer]
    Obs -->|Trigger callback| WSM[WaitingSceneModule.showWaitingScene]
    WSM -->|node.active = active| Node[cc.Node]
    WSM -->|setOpacity 255 or 0| Opacity[Visual Opacity]
```
