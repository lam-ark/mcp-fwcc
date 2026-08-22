# BaseGameDirector: Gotchas & Best Practices

---

## ⚠️ Gotcha 1: Unresolved Promises Freezing Director State Machine
> [!CAUTION]
> **Symptom**: Game freezes indefinitely after table stops or after win celebration.
> 
> **Root Cause**: A child module (such as PaylineInfo or Spine Cutscene) failed to resolve its animation callback promise.
> 
> **Standard Fix**: Always provide safety timeout fallbacks in custom director action promises.
