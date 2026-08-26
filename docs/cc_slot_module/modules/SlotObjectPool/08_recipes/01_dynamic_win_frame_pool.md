---
id: "cc_slot_module:SlotObjectPool:recipes:dynamic_win_frame_pool"
title: "Recipe: Dynamic Win Frame Grid Highlighter"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "recipes", "win_frame"]
---

# 💡 Recipe: Dynamic Win Frame Grid Highlighter

---

## 1. Code Example

```typescript
import { SlotObjectPool } from 'cc-slot-module/PoolFactory/SlotObjectPool';

export class CustomPaylineHighlighter extends cc.Component {
    @property(SlotObjectPool)
    framePool: SlotObjectPool = null;

    highlightWinningSymbols(cells: { col: number, row: number }[]): void {
        this.framePool.clear();
        cells.forEach(cell => {
            const frameNode = this.framePool.get();
            frameNode.setPosition(cell.col * 140, cell.row * 140);
        });
    }

    clearHighlights(): void {
        this.framePool.clear();
    }
}
```
