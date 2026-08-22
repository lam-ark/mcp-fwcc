# SlotBaseModule: Gotchas & Best Practices

---

## ⚠️ Gotcha 1: Overriding `onLoad()` instead of `onLoadExtend()`
> [!CAUTION]
> **Symptom**: `this.eventManager` or `this.dataStore` is `null` / `undefined` causing instant game crash.
> 
> **Root Cause**: Overriding `onLoad()` without calling `super.onLoad()` skips `applyInjections(this)`.
> 
> **Standard Fix**: Always place child initialization code in `onLoadExtend()`.

---

## ⚠️ Gotcha 2: Registering a Module to Multiple GameModes
> [!WARNING]
> **Symptom**: Error: `Module [Name] is registered to multiple GameMode.`
> 
> **Root Cause**: Reusing the same Node instance across Normal and Free Game directors without cloning.
