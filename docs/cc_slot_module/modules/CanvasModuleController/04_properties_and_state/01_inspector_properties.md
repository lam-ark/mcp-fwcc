---
id: "cc_slot_module:CanvasModuleController:properties:inspector_properties"
title: "CanvasModuleController Inspector Properties"
category: "cc_slot_module"
tags: ["CanvasModuleController", "canvas_module_controller", "cc_slot_module", "properties", "inspector"]
---

# 📋 CanvasModuleController Inspector Properties

---

## 1. Serialized Fields

| Property | Type | Default | Description |
| :--- | :--- | :---: | :--- |
| **`autoOrientation`** | `boolean` | `false` | Enables dynamic orientation switching. |
| **`isPortrait`** | `boolean` | `true` | Indicates default portrait layout. |
| **`canvas`** | `cc.Canvas` | `null` | Reference to target Canvas component. |
| **`fitByOrientation`** | `boolean` | `true` | Automatically toggles `fitWidth` vs `fitHeight`. |
| **`useCustomDesignResolution`** | `boolean` | `false` | Uses custom design resolution width and height. |
| **`customDSWidth`** | `number` | `1280` | Custom design resolution width. |
| **`customDSHeight`** | `number` | `720` | Custom design resolution height. |
| **`widgetNodes`** | `cc.Widget[]` | `[]` | Widgets forced to update alignment after resize. |
| **`minScreenRatio`** | `number` | `0` | Minimum aspect ratio threshold. |
| **`isDebug`** | `boolean` | `false` | Outputs viewport debugging logs. |
