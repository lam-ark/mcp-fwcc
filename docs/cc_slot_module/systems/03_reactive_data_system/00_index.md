---
id: "cc_slot_module:systems:reactive_data:index"
title: "Reactive Data System & Reconnection Architecture Index"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "reactive_data", "data_store", "reconnection", "index", "flow", "module_linkage"]
---

# 🔄 Reactive Data System & Reconnection Architecture Index

Welcome to the technical guide on the **Reactive Data Flow & Reconnection Architecture** in `cc-slot-module`.

---

## 🧭 Topic Breakdown & Navigation

1. **[`01_server_packet_ingestion_pipeline.md`](./01_server_packet_ingestion_pipeline.md)**
   * Complete end-to-end data trajectory: WebSocket Frame ➔ `GameLogic` ➔ `GameDataStore.parseDataPS()` ➔ `updateDataModules()`.
   * Synchronization pipeline and decoupling mechanisms.

2. **[`02_key_deobfuscation_map_new_keys.md`](./02_key_deobfuscation_map_new_keys.md)**
   * Bandwidth-optimized mobile payload key transformation via `mapNewKeys()` (e.g., `cna` ➔ `cascadeNextArray`, `pMul` ➔ `paylineMultiplier`).
   * Schema normalization patterns.

3. **[`03_state_immutability_and_deep_clone.md`](./03_state_immutability_and_deep_clone.md)**
   * State immutability principles: Why deep-cloning (`JSON.parse(JSON.stringify(val))`) is mandatory when broadcasting reactive slices to child UI modules.

4. **[`04_reconnection_is_resume_state_hydration.md`](./04_reconnection_is_resume_state_hydration.md)**
   * Session hydration when a player reconnects after network drop or browser refresh (`isResume`, `freeGameRemain`, `winAmountPS`, `SYNC_TABLE`).
