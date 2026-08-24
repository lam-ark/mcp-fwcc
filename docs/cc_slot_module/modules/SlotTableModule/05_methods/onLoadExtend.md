---
id: "cc_slot_module:SlotTableModule:method:onLoadExtend"
title: "SlotTableModule.onLoadExtend() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "onLoadExtend", "lifecycle"]
---

# `SlotTableModule.onLoadExtend(): void`

---

## 1. Method Signature
```typescript
onLoadExtend(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Retrieves the sibling `TableModuleConfig` component via `this.getComponent(TableModuleConfig)`.
2. Validates that `this.config` exists; if missing, logs a warning and exits early.
3. Invokes `this.getConfigValue()` to cache `TOTAL_COLS` and `SYMBOL_WIDTH`.
4. Retrieves `SlotTableData` component via `this.getComponent(SlotTableData)`.
5. Checks `this.symbolManager`; if not assigned via Inspector, auto-resolves via `this.getComponent(SlotSymbolManager)`.
6. Passes the injected `this.gameConfig` to `this.symbolManager.setGameConfig(this.gameConfig)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
onLoadExtend(): void {
    this.config = this.getComponent(TableModuleConfig);
    if (!this.config) {
        warn('Config not add to this node');
        return;
    }
    this.getConfigValue();
    this._slotTableData = this.getComponent(SlotTableData);

    if (!this.symbolManager) {
        this.symbolManager = this.getComponent(SlotSymbolManager);
    }
    this.symbolManager.setGameConfig(this.gameConfig);
}
```
