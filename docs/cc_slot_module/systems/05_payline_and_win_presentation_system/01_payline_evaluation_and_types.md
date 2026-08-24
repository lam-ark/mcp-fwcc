---
id: "cc_slot_module:systems:payline:evaluation_and_types"
title: "Payline Evaluation Models & Payout Types"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "payline", "payline_types", "lines", "allways", "cluster", "scatter_pay", "both_ways"]
---

# 📐 Payline Evaluation Models & Payout Types

---

## 1. Architectural Overview

In the `cc-common` Slot SDK, win calculation is abstracted from the visual rendering layer through `SlotTablePaylineData` and `PaylineConfig`. The backend sends raw win strings which the SDK converts into geometric visual coordinates based on the configured `PAYLINE_TYPE`.

```mermaid
graph TD
    ServerPacket[Server Spin Response<br/>payLines: string[]] -->|Ingested by| Data[SlotTablePaylineData]
    Config[PaylineConfig.PAYLINE_TYPE] --> Data
    
    Data -->|PAYLINE_TYPE.Lines| C1[eno.SlotUtils.convertPayLine]
    Data -->|PAYLINE_TYPE.AllWays| C2[eno.SlotUtils.convertPayLineAllWays]
    Data -->|PAYLINE_TYPE.Cluster| C3[eno.SlotUtils.convertPayLineCluster]
    Data -->|PAYLINE_TYPE.ScatterPay| C4[eno.SlotUtils.convertPayLineScatterPay]
    
    C1 --> Normalized[Structured PayLineInfo Array<br/>winSymbols: {reel, row, index}[]]
    C2 --> Normalized
    C3 --> Normalized
    C4 --> Normalized
```

---

## 2. The 4 Standard Payline Evaluation Modes

```typescript
export enum PAYLINE_TYPE {
    Lines = 1,
    AllWays = 2,
    Cluster = 3,
    ScatterPay = 4
}
```

### A. Fixed Lines Mode (`PAYLINE_TYPE.Lines = 1`)
- **Mechanism**: Winning combinations must match predetermined zigzag tracks across adjacent reels starting from Reel 1 (e.g. 20, 25, or 50 fixed lines).
- **Configuration**: Defined in `PaylineConfig.PAY_LINE_MATRIX` mapping line index to row offsets (e.g. `"1": [1, 1, 1, 1, 1]`).
- **Visuals**: Draws explicit colored vector lines (`PaylineLineModule`) connecting the exact symbols in the payline path.

### B. AllWays Mode (`PAYLINE_TYPE.AllWays = 2`)
- **Mechanism**: Winning symbols do not follow fixed line paths; instead, matching symbols must appear anywhere on adjacent reels from left to right (e.g., $3 \times 3 \times 3 \times 3 \times 3 = 243$ Ways, $4 \times 4 \times 4 \times 4 \times 4 = 1024$ Ways).
- **Visuals**: Line vector drawing is typically disabled; instead, all participating matching symbols are highlighted and framed simultaneously (`PaylineSymbolModule`, `PaylineWinFrameModule`).

### C. Cluster Pays Mode (`PAYLINE_TYPE.Cluster = 3`)
- **Mechanism**: Payouts are awarded when 5 or more identical symbols form a horizontally or vertically contiguous cluster anywhere on the grid (popular in $7 \times 7$ or $8 \times 8$ grid cascade games).
- **Visuals**: Connects and dissolves contiguous cluster blocks during cascade collapses.

### D. Scatter Pay Mode (`PAYLINE_TYPE.ScatterPay = 4`)
- **Mechanism**: Payouts trigger when 8+ identical symbols appear anywhere on the table grid regardless of adjacency or reel positions (e.g. Sweet Bonanza mechanics).
- **Visuals**: Highlights all participating symbols scattered across arbitrary grid cells.

---

## 3. Bidirectional Payouts: Both-Ways / Right-to-Left

Games featuring **Win-Both-Ways** calculate wins starting both from Reel 1 (Left-to-Right) and Reel 5 (Right-to-Left).

- **Data Representation**: Right-to-Left paylines are received in `rightPayLines` or tagged with an `"R"` suffix in the raw payload (e.g., `"1;3;1000;R"`).
- **SDK Processing**: `SlotTablePaylineData.isRightPayLine()` detects the `"R"` flag and marks `payLine.isRight = true`.
- **Sorting Parity**: `SlotTablePaylineData.sortPayLines()` sorts lines ensuring Left-to-Right wins cycle before Right-to-Left wins.
