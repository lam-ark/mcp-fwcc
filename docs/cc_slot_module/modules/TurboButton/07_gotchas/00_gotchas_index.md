---
id: "cc_slot_module:TurboButton:gotchas:index"
title: "TurboButton Gotchas Index"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ TurboButton Gotchas Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_persisted_turbo_state_mismatch`](./01_persisted_turbo_state_mismatch.md)** | Local Storage Turbo Desync on Launch | MEDIUM | If `LOAD_CACHE_TURBO` is not emitted during bootstrap, `gameSettings.isTurboActive` remains false despite stored user state. |
| **[`02_turbo_toggle_during_active_roll`](./02_turbo_toggle_during_active_roll.md)** | Reel Deceleration Mid-Spin Glitch | HIGH | Changing turbo mode mid-spin requires `SlotTableDirector` to cleanly blend curve timings without jittering reel positions. |
