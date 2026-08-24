---
id: "cc_slot_module:SlotTableModule:method:removeAllSymbols"
title: "SlotTableModule.removeAllSymbols() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "removeAllSymbols", "node_pool"]
---

# `SlotTableModule.removeAllSymbols(): void`

---

## 1. Method Signature
```typescript
public removeAllSymbols(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Invokes `this.symbolManager.removeAllSymbols()`, reclaiming active symbol nodes and resetting Spine skeleton visual tracks.

---

## 3. Un-truncated Source Code Implementation
```typescript
removeAllSymbols(): void {
    this.symbolManager.removeAllSymbols();
}
```
