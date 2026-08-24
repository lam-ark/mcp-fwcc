---
id: "cc_slot_module:FortuneWheelGameDirector:overview:lifecycle_flowchart"
title: "FortuneWheelGameDirector Wheel Spin Flowchart"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 FortuneWheelGameDirector Wheel Spin Flowchart

## 1. Wheel Spin Lifecycle Flowchart

```mermaid
graph TD
    Entry([enter(): startCountDown 15s]) --> Wait[Wait for User Spin or Timeout]
    
    Wait -->|User Clicks Spin / Timeout| Spin[onSpinWheel: Emit SEND_BONUS_GAME_REQUEST 0]
    Spin --> Accel[moduleEvent: START_SPIN_WHEEL isTurboActive]
    
    Accel --> Rec[Server Returns Target Wedge]
    Rec --> Settle[_showWheelResult: moduleEvent STOP_SPIN_WHEEL bonusValue]
    Settle --> SettleAnim[Wheel Decelerates and Lands on Winning Segment]
    SettleAnim --> TotalWin[_playFinalResultEffect: Launch TOTAL_WIN cutscene]
```
