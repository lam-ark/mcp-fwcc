---
id: "cc_slot_module:SlotSymbolResourceManager:customization:override_points_matrix"
title: "SlotSymbolResourceManager Override Points Matrix"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "customization", "override_points"]
---

# 📋 SlotSymbolResourceManager Override Points Matrix

---

## 1. Extension Points Summary

| Method Signature | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- |
| `initAssets(): void` | `YES` | Optional | Custom asset dictionary indexing. |
| `getSymbolFrame(code)` | `YES` | Optional | Atlas or CDN sprite frame resolution. |
| `getBlurSymbolFrame(code)` | `YES` | Optional | Custom blur texture overrides. |
| `getSymbolSkeleton(code)` | `YES` | Optional | Dynamic Spine SkeletonData resolution. |
| `getColorNormal()` / `getColorDim()` | `YES` | Optional | Customized RGB dimming color palettes. |
