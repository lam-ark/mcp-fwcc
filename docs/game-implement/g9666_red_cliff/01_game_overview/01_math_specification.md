---
id: "game-implement:9666:overview:math_spec"
title: "Red Cliff (g9666) Mathematical Specification & Megaways Model"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "math", "megaways", "rtp", "volatility"]
---

# 📐 Red Cliff (g9666) Mathematical Specification & Megaways Model

---

## 1. Megaways Combinatorial Equation

The active ways to win in Red Cliff 9666 are calculated using the product of symbol heights across all 6 columns:

$$\text{Total Ways} = \prod_{c=1}^{6} H[c]$$

Where the height vector $H[c]$ is determined by:
- $H[1] \in [2, 7]$ (Main Reel 1)
- $H[2] = H_{\text{main}}[2] + 1 \quad (H_{\text{main}}[2] \in [2, 6] + 1 \text{ Top Reel symbol})$
- $H[3] = H_{\text{main}}[3] + 1 \quad (H_{\text{main}}[3] \in [2, 6] + 1 \text{ Top Reel symbol})$
- $H[4] = H_{\text{main}}[4] + 1 \quad (H_{\text{main}}[4] \in [2, 6] + 1 \text{ Top Reel symbol})$
- $H[5] = H_{\text{main}}[5] + 1 \quad (H_{\text{main}}[5] \in [2, 6] + 1 \text{ Top Reel symbol})$
- $H[6] \in [2, 7]$ (Main Reel 6)

---

## 2. Megaways Boundaries

| Metric | Calculation | Ways Count |
| :--- | :--- | :---: |
| **Minimum Ways** | $2 \times (2+1) \times (2+1) \times (2+1) \times (2+1) \times 2$ | **324 Ways** |
| **Maximum Ways** | $7 \times (6+1) \times (6+1) \times (6+1) \times (6+1) \times 7$ | **117,649 Ways** |
