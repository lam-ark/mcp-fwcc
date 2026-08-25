---
id: "cc_slot_module:JackpotHistoryModule:events:scoped_module_events"
title: "JackpotHistoryModule Scoped Events"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "events", "scoped"]
---

# 📡 JackpotHistoryModule Scoped Node Events

---

## 1. Node Events Emitted

| Event | Target | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| `CLEAR_DATA` | `this.recordView` | None | Clears winner rows. |
| `UPDATE_DATA` | `this.recordView` | `originalData, itemPerPage` | Renders winner rows. |
