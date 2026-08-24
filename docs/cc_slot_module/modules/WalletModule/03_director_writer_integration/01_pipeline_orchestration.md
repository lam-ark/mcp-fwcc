---
id: "cc_slot_module:WalletModule:director_writer:pipeline_orchestration"
title: "WalletModule Pipeline & Director Orchestration"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 WalletModule Pipeline & Director Orchestration

---

## 1. Event Orchestration

Listens to `GameUIEvents.WALLET` event channels:
- `PAUSE_WALLET`: Broadcast when big win or celebratory cutscenes begin.
- `RESUME_WALLET`: Broadcast when big win count-up concludes.
- `SYNC_WALLET`: Broadcast during reconnect hydration.
