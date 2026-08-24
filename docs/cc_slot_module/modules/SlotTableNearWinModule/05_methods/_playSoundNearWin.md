---
id: "cc_slot_module:SlotTableNearWinModule:method:_playSoundNearWin"
title: "SlotTableNearWinModule._playSoundNearWin Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_playSoundNearWin"]
---

# 🚀 `SlotTableNearWinModule._playSoundNearWin(): void`

---

## 1. Method Signature

```typescript
private _playSoundNearWin(): void
```

---

## 2. Algorithmic Steps

Plays looping SFX `this.soundNearWinId` via `this.soundPlayer`.

---

## 3. Full Source Code

```typescript
_playSoundNearWin(): void {
    this.soundPlayer && this.soundPlayer.playSfx(this.soundNearWinId);
}
```
