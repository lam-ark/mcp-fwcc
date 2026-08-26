---
id: "cc_core_lib:CanvasControllerWrapper:api:properties"
title: "CanvasControllerWrapper Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["CanvasControllerWrapper", "canvas_controller_wrapper", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `CanvasControllerWrapper` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`autoOrientation`** | `boolean` | Enables automatic canvas rotation and layout adaptation upon mobile device orientation change. |
| **`isPortrait`** | `boolean` | Boolean flag indicating whether the current layout is locked or oriented in vertical Portrait mode ($9:16$). |
| **`canvas`** | `any` | Reference to the root `cc.Canvas` engine component. |
| **`fitByOrientation`** | `boolean` | Dynamically toggles `fitWidth` vs `fitHeight` based on design aspect ratio vs physical screen ratio. |
| **`useCustomDesignResolution`** | `boolean` | Enables overriding default Cocos Creator design resolution with custom width/height. |
| **`customDSWidth`** | `number` | Custom target design resolution width in pixels (e.g. `1280` or `720`). |
| **`customDSHeight`** | `number` | Custom target design resolution height in pixels (e.g. `720` or `1280`). |
| **`widgetNodes`** | `Array<any>` | Array of `cc.Widget` nodes forced to recalculate layout offsets during window resize. |
| **`minScreenRatio`** | `number` | Minimum supported aspect ratio threshold before triggering letterbox protection. |
| **`isDebug`** | `boolean` | Boolean flag indicating whether debug is enabled or active in `CanvasControllerWrapper`. |
| **`_thisOnResized`** | `any` | Operational field tracking state in `CanvasControllerWrapper`. |
| **`innerSize`** | `{ width: number` | Operational field tracking state in `CanvasControllerWrapper`. |
| **`height`** | `number` | Numeric counter or index value in `CanvasControllerWrapper`. |

---

## 2. State Mutation Lifecycle

All state fields in `CanvasControllerWrapper` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
