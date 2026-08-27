---
id: "game-implement:9666:payline:architecture_and_allways"
title: "Red Cliff (g9666) Payline Subsystem Architecture & 243 AllWays Rules"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "payline", "allways", "SlotTablePaylineModule9666", "SlotTablePaylineData9666"]
---

# 🎯 Red Cliff (g9666) Payline Subsystem Architecture & 243 AllWays Rules

---

## 1. Payline Model Overview (243 AllWays)

Red Cliff 9666 implements an **AllWays (243 Ways to Win)** payline evaluation model:
- Adjacent symbols landing on consecutive reels from leftmost (Reel 1) to right.
- **Components Involved**:
  - [`SlotTablePaylineModule9666`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Payline/SlotTablePaylineModule9666.ts): Main payline presentation orchestrator.
  - [`SlotTablePaylineData9666`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Payline/SlotTablePaylineData9666.ts): Converts raw matrix with Mega symbols into payline grid coordinates.
  - [`SlotPaylineSchedule9666`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Payline/SlotPaylineSchedule9666.ts): Schedules sequential or blinking payline presentations.
  - [`PaylineSymbolModule9666`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Payline/PaylineSymbolModule9666.ts): Controls winning symbol highlights and combine effects.

```mermaid
graph TD
    A[PlaySession Data: payLines] --> B[SlotTablePaylineData9666]
    B --> C[eno.SlotUtils.convertMegaSymbols]
    C --> D[SlotPaylineSchedule9666.getTotalWinAmount]
    D --> E[SlotTablePaylineModule9666.showPayline]
    E --> F[PaylineSymbolModule9666.playSymbolAnimation]
    F --> G[PaylineInfoModule9666: MoneyTween & Spine Bone Tracking]
```

---

## 2. Base Win vs. Multiplied Win Calculation

In `SlotPaylineSchedule9666.ts`, base winning amounts before multiplier application are computed via:

```typescript
protected getTotalWinAmount(paylines: any[]): number {
    return paylines.reduce((total, payline) => total + (payline.payLineWinAmount / payline.multiplier), 0);
}
```

This ensures the UI can present the un-multiplied base amount first, followed by the dynamic multiplier application animation in `PaylineInfoModule9666`.
