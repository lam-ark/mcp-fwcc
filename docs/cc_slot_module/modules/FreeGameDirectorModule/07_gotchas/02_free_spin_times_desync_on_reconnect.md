---
id: "cc_slot_module:FreeGameDirectorModule:gotcha:free_spin_times_desync_on_reconnect"
title: "Gotcha: Spin Times Badge Desynchronization on Reconnection"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "gotchas", "reconnect", "spin_times"]
---

# ⚠️ Gotcha: Spin Times Badge Desynchronization on Reconnection

## 1. Defect Symptom
If a player refreshes their browser during Free Spins with 2 spins remaining, the HUD badge resets to 10 upon reloading.

---

## 2. Root Cause Analysis
Reading `playSession.freeGame` instead of `playSession.freeGameRemain` restores the initial award rather than the remaining session count.

---

## 3. Recommended Resolution
Always evaluate `freeGameRemain` first:
```typescript
syncSpinTimes(): void {
    const { freeGameRemain, freeGame } = this.dataStore.playSession;
    this.dataStore.freeSpinTimes = freeGameRemain != null ? freeGameRemain : freeGame;
    this.spinTimes.emit("UPDATE_SPINTIMES", this.dataStore.freeSpinTimes);
}
```
