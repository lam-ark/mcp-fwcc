---
id: "cc_slot_mechanics:HorizontalCascadeModuleConfig:gotchas:common"
title: "HorizontalCascadeModuleConfig Engine Gotchas & Troubleshooting"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModuleConfig", "horizontal_cascade_module_config", "cc_slot_mechanics", "gotchas", "troubleshooting"]
---

# ⚠️ `HorizontalCascadeModuleConfig` Engine Gotchas & Troubleshooting

---

## 1. Gotcha: Mask Clipping & Bounding Box Overflow
- **Symptom**: Multi-height expanded symbols or horizontal sub-reel items get clipped unexpectedly during spin animations.
- **Root Cause**: The parent `cc.Mask` rectangle bounds do not match the expanded symbol dimensions.
- **Fix**: Adjust `Mask` node dimensions or reparent highlight nodes to the top-level VFX container.

---

## 2. Gotcha: Fast-Stop Desynchronization
- **Symptom**: Fast-stop button click causes symbols to freeze mid-air or skip drop settling.
- **Root Cause**: Skipping tween animations without completing the underlying data matrix update.
- **Fix**: Ensure `fastStop()` always invokes `stopSpin()` / `recycleSymbol()` to guarantee deterministic matrix state.
