---
id: "cc_slot_module:SlotTableModule:method:registerEvents"
title: "SlotTableModule.registerEvents() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "registerEvents", "events"]
---

# `SlotTableModule.registerEvents(): void`

---

## 1. Method Signature
```typescript
protected registerEvents(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Subscribes handlers on `this.moduleEvent` for table lifecycle commands:
* `TABLE_INIT` ➔ `this.initTable`
* `TABLE_START_SPIN` ➔ `this.startSpin`
* `TABLE_STOP_SPIN` ➔ `this.stopSpin`
* `TABLE_FAST_STOP` ➔ `this.fastStop`
* `SHOW_BEAUTY_MATRIX` ➔ `this.showBeautyMatrix`
* `SYNC_TABLE` ➔ `this.syncTable`
* `TABLE_STOP_SPIN_WITH_RANDOM_MATRIX` ➔ `this.stopSpinWithRandomMatrix`
* `HIDE_SYMBOLS_ON_REEL` ➔ `this.hideSymbolsOnReel`

---

## 3. Un-truncated Source Code Implementation
```typescript
protected registerEvents(): void {
    if (this.moduleEvent) {
        this.moduleEvent.on(TableModuleEvents.TABLE_INIT, this.initTable, this);
        this.moduleEvent.on(TableModuleEvents.TABLE_START_SPIN, this.startSpin, this);
        this.moduleEvent.on(TableModuleEvents.TABLE_STOP_SPIN, this.stopSpin, this);
        this.moduleEvent.on(TableModuleEvents.TABLE_FAST_STOP, this.fastStop, this);
        this.moduleEvent.on(TableModuleEvents.SHOW_BEAUTY_MATRIX, this.showBeautyMatrix, this);
        this.moduleEvent.on(TableModuleEvents.SYNC_TABLE, this.syncTable, this);
        this.moduleEvent.on(TableModuleEvents.TABLE_STOP_SPIN_WITH_RANDOM_MATRIX, this.stopSpinWithRandomMatrix, this);

        this.moduleEvent.on(TableModuleEvents.HIDE_SYMBOLS_ON_REEL, this.hideSymbolsOnReel, this);
    }
}
```
