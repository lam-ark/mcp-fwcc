---
id: "cc_slot_module:JackpotWinModule:methods:exit"
title: "JackpotWinModule.exit Method"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "methods", "exit"]
---

# 📖 `JackpotWinModule.exit()`

---

## 1. Method Overview & Signature

Restores main background music and invokes `super.exit()`.

```typescript
public exit(): void
```

---

## 2. Complete Source Code Implementation

```typescript
exit(): void {
    this.resumeMainBGM();
    super.exit();
}
```
