---
id: "cc_slot_mechanics:InfinityTableModule:methods:registerEvents"
title: "InfinityTableModule.registerEvents Method"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "methods", "registerEvents"]
---

# 📖 `InfinityTableModule.registerEvents()`

---

## 1. Method Signature & Overview

```typescript
registerEvents(): void
```

- **Primary Role**: Implements registerEvents within the InfinityTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected registerEvents(): void {
        super.registerEvents();
        if (this.moduleEvent) {
            this.moduleEvent.on("TABLE_START_RESPIN", this.startRespin, this);
		    this.moduleEvent.on("TABLE_STOP_RESPIN", this.stopRespin, this);
        }
    }
```
