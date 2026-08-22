# AutoSpinButton: Gotchas & Best Practices

---

## ⚠️ Gotcha 1: Forgetting `observer.releaseAll()` in `onDestroy()`
> [!WARNING]
> **Symptom**: Memory leak and `TypeError: Cannot read property 'interactable' of null` when unloading/reloading scenes.
> 
> **Root Cause**: `eno.Observer` retains strong references to target callback functions.
> 
> **Fix**: Always call `this.observer.releaseAll(this.uiManagerData, this)` inside `onDestroy()`.

---

## ⚠️ Gotcha 2: Missing `fireImmediately: true`
> [!IMPORTANT]
> **Symptom**: Button remains in default disabled state upon scene loading until the first state mutation occurs.
> 
> **Fix**: Always pass `{ fireImmediately: true }` in `this.observer.watch()`.
