---
id: "cc_slot_module:WinEffectModule:methods:exit"
title: "WinEffectModule.exit Method"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "methods", "exit"]
---

# 📖 `WinEffectModule.exit()`

---

## 1. Method Overview & Signature

Restores background music, resets internal flags, and invokes `super.exit()`.

```typescript
public exit(): void
```

---

## 2. Complete Source Code Implementation

```typescript
exit(): void {
    this._isShowFastEffect = false;
    this._isShowNormalEffect = false;
    this.resumeMainBGM();
    super.exit();
}
```
