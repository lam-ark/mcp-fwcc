---
id: "game-implement:9666:overview"
title: "Red Cliff (g9666) - Game Overview & Game Rules Specification"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
section: "overview"
tags: ["game_implement", "9666", "overview", "rules", "megaways", "symbols", "paylines"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 1. 📋 Game Overview & Rules Specification

---

## 1.1 Core Specifications
- **Game ID**: `g9666`
- **Reel Dimensions**: 6 Reels (Columns) with variable row heights (2 to 7 rows per reel).
- **Sub-Reel (Top Horizontal Reel)**: 4 columns across Reels 2, 3, 4, 5.
- **Pay System**: **Allways / Megaways** (2,048 up to 32,400 Ways to Win).
- **Core Mechanics**:
  - **Cascade / Refill**: Winning symbols explode and trigger new symbol drop.
  - **Multi-size Symbols**: Symbols span 1x1, 1x2, 1x3, 1x4 height.
  - **Wild Transforming & Stack Wild**: Symbols with silver/gold frames transform into Wild ('K') upon forming winning combinations.
  - **Multiplier Accumulation**: Progressive multiplier increases +1 on every consecutive cascade in Free Spins.

---

## 1.2 Symbol Dictionary & ID Table
| Symbol Name | Symbol ID | Type | Dimensions | Special Feature |
| :--- | :---: | :---: | :---: | :--- |
| **Scatter (Binh Phù)** | `'A'` | Scatter | 1x1 only | 4+ Scatters trigger Free Spins mode (`IntroFreeGame`). |
| **Wild (Cờ Lệnh)** | `'K'` | Wild | 1x1 to 1x4 | Substitutes for all symbols except Scatter. Multiplier on top sub-reel. |
| **Guan Yu (Quan Vũ)** | `'2'` | High Pay | 1x1 to 1x4 | Highest paying character symbol. |
| **Zhang Fei (Trương Phi)** | `'3'` | High Pay | 1x1 to 1x4 | High paying character symbol. |
| **Zhao Yun (Triệu Vân)** | `'4'` | High Pay | 1x1 to 1x4 | High paying character symbol. |
| **Zhuge Liang (Khổng Minh)** | `'5'` | High Pay | 1x1 to 1x4 | High paying character symbol. |
| **Horse (Xích Thố)** | `'6'` | Mid Pay | 1x1 to 1x4 | Mid paying animal symbol. |
| **War Fan (Quạt Ba Tiêu)** | `'7'` | Mid Pay | 1x1 to 1x4 | Mid paying weapon symbol. |
| **Royals (A, K, Q, J, 10)** | `'8'`, `'9'`, `'10'`, `'J'`, `'Q'` | Low Pay | 1x1 to 1x4 | Standard card rank symbols. |
