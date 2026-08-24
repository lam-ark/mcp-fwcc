---
id: "cc_slot_module:PaylineLineModule:overview:scene_and_prefabs"
title: "PaylineLineModule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ PaylineLineModule Scene Node Placement & Prefab Structure

---

## 1. Inspected Scene Node Placement (Cocos Creator 2.4 Production Tree)

`PaylineLineModule` is mounted as a child visual layer inside `SlotTablePaylineModule` on mode prefabs (`MainGamePrefab` / `FreeGamePrefab`):

```text
Canvas
└── Director (GameConfig, GameDataStore, GameInit, GameDirector)
    └── GameMode (OnAddGameMode)
        └── MainGamePrefab (BaseGameMode, NormalGameDirectorModule, NormalGameWriterModule, OnAddSlotModule)
            ├── SlotTableModule (SlotTableModule, TableModuleConfig, SlotTableData, SlotTableNearWinModule)
            └── SlotTablePaylineModule (SlotTablePaylineModule, PaylineConfig, SlotTablePaylineData)
                ├── PaylineSymbolModule (PaylineSymbolModule)
                ├── SymbolPool (SlotSymbolManager)
                ├── PaylineWinFrameModule (PaylineWinFrameModule)
                └── PaylineLineModule [Node with Components]
                    ├── [Component 1] PaylineLineModule
                    └── container [Child Node] (Line rendering host node)
```

---

## 2. Inspector Properties

| Property | Type | Function |
| :--- | :--- | :--- |
| `container` | `cc.Node` | Parent node hosting active line prefabs. |
| `usePrefab` | `boolean` | Flag determining whether to pool dynamic prefabs (`true`) or use static scene node arrays (`false`). |
| `lines` | `cc.Node[]` | Explicit node references array when `usePrefab = false` (visible in Inspector only when `usePrefab` is `false`). |
| `template` | `cc.Prefab` | Prefab asset defining the line graphics or sprite segments when `usePrefab = true` (visible in Inspector only when `usePrefab` is `true`). |

---

## 3. Supported Line Item Prefab Subtypes in SDK

The SDK provides 3 distinct line item component implementations attached to the `template` prefab or child line nodes:

1. **`SlotLineItem` (Base)**:
   - Responds to node events `"INIT"`, `"SHOW"`, `"HIDE"`, `"RESET"`.
   - Supports `reuse()` and `unuse()` for `cc.NodePool`.

2. **`SpinePaylineLineItem` (Spine Animated Line)**:
   - Inherits `SlotLineItem`.
   - Plays spine animations named by pattern `${animationPrefix}${payLineID}` or with zero padding (e.g. `line_01`, `line_02`).
   - Inspector properties: `spineComponent`, `animationPrefix`, `haveZeroPaddingLeft`, `loop`.

3. **`SpritePaylineLineItem` (Sprite-based Static Line)**:
   - Inherits `SlotLineItem`.
   - Switches `spriteFrame` from array `lineSpriteFrames[payLineID]` and adjusts position via `linePositions[payLineID]`.
   - Inspector properties: `spriteComponent`, `lineSpriteFrames: cc.SpriteFrame[]`, `linePositions: cc.Vec2[]`.
