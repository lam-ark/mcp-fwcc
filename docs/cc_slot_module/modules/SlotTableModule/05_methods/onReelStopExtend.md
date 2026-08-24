---
id: "cc_slot_module:SlotTableModule:method:onReelStopExtend"
title: "SlotTableModule.onReelStopExtend() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "onReelStopExtend", "virtual_hook"]
---

# `SlotTableModule.onReelStopExtend(_reelIndex: number): void`

---

## 1. Method Signature
```typescript
protected onReelStopExtend(_reelIndex: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
Virtual hook invoked immediately after a reel column finishes its stop bounce animation. Used to trigger column landing VFX, Mascot reactions, or camera shakes.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected onReelStopExtend(_reelIndex: number): void {
    // override this method to handle reel stop event
}
```
