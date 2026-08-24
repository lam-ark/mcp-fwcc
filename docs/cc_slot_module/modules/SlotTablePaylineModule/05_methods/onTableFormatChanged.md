---
id: "cc_slot_module:SlotTablePaylineModule:method:onTableFormatChanged"
title: "SlotTablePaylineModule.onTableFormatChanged Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "methods", "onTableFormatChanged"]
---

# 🚀 `SlotTablePaylineModule.onTableFormatChanged(data): void`

---

## 1. Method Signature

```typescript
protected onTableFormatChanged(data: { tableFormat: number[] }): void
```

---

## 2. Trigger Source & Execution Lifecycle

Triggered via `this.moduleEvent.emit("TABLE_FORMAT_CHANGED", data)` when matrix expansion or grid shape alterations occur (e.g. Free Game Expanding Reels).

---

## 3. Algorithmic Steps

1. Retrieves `PaylineConfig` component from `this.slotTablePaylineData`.
2. Updates `config.TABLE_CONFIG.format = data.tableFormat`.

---

## 4. Full Source Code

```typescript
protected onTableFormatChanged(data: any): void {
    const config = this.slotTablePaylineData.getComponent(PaylineConfig);
    if (!config) {
        error("[SlotTablePaylineModule] PaylineConfig component not found");
        return;
    }
    config.TABLE_CONFIG.format = data.tableFormat;
}
```
