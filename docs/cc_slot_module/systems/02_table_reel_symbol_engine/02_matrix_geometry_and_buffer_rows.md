---
id: "cc_slot_module:systems:table_engine:matrix_geometry_and_buffer_rows"
title: "Matrix Geometry, Coordinates & Buffer Rows"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "table_engine", "geometry", "matrix", "buffer_rows", "coordinates", "flow"]
---

# 📐 Matrix Geometry, Coordinates & Buffer Rows

---

## 1. 2D Matrix Indexing Standard

In the `cc-common` Slot Framework, table grids use a canonical **Column-Major 2D Array format**:

$$\text{Matrix}[\text{col}][\text{row}]$$

Where:
* **`col`** ranges from $0$ to $\text{NUMBER\_COL} - 1$ (Left to Right: Col 0 is leftmost).
* **`row`** ranges from $0$ to $\text{NUMBER\_ROW} - 1$ (Bottom to Top: Row 0 is bottommost in visual coordinates, or Top to Bottom depending on game-specific `TABLE_FORMAT`).

```mermaid
graph TD
    subgraph 3x5 Standard Matrix Layout
        C0["Col 0<br>[0,2]<br>[0,1]<br>[0,0]"]
        C1["Col 1<br>[1,2]<br>[1,1]<br>[1,0]"]
        C2["Col 2<br>[2,2]<br>[2,1]<br>[2,0]"]
        C3["Col 3<br>[3,2]<br>[3,1]<br>[3,0]"]
        C4["Col 4<br>[4,2]<br>[4,1]<br>[4,0]"]
    end
```

---

## 2. Offscreen Buffer Rows Architecture

To prevent visual pop-in / flickering during vertical continuous reel scrolling, each reel column maintains extra **offscreen buffer rows**:

```mermaid
graph TD
    subgraph Single Reel Column Structure
        TopBuffer["Top Buffer Row (Row N+1) - Offscreen Hidden"]
        VisibleTop["Visible Row 2 (Top)"]
        VisibleMid["Visible Row 1 (Middle)"]
        VisibleBot["Visible Row 0 (Bottom)"]
        BotBuffer["Bottom Buffer Row (Row -1) - Offscreen Hidden"]
    end

    TopBuffer -->|Scrolls Downward| VisibleTop
    VisibleTop -->|Scrolls Downward| VisibleMid
    VisibleMid -->|Scrolls Downward| VisibleBot
    VisibleBot -->|Scrolls Downward| BotBuffer
    BotBuffer -.->|Wraps to Top & Re-assigned| TopBuffer
```

### Why Buffer Rows are Essential:
1. **Zero Pop-in on Screen Edges**: When a symbol scrolls past the bottom viewport mask, it does not abruptly vanish; it scrolls smoothly into the bottom buffer area before being recycled.
2. **Smooth Stopping Bounce (`easeBackOut`)**: When a reel stops and executes an overshoot bounce up-and-down, the top and bottom buffer symbols remain visible within the overshoot window, preventing empty black gaps inside the reel mask frame.

---

## 3. Position Calculation Math

For any symbol at grid index `[col, row]`, its local Cocos node position is calculated as:

$$X_{\text{local}} = (\text{col} - \frac{\text{NUMBER\_COL} - 1}{2}) \times \text{CELL\_WIDTH}$$

$$Y_{\text{local}} = (\text{row} - \frac{\text{NUMBER\_ROW} - 1}{2}) \times \text{CELL\_HEIGHT} + Y_{\text{offset}}$$

Where:
* `CELL_WIDTH` and `CELL_HEIGHT` are defined in `TableModuleConfig`.
* `Y_offset` accounts for custom top/bottom buffer spacing.
