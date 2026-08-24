---
id: "cc_slot_module:GameConfig:recipe:lines_vs_allways"
title: "Recipe: Configuring AllWays vs Paylines Math Models"
category: "cc_slot_module"
tags: ["GameConfig", "gameconfig", "cc_slot_module", "recipes", "pay_system", "allways", "lines", "math_model"]
---

# 💡 Recipe: Configuring AllWays vs Paylines Math Models

## 1. Model 1: AllWays Ways-to-Win Configuration
In an AllWays game (e.g. 243 ways, 1024 ways, Megaways), symbols pay on adjacent columns from left to right regardless of row position:

```typescript
@ccclass("GameConfigAllWays")
export default class GameConfigAllWays extends GameConfig {
    public PAY_SYSTEM = PAY_SYSTEM_TYPE_ENUM.ALLWAYS;
    public TOTAL_BET_CREDIT: number = 25; // Base bet multiplier
    public TABLE_FORMAT: number[] = [3, 3, 3, 3, 3]; // 3x3x3x3x3 = 243 Ways
}
```

---

## 2. Model 2: Fixed Paylines Configuration
In a line-based game (e.g. 20 lines, 25 lines), wins are evaluated along predefined coordinate paths:

```typescript
@ccclass("GameConfigLines")
export default class GameConfigLines extends GameConfig {
    public PAY_SYSTEM = PAY_SYSTEM_TYPE_ENUM.LINES;
    public LINE_NUMBER: number = 25; // Total active paylines
    public TABLE_FORMAT: number[] = [3, 3, 3, 3, 3];
}
```
