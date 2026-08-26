---
id: "cc_slot_module:PoolFactoryModule:game_flow:spin_phase_breakdown"
title: "PoolFactoryModule Spin Phase Execution Breakdown"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# ⚡ PoolFactoryModule Spin Phase Execution Breakdown

---

## 1. Spin Phase Roles

1. **Spin Start / Preparation**:
   - Reclaims active leftover particle or flying coin nodes via `returnAllObjects()`.
2. **Reel Spinning & Near-Win Anticipation**:
   - Spawns anticipation highlight boxes or reel border glow items on demand via `getObject()`.
3. **Payline & Win Presentation**:
   - Borrows coin burst particles, win frame overlays, or floating text elements from the pool.
4. **Fast-To-Result (FTR) / Skip**:
   - Immediately invokes `returnAllObjects()` to cancel and recycle all active visual effects back to the pool in a single zero-allocation frame.
