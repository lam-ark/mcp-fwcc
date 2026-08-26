---
id: "cc_slot_module:SlotObjectPool:pipeline:pipeline_orchestration"
title: "SlotObjectPool Pipeline Orchestration & Writer Integration"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "pipeline", "orchestration"]
---

# 🎛️ SlotObjectPool Pipeline Orchestration & Writer Integration

---

## 1. Writer Integration

`SlotObjectPool` is consumed by Payline and Cascade rendering modules orchestrated by writer commands:

```typescript
// Payline presenter executing writer steps
showPaylineFrames(winningCells: cc.Vec2[]): void {
    this.framePool.clear();
    winningCells.forEach(cell => {
        const frame = this.framePool.get();
        frame.position = this.calculateCellPosition(cell.x, cell.y);
    });
}
```
