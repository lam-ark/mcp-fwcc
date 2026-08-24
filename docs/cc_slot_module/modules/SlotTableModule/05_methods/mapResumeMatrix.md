---
id: "cc_slot_module:SlotTableModule:method:mapResumeMatrix"
title: "SlotTableModule.mapResumeMatrix() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "mapResumeMatrix", "virtual_hook"]
---

# `SlotTableModule.mapResumeMatrix(): void`

---

## 1. Method Signature
```typescript
public mapResumeMatrix(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Virtual hook intended for games with progressive Megaways, Expanding Reels, or persistent Wilds to remap symbols before rendering resume state.

---

## 3. Un-truncated Source Code Implementation
```typescript
mapResumeMatrix(): void {
    // TODO: override this method to map resume matrix
    // For example: after symbol A transform to B, we need to map last matrix.
}
```
