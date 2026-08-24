---
id: "cc_slot_module:systems:table_engine:symbol_pooling_and_gc_optimization"
title: "Symbol Pooling & Garbage Collection (GC) Optimization"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "table_engine", "pooling", "node_pool", "gc_optimization", "performance", "flow"]
---

# 🏊 Symbol Pooling & Garbage Collection (GC) Optimization

---

## 1. Zero-Allocation Pooling Lifecycle

High-speed slot spins generate dozens of temporary symbol entities every second. Creating and destroying `cc.Node` instances at runtime causes severe memory churn and trigger JavaScript Garbage Collection (GC) pauses on low-end mobile devices (resulting in micro-stutters and dropped frames).

The `SlotSymbolManager` and `SlotCustomNodePool` implement a **Zero-Allocation Node Pool**:

```mermaid
sequenceDiagram
    autonumber
    participant Init as GameInit / Scene Startup
    participant Pool as SlotSymbolManager (cc.NodePool)
    participant Reel as SlotReelModule
    participant Recy as Recycle Stream

    Init->>Pool: Pre-allocates N Static & Blur Symbol Nodes
    Reel->>Pool: checkoutSymbolNode(symbolId)
    alt Pool Has Inactive Node
        Pool-->>Reel: Returns pooled cc.Node (re-activated)
    else Pool Empty
        Pool->>Pool: Instantiates new node & warns pool size
        Pool-->>Reel: Returns new node
    end
    
    Reel->>Reel: Rolls symbol off-screen beyond bottom buffer
    Reel->>Recy: recycleSymbolNode(node)
    Recy->>Pool: node.removeFromParent() & pool.put(node)
    Note over Pool: Node deactivated & cached for reuse
```

---

## 2. Node Pool Best Practices & Invariants

1. **Prewarm During Bootstrap**: All static and blur symbol variants must be instantiated during scene preloading in `GameInit`, ensuring zero `cc.instantiate()` calls occur during active spin loops.
2. **Reset Node State on Checkout**: When retrieving a node from the pool, `SlotSymbolModule.resetState()` must clear all active scale/opacity tweens, stop running Spine skeleton tracks, and reset opacity to 255.
3. **No Dangling Event Listeners**: Nodes must unbind local touch listeners before returning to the pool via `node.targetOff(this)`.
