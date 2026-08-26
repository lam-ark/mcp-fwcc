---
id: "cc_slot_mechanics:SlotTableMegaModule:methods:onLoadExtend"
title: "SlotTableMegaModule.onLoadExtend Method"
category: "cc_slot_mechanics"
tags: ["SlotTableMegaModule", "slot_table_mega_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `SlotTableMegaModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
onLoadExtend(): void
```

- **Primary Role**: Implements onLoadExtend within the SlotTableMegaModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
        super.onLoadExtend();
        this._slotTableData = this.getComponent(MegaReelData);
    }
```
