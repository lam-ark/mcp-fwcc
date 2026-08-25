---
id: "cc_slot_module:JackpotWinNoticePopup:overview:architecture_and_role"
title: "JackpotWinNoticePopup Architecture & Role"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "overview", "architecture", "jackpot_notice"]
---

# 🏛️ JackpotWinNoticePopup Architecture & Role

`JackpotWinNoticePopup` is the global real-time jackpot broadcast banner in the `cc-common` Slot Framework SDK. Mounted directly in the scene graph, it listens reactively to `JackpotData.notifyJackpotInfo`, queues other room players who hit progressive jackpots, and presents animated fade/slide toast notifications sequentially.

---

## 1. Architectural Boundaries & System Role

- **Self-Exclusion Filter**: Automatically filters out winning notices where `displayName === userDisplayName` (since the local player receives the dedicated fullscreen `JackpotWinModule` celebration).
- **Sequential Queueing**: Stores incoming winning alerts in `_listWinJP` and displays them sequentially with configured display (`delayTime = 4s`) and interval (`delayNextWinner = 2s`) durations.
- **State Machine Transitions**: Transitions through `CLOSED (0) ➔ MOVING (1) ➔ IDLE (2) ➔ CLOSING (3)` using `cc.tween` to guarantee clean animation chaining without UI overlap.

---

## 2. Component Hierarchy

Canonical Node Path: `Canvas/Director/Popup/JackpotNotice`

```text
Canvas/Director/Popup/JackpotNotice (JackpotWinNoticePopup)
├── Background (cc.Sprite / cc.Layout)
├── DisplayNameLabel (cc.Label)
├── TextWinLabel (cc.Label - Localized "has won")
├── WinAmountLabel (cc.Label - Formatted currency amount)
└── CloseButton (Optional click-to-dismiss hit area)
```

---

## 3. Inheritance Diagram

```mermaid
classDiagram
    cc_Component <|-- SlotBaseModule
    SlotBaseModule <|-- JackpotWinNoticePopup

    class JackpotWinNoticePopup {
        +moneyFormatter: MoneyFormatter
        +displayNameLb: cc.Label
        +textWin: cc.Label
        +winAmountLb: cc.Label
        +delayTime: number
        +delayNextWinner: number
        +fadeTime: number
        +jackpotData: eno.JackpotData
        +modelName: string
        +_listWinJP: NotifyJackpotWinInfo[]
        +_currentAward: NotifyJackpotWinInfo
        +_currentState: number
        +onLoadExtend()
        +setupObserver()
        +showWinNotice(data)
        +showNextWinner()
        +showCurrentWinner()
        +showInfo()
        +hideCurrentWinner()
        +onClosePopup()
        +onDestroy()
    }
```
