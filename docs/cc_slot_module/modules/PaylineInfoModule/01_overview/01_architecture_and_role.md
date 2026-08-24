---
id: "cc_slot_module:PaylineInfoModule:overview:architecture_and_role"
title: "PaylineInfoModule Architectural Role & Payline Toast HUD"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "overview", "architecture", "payline_toast"]
---

# 🏛️ PaylineInfoModule Architectural Role & Payline Toast HUD

---

## 1. Architectural Mission

`PaylineInfoModule` manages the floating notification banner anchored above or below the slot reels mounted at `Canvas/Director/UIManager/PaylineInfo`. As winning lines/ways cycle during payline presentation, it dynamically formats payline metadata based on the active math system (`LINES`, `ALLWAYS`, `CLUSTER`, `SCATTER_PAY`), rendering symbol thumbnails, line indices, multiplier quantities, and total payouts.

```mermaid
graph TD
    PLC[PaylineControllerModule / Writer] -->|ON_SHOW_PAYLINE_INFO| PIM[PaylineInfoModule]
    PLC -->|ON_HIDE_PAYLINE_INFO| PIM
    
    PIM -->|convertPayLineInfo| Formatter[Format per PAY_SYSTEM: Lines/AllWays/Cluster/ScatterPay]
    
    Formatter -->|lbLeft.string| LeftLabel[Line ID / Reel Count / Win Text]
    Formatter -->|sprSymbol.spriteFrame| Thumbnail[Small Symbol Thumbnail Sprite]
    Formatter -->|lbRight.string| RightLabel[Payout Amount = $X]
```

---

## 2. Key Responsibilities

1. **Multi-Math Formatting (`convertPayLineInfo`)**:
   - Seamlessly converts payline data payloads for 4 slot systems: `LINES`, `ALLWAYS`, `CLUSTER`, and `SCATTER_PAY`.
2. **Dynamic Symbol Thumbnails (`_symbolAssets`)**:
   - Lookups small symbol sprite frames by prefix and ID (`${smallSymbolPrefix}${symbolId}`).
3. **Game Mode Filtering (`shouldWorkInCurrentGameMode`)**:
   - Gated to specific game modes or globally enabled (`useAcrossAllGameModes`).
