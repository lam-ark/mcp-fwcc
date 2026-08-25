---
id: "cc_slot_module:JackpotWinModule:properties_and_state:inspector_properties"
title: "JackpotWinModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "properties", "inspector", "decorator"]
---

# 🎛️ JackpotWinModule Inspector Properties Specification

---

## 1. Inspector Property Schema

| Name | Type | Default | When Set | Where Read | Impact If Desynced |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `delayShowTime` | `number` | `2` | Design time in Editor | `bindQuickShow()` | Altering modifies unskippable grace period (0 allows instant skipping). |
| `delayHideTime` | `number` | `1` | Design time in Editor | `finish()` | Modifies linger duration before cutscene auto-dismissal. |
| `animDuration` | `number` | `10` | Design time in Editor | `startUpdateWinAmount()` | Sets base duration for natural count-up number interpolation. |
| `winAmount` | `cc.Node` | `null` | Scene authoring in Editor | `onLoadExtend()` | Must host a `cc.Label` component; if missing, runtime crash on label update. |
| `title` | `cc.Node` | `null` | Scene authoring in Editor | `enter()` | Hosts tier title text or Spine skeleton (`GRAND`, `MAJOR`, `MINOR`, `MINI`). |
| `coinsEffect` | `cc.Node` | `null` | Scene authoring in Editor | `onLoadExtend()` | Hosts `cc.ParticleSystem` coin shower effect. |
