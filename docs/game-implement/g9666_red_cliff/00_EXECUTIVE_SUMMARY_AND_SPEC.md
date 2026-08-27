---
id: "game-implement:9666:spec:executive_summary"
title: "Red Cliff (g9666) Executive Summary & Math Specification"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "g9666", "red_cliff", "specification", "math", "symbols", "megaways"]
---

# 📜 Red Cliff (g9666) Executive Summary & Math Specification

- **Game Code**: `g9666` / `cc1-red-cliff`
- **Commercial Title**: Red Cliff - Đại Chiến Xích Bích
- **Engine Framework**: Cocos Creator 2.4 + ARK Slot Module System (`eno`)
- **Max Megaways**: Up to **117,649 Ways** ($7 \times 7 \times 7 \times 7 \times 7 \times 7$)
- **Grid Layout**: 6 Main Vertical Columns + 1 Top Horizontal Sub-Reel (4 columns spanning Reels 2..5)

---

## 1. Symbol Code Registry & Paytable Tiers

| Symbol Code | Asset Name / Character | Category | Base Payout (3 / 4 / 5 / 6 of a kind) | Special Mechanics |
| :---: | :--- | :---: | :---: | :--- |
| **`K` / `K1`** | Gold Ingot (Nguyên Bảo) | Wild | Substitutes all regular symbols except Scatter | Appears on Reels 2, 3, 4, 5 and Top Sub-Reel |
| **`K1-2`, `K1-8`** | Multiplier Ingot Wild | Multiplier Wild | Substitutes + Multiplies win by $\times 2, \times 8, \times 10$ | Badge collected to banner; unexploded reverts on next spin |
| **`S1`** | Quan Vũ (Guan Yu) | High Pay (Top) | $20\times / 40\times / 100\times / 250\times$ | Triggers full-height Stacked Wild transformation |
| **`S2`** | Lưu Bị (Liu Bei) | High Pay | $15\times / 25\times / 50\times / 100\times$ | Jackpot Minor token collection symbol |
| **`S3`** | Trương Phi (Zhang Fei) | High Pay | $10\times / 20\times / 30\times / 60\times$ | Jackpot Major token collection symbol |
| **`S4`** | Triệu Vân (Zhao Yun) | High Pay | $8\times / 15\times / 25\times / 50\times$ | Jackpot Grand token collection symbol |
| **`R1` - `R5`** | A, K, Q, J, 10 | Royals (Low) | $2\times - 20\times$ | Eligible for Silver $\rightarrow$ Gold frame morphing |
| **`SC`** | Chiến Thuyền (Warship) | Scatter | Free Game Feature Trigger ($4+\text{ SC} \rightarrow 10\text{ FS}$) | Collects to HUD meter; triggers Free Game Option modal |

---

## 2. Megaways Combinatorial Math Model

$$\text{Total Ways} = \prod_{c=1}^{6} \text{Height}[c]$$

Where:
- Reel 1 & Reel 6: $\text{Height} \in [2, 7]$
- Reel 2, 3, 4, 5: $\text{Height} = \text{VerticalHeight}[c] + 1 \quad (\text{if top horizontal reel symbol active})$
- Minimum Ways: $2 \times 3 \times 3 \times 3 \times 3 \times 2 = 324 \text{ Ways}$ (or $2^6 = 64 \text{ Ways}$)
- Maximum Ways: $7 \times 7 \times 7 \times 7 \times 7 \times 7 = 117,649 \text{ Ways}$
