---
id: "cc_slot_module:BetModule:director_writer:subsystem_impacts"
title: "BetModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 BetModule Cross-Subsystem Impacts

---

## 1. Cross-Subsystem Matrix

| Subsystem | Impact |
| :--- | :--- |
| **`GameDataStore`** | Stores `currentBetData` used across payout math and win presentation. |
| **`WalletModule`** | Deducts total bet amount on round spin start. |
| **`SlotSoundPlayerModule`** | Plays `sfxIncreaseBetId` / `sfxDecreaseBetId` sound cues. |
| **`DenomLabel` / `TotalBetLabel`** | Listens to `ON_UPDATE_VALUE` to format currency strings. |
