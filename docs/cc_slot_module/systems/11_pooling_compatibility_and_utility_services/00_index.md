---
id: "cc_slot_module:systems:pooling_compatibility:index"
title: "Pooling, Compatibility & Utility Services System Architecture Index"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "pooling", "node_pool", "canvas_controller", "auto_scale_bg", "loading_screen", "waiting_scene", "index"]
---

# ⚙️ Pooling, Compatibility & Utility Services System Architecture Index

---

## 1. Subsystem Mission

The **Pooling, Compatibility & Utility Services Subsystem** provides engine-level optimization, cross-platform resolution adaptation, cover background scaling, asset preloading, and connection latency overlays.

```mermaid
graph TD
    AppBoot[Game Launch] --> LoadScreen[LoadingScreenModule: Preloader & Scene Router]
    LoadScreen --> ResAdapt[CanvasModuleController: Dynamic Viewport & Safe Area]
    ResAdapt --> BGScale[AutoScaleBackgroundModule: Cover Aspect Fitting]
    
    GameRun[Game Runtime] --> Pool1[PoolFactoryModule: Generic Node Pooling]
    GameRun --> Pool2[SlotObjectPool: Scoped UI Item Pooling]
    GameRun --> WaitOver[WaitingSceneModule: Network Reconnect Spinner]
```

---

## 2. Topic Breakdown & Navigation

1. **[`01_zero_allocation_pooling_architecture.md`](./01_zero_allocation_pooling_architecture.md)**
   - Object pooling triad: `PoolFactoryModule`, `SlotObjectPool`, and `SlotCustomNodePool` for zero-GC spin loops.
2. **[`02_responsive_canvas_adaptation_engine.md`](./02_responsive_canvas_adaptation_engine.md)**
   - Multi-resolution adaptation, dynamic design resolutions, orientation change listeners, and widget reflow.
3. **[`03_cover_background_aspect_ratio_fitting.md`](./03_cover_background_aspect_ratio_fitting.md)**
   - Mathematical formula for letterbox-free cover background scaling across 21:9, 16:9, and 4:3 screen ratios.
4. **[`04_asset_preloader_and_multi_target_routing.md`](./04_asset_preloader_and_multi_target_routing.md)**
   - Scene preloader pipeline, smooth progress interpolation, and SD / IFrame / History scene redirection.
5. **[`05_network_latency_and_waiting_overlays.md`](./05_network_latency_and_waiting_overlays.md)**
   - Reactive latency spinner observing `WaitingSceneData.active` with touch swallowing.
