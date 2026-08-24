---
id: "cc_slot_module:PaylineNumberModule:overview:scene_and_prefabs"
title: "PaylineNumberModule Scene Node Placement & Gutter Hierarchy"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ PaylineNumberModule Scene Node Placement & Gutter Hierarchy

---

## 1. Inspected Scene Node Placement

`PaylineNumberModule` is attached as a sub-module under `SlotTablePaylineModule` or mounted directly on the `BoardG` gutters:

```text
Canvas/Director/GameMode/MainGamePrefab
└── SlotTablePaylineModule
    ├── PaylineSymbolModule
    ├── SymbolPool (SlotSymbolManager)
    └── PaylineNumberModule [Node with Components]
        ├── [Component 1] PaylineNumberModule
        ├── LeftGutter [Child Node] (container[0])
        │   ├── num_1 (PaylineNumberItem: numberID = "1")
        │   ├── num_2 (PaylineNumberItem: numberID = "2")
        │   └── ...
        └── RightGutter [Child Node] (container[1])
            ├── num_1 (PaylineNumberItem: numberID = "1")
            ├── num_2 (PaylineNumberItem: numberID = "2")
            └── ...
```

---

## 2. Inspector Properties

| Property | Type | Function |
| :--- | :--- | :--- |
| `container` | `cc.Node[]` | Array of parent container nodes (e.g. `[LeftGutterNode, RightGutterNode]`) scanned in `onLoadExtend()` for `PaylineNumberItem` components. |

---

## 3. Child Component: `PaylineNumberItem`

Each line number badge in the gutter hierarchy is governed by `PaylineNumberItem`:

```typescript
@ccclass
@executeInEditMode
export class PaylineNumberItem extends cc.Component {
    @property
    public numberID: string = '';
}
```

### Key Behaviors:
1. **Auto `numberID` Resolution**:
   - If `numberID` is left empty in the Inspector, `onLoad()` splits the node's name by `_` and takes the last token (e.g., node name `num_15` yields `numberID = "15"`).
2. **Dual Interaction Modes**:
   - **Direct Method Invocation**: `show()` activates the node (`this.node.active = true`), `hide()` deactivates (`this.node.active = false`).
   - **Node Event Subscription**: Listens to `this.node.on("SHOW")` and `this.node.on("HIDE")` for decoupling with timeline animations.
3. **Editor Execution (`@executeInEditMode`)**:
   - Allows designers to preview line number layouts and verify `numberID` extraction directly in the Cocos Creator editor without running the game.
