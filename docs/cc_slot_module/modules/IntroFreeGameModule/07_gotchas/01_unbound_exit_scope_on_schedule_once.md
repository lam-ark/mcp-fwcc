---
id: "cc_slot_module:IntroFreeGameModule:gotchas:unbound_exit_scope_on_schedule_once"
title: "Gotcha: Method Scope Binding in scheduleOnce"
category: "cc_slot_module"
tags: ["IntroFreeGameModule", "intro_free_game_module", "cc_slot_module", "gotchas", "schedule_once", "this_scope"]
---

# ⚠️ Gotcha: Method Scope Binding in scheduleOnce

---

## 1. Description & Recommendation

In `IntroFreeGameModule.enter()`:
```typescript
this.scheduleOnce(this.exit, this.timeShow);
```
While Cocos Creator's `cc.Component.scheduleOnce` binds the target component by default, writing `() => this.exit()` or `this.scheduleOnce(this.exit.bind(this), this.timeShow)` is strictly recommended for bulletproof TypeScript scoping.
