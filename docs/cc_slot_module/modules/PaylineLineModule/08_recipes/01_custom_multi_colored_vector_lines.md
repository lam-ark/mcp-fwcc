---
id: "cc_slot_module:PaylineLineModule:recipes:custom_multi_colored_vector_lines"
title: "Recipe: Rendering Dynamic Multi-Colored Vector Lines with cc.Graphics"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "recipes", "cc_graphics", "vector_lines"]
---

# 💡 Recipe: Rendering Dynamic Multi-Colored Vector Lines with `cc.Graphics`

---

## 1. Objective

Instead of instantiating heavy prefab nodes per line, render all active paylines using a single lightweight `cc.Graphics` component with distinct line colors.

```typescript
@ccclass
export class GraphicsPaylineLineModule extends PaylineLineModule {
    @property(cc.Graphics)
    private graphics: cc.Graphics = null;

    private lineColors: cc.Color[] = [
        cc.Color.RED,
        cc.Color.YELLOW,
        cc.Color.GREEN,
        cc.Color.CYAN,
        cc.Color.MAGENTA
    ];

    protected showPayLine(payLine: PayLineInfo, hideAll: boolean = true): void {
        if (hideAll) {
            this.graphics.clear();
        }

        const color = this.lineColors[Number(payLine.payLineID) % this.lineColors.length];
        this.graphics.strokeColor = color;
        this.graphics.lineWidth = 6;

        const coords = payLine.winSymbols;
        if (coords && coords.length > 0) {
            const startPos = this.getCellCenter(coords[0].reel, coords[0].row);
            this.graphics.moveTo(startPos.x, startPos.y);

            for (let i = 1; i < coords.length; i++) {
                const pt = this.getCellCenter(coords[i].reel, coords[i].row);
                this.graphics.lineTo(pt.x, pt.y);
            }
            this.graphics.stroke();
        }
    }

    protected clearAll(): void {
        this.graphics.clear();
    }

    private getCellCenter(reel: number, row: number): cc.Vec2 {
        const cellWidth = 180;
        const cellHeight = 160;
        return cc.v2((reel - 2) * cellWidth, (row - 1) * cellHeight);
    }
}
```
