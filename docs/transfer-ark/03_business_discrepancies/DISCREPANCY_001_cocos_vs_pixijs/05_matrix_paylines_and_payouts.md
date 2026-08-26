---
id: "transfer-ark:business_mapping:cocos_vs_pixijs:05_matrix_paylines_payout"
title: "Business Specification 05: Matrix, Paylines & Payout Presentation"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["SlotTableModule", "SlotTablePaylineModule", "SlotSymbolModule"]
tags: ["matrix", "paylines", "payout", "allways", "symbol_click", "khung_tra_thuong"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 5. 🎰 Matrix, Paylines & Payout Presentation

---

## 5.1 Detailed Discrepancy & Specification Table

| #No | Location / Feature | ARK Studio Behavior (Cocos Creator) | Refer Game Behavior (Pixi.js) | Final Decision | Technical Notes & Bug References |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **8** | **Tapping Matrix Symbols** | Tapping any symbol on the reel matrix opens its individual Payout popup. | Tapping symbols **has no function** (does not open popup). | **Follow Refer** | [Bug 86d41a08z](https://app.clickup.com/t/9008199668/86d41a08z)<br>Disable symbol click handlers on active matrix board. |
| **27** | **Multi-Combination Payline Rendering** | Renders separate payline graphics for each distinct symbol winning combination. | **Renders a single aggregated payline** showing the combined sum of all wins. | **Follow Refer** | Aggregate multi-combination paylines to avoid visual clutter. |
| **28** | **Payout Display (KTT) in Base Game** | Idle/No win: Displays static instructional tips.<br>Winning spin: Displays "Win $XXX.XX" / "Total Win $YYY.YY". | Idle/No win: Empty (no tips displayed).<br>Winning spin: Displays raw amount "$XXX.XX". | **Follow Refer** | Suppress static tips; render active win amounts cleanly. |
| **29** | **Dedicated Win Box Element** | Renders a separate standalone Win Box on the HUD. | No dedicated Win box (win amounts update directly onto Paybar/Balance). | **Follow Refer** | Match Refer Action Panel layout without standalone Win box. |
| **30** | **Currency Format Precision** | Enforces Dollar ($) only without cents. | Supports standard cent decimals ($XX.YY). | **Follow Refer** | Format amounts to 2 decimal places (e.g. `$12.50`). |
| **58** | **Action Panel Bet Representation** | Displays 3 distinct bet metrics: Coin Value, Bet, Total Bet. | Displays 1 single Total Bet value on the Action Panel. | **Follow Refer** | Approved simplified denomination/credit display. |
| **59** | **Ways to Win Display (All Ways / Megaways)** | Static "All Ways" text label. | Dynamic Ways counter reflecting the active ways for that spin. | **Follow Refer** | Emit dynamic ways updates via `UPDATE_MEGAWAY`. |
| **60** | **Button Lockout During Active Spin** | Only Turbo button remains interactive while reels are spinning. | Player can open History, Settings, and Rules; only Bet +/- buttons are disabled. | **Follow Refer** | Allow non-gameplay menu navigation during active spins. |
