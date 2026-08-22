# SlotTableModule: Gotchas & Best Practices

---

## ⚠️ Gotcha 1: Out-of-bounds Index in `TABLE_FORMAT`
> [!WARNING]
> **Symptom**: Symbols float off-grid or crash during column instantiation.
> 
> **Root Cause**: Mismatch between `GameConfig.TABLE_FORMAT` (e.g. `[3,3,3,3,3]`) and server matrix column length.
> 
> **Fix**: Ensure `TableModuleConfig` matches the server's matrix dimensions.
