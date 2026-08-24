---
id: "cc_slot_module:SlotPaylineSchedule:gotchas:index"
title: "SlotPaylineSchedule Gotchas & Engine Defects Index"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ SlotPaylineSchedule Gotchas & Engine Defects Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_unstopped_tween_schedule`](./01_unstopped_tween_schedule.md)** | Orphaned Looping Tween on Fast Spin | HIGH | Failure to execute `stopSchedule()` leaves background tweens firing `PAYLINE_SHOW_LINE` while reels are spinning. |
