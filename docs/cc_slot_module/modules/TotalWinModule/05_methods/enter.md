---
id: "cc_slot_module:TotalWinModule:methods:enter"
title: "TotalWinModule.enter Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "enter"]
---

# 📖 `TotalWinModule.enter()`

---

## 1. Method Overview & Signature

Entry lifecycle hook initiating particle emissions, audio, and starting number count-up.

```typescript
public enter(): void
```

---

## 2. Complete Source Code Implementation

```typescript
enter(): void {
    this.initValue();
    this.startParticle();
    this.startUpdateWinAmount();
    this.playSoundStart();
}
```
