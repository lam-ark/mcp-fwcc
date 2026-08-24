---
id: "cc_slot_module:SlotTableNearWinModule:method:start"
title: "SlotTableNearWinModule.start Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "start"]
---

# 🚀 `SlotTableNearWinModule.start(): void`

---

## 1. Method Signature

```typescript
public start(): void
```

---

## 2. Trigger Source & Execution Lifecycle

Invoked by Cocos Creator engine upon component enablement. Registers event listeners on `this.node`.

---

## 3. Registered Listeners

- `SETUP_NEARWIN` ➔ `this.setupNearWin`
- `REEL_STOP_NEARWIN` ➔ `this.reelStopNearWin`
- `PRE_REEL_STOP_NEARWIN` ➔ `this.reelPreStopNearWin`
- `RESET_NEARWIN` ➔ `this.resetNearWin`

---

## 4. Full Source Code

```typescript
start(): void {
    this.node.on("SETUP_NEARWIN", this.setupNearWin, this);
    this.node.on("REEL_STOP_NEARWIN", this.reelStopNearWin, this);
    this.node.on("PRE_REEL_STOP_NEARWIN", this.reelPreStopNearWin, this);
    this.node.on("RESET_NEARWIN", this.resetNearWin, this);
}
```
