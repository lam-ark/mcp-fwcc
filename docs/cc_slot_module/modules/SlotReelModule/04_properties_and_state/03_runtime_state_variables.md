---
id: "cc_slot_module:SlotReelModule:properties:runtime_state_variables"
title: "SlotReelModule Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "properties", "runtime_state", "state_variables"]
---

# 📊 SlotReelModule Runtime State Variables

---

## 1. Internal State Variables Dictionary

| Variable Name | Type | Default | Mutation Moment | Purpose & Guard Role |
| :--- | :--- | :--- | :--- | :--- |
| `listSymbols` | `cc.Node[]` | `[]` | Pushed/shifted in `spawnSymbol()` & `recycleSymbol()`. | Active array of symbol nodes currently mounted on this reel column. |
| `resultSymbols` | `cc.Node[]` | `[]` | Populated in `spawnReelSymbol()`. | Stores references to winning/visible target symbols for payline evaluation. |
| `data` | `string[]` | `[]` | Set in `updateReelResult(symbols)`. | Target symbol codes including top and bottom buffer symbols. |
| `originalPosition` | `cc.Vec2` | `null` | Saved in `initReel()`. | Baseline resting anchor coordinate of the reel column node. |
| `tween` | `any` | `null` | Assigned during `spinAction()` and `playStopAnimation()`. | Holds active `cc.tween` instance; cleared on completion. |
