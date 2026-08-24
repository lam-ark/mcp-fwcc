---
id: "cc_slot_module:SlotTablePaylineModule:method:onSetupPaylines"
title: "SlotTablePaylineModule.onSetupPaylines Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "methods", "onSetupPaylines"]
---

# 🚀 `SlotTablePaylineModule.onSetupPaylines(): void`

---

## 1. Method Signature

```typescript
protected onSetupPaylines(): void
```

---

## 2. Trigger Source & Execution Lifecycle

Triggered via `this.moduleEvent.emit("SETUP_PAYLINES")` by `NormalGameWriterModule` / `FreeGameWriterModule` when all reels finish stopping.

---

## 3. Algorithmic Steps

1. Injects `PaylineUtils.setConfig(this.paylineConfig)`.
2. Queries normalized data from `slotTablePaylineData`:
   - `matrix` ➔ `this.slotTablePaylineData.getMatrix()`
   - `payLines` ➔ `this.slotTablePaylineData.getPayLines()`
   - `jackpotPayline` ➔ `this.slotTablePaylineData.getJackpotPayline()`
   - `winSymbols` ➔ `this.slotTablePaylineData.getWinSymbols()`
3. Dispatches `this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_SET_DATA, { matrix, payLines, winSymbols, jackpotPayline })`.

---

## 4. Full Source Code

```typescript
protected onSetupPaylines(): void {
    PaylineUtils.setConfig(this.paylineConfig);
    const matrix = this.slotTablePaylineData.getMatrix();
    const payLines = this.slotTablePaylineData.getPayLines();
    const jackpotPayline = this.slotTablePaylineData.getJackpotPayline();
    const winSymbols = this.slotTablePaylineData.getWinSymbols();

    this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_SET_DATA, {
        matrix,
        payLines,
        winSymbols,
        jackpotPayline
    });
}
```
