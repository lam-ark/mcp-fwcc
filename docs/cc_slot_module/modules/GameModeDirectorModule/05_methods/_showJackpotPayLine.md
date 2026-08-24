---
id: "cc_slot_module:GameModeDirectorModule:method:showJackpotPayLine"
title: "GameModeDirectorModule._showJackpotPayLine() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_showJackpotPayLine"]
---

# `GameModeDirectorModule._showJackpotPayLine(data: any): Promise<void>`

---

## 1. Method Signature
```typescript
_showJackpotPayLine(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits scoped module event `this.moduleEvent.emit("SHOW_JACKPOT_PAYLINE", data)` to highlight Jackpot symbols.

---

## 3. Un-truncated Source Code Implementation
```typescript
_showJackpotPayLine(data): Promise<void> {
    return this.moduleEvent.emit("SHOW_JACKPOT_PAYLINE", data);
}
```
