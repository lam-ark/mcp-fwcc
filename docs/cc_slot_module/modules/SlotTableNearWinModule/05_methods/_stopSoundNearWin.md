---
id: "cc_slot_module:SlotTableNearWinModule:method:_stopSoundNearWin"
title: "SlotTableNearWinModule._stopSoundNearWin Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_stopSoundNearWin"]
---

# 🚀 `SlotTableNearWinModule._stopSoundNearWin(): void`

---

## 1. Method Signature

```typescript
private _stopSoundNearWin(): void
```

---

## 2. Algorithmic Steps

Halts playing SFX `this.soundNearWinId` via `this.soundPlayer`.

---

## 3. Full Source Code

```typescript
_stopSoundNearWin(): void {
    this.soundPlayer && this.soundPlayer.stopSfx(this.soundNearWinId);
}
```
