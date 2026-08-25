---
id: "cc_slot_module:JackpotWinNoticePopup:director_writer:pipeline_orchestration"
title: "JackpotWinNoticePopup Pipeline Orchestration"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎻 JackpotWinNoticePopup Pipeline Orchestration

---

## 1. Socket to View Pipeline

Jackpot broadcast socket events mutate `JackpotData.notifyJackpotInfo`, triggering reactive observers in `JackpotWinNoticePopup` without direct coupling to network sockets.
