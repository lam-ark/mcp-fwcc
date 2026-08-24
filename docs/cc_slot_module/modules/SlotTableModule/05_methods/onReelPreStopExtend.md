---
id: "cc_slot_module:SlotTableModule:method:onReelPreStopExtend"
title: "SlotTableModule.onReelPreStopExtend() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "onReelPreStopExtend", "virtual_hook"]
---

# `SlotTableModule.onReelPreStopExtend(_reelIndex: number): void`

---

## 1. Method Signature
```typescript
protected onReelPreStopExtend(_reelIndex: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
Virtual hook invoked when a reel column begins its easing deceleration right before the final bounce. Used for column anticipation audio triggers.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected onReelPreStopExtend(_reelIndex: number): void {
    // override this method to handle reel stop event, before reel easing
}
```
