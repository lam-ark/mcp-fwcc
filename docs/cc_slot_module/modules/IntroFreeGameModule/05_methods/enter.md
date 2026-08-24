---
id: "cc_slot_module:IntroFreeGameModule:methods:enter"
title: "IntroFreeGameModule.enter Method"
category: "cc_slot_module"
tags: ["IntroFreeGameModule", "intro_free_game_module", "cc_slot_module", "methods", "enter"]
---

# 📖 `IntroFreeGameModule.enter()`

---

## 1. Method Overview & Signature

Overridden lifecycle hook that schedules automated modal exit after `timeShow` seconds.

```typescript
public enter(): void
```

---

## 2. Complete Source Code Implementation

```typescript
enter(): void {
    this.scheduleOnce(this.exit, this.timeShow);
}
```
