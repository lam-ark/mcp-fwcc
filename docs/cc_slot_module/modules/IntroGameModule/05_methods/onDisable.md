---
id: "cc_slot_module:IntroGameModule:methods:onDisable"
title: "IntroGameModule.onDisable Method"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "methods", "onDisable"]
---

# 📖 `IntroGameModule.onDisable()`

---

## 1. Method Overview & Signature

Stops all active node actions and tweens when the component is deactivated.

```typescript
public onDisable(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDisable(): void {
    this.node.stopAllActions();
}
```
