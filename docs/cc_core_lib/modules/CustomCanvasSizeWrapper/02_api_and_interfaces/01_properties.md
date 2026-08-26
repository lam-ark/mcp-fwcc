---
id: "cc_core_lib:CustomCanvasSizeWrapper:api:properties"
title: "CustomCanvasSizeWrapper Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["CustomCanvasSizeWrapper", "custom_canvas_size_wrapper", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `CustomCanvasSizeWrapper` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`customDSWidth`** | `number` | Custom target design resolution width in pixels (e.g. `1280` or `720`). |
| **`customDSHeight`** | `number` | Custom target design resolution height in pixels (e.g. `720` or `1280`). |
| **`isPortrait`** | `boolean` | Boolean flag indicating whether the current layout is locked or oriented in vertical Portrait mode ($9:16$). |
| **`_defaultDesignResolution`** | `any` | Operational field tracking state in `CustomCanvasSizeWrapper`. |
| **`_defaultResolutionPolicy`** | `any` | Operational field tracking state in `CustomCanvasSizeWrapper`. |
| **`_thisOnResized`** | `Function` | Operational field tracking state in `CustomCanvasSizeWrapper`. |
| **`_canvasController`** | `CanvasControllerWrapper` | Operational field tracking state in `CustomCanvasSizeWrapper`. |
| **`delay`** | `number): void` | Operational field tracking state in `CustomCanvasSizeWrapper`. |

---

## 2. State Mutation Guardrails

All state fields in `CustomCanvasSizeWrapper` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
