---
id: "cc_slot_module:JackpotWinNoticePopup:properties:runtime_state_variables"
title: "JackpotWinNoticePopup Runtime State"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 JackpotWinNoticePopup Runtime State

---

## 1. State Variables

| Variable | Type | Default | Purpose |
| :--- | :--- | :--- | :--- |
| `_listWinJP` | `NotifyJackpotWinInfo[]`| `[]` | Queue of incoming jackpot winners. |
| `_currentAward`| `NotifyJackpotWinInfo` | `null` | Currently displayed winner payload. |
| `_currentState`| `number` | `0` | FSM state (0: CLOSED, 1: MOVING, 2: IDLE, 3: CLOSING). |
