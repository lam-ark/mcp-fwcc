---
id: "cc_slot_module:SlotTableNearWinModule:method:reelPreStopNearWin"
title: "SlotTableNearWinModule.reelPreStopNearWin Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "reelPreStopNearWin"]
---

# 🚀 `SlotTableNearWinModule.reelPreStopNearWin(): void`

---

## 1. Method Signature

```typescript
public reelPreStopNearWin(): void
```

---

## 2. Trigger Source & Execution Lifecycle

Triggered via `this.node.emit("PRE_REEL_STOP_NEARWIN")` by `SlotTableModule` immediately before reel easing deceleration starts.

---

## 3. Full Source Code

```typescript
reelPreStopNearWin(): void {
    // before reel easing stop
}
```
