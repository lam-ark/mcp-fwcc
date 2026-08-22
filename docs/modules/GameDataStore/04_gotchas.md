# GameDataStore: Gotchas & Best Practices

---

## ⚠️ Gotcha 1: Direct State Mutation Bypassing Store Setters
> [!WARNING]
> **Symptom**: UI fails to update when bet or win amounts change.
> 
> **Root Cause**: Mutating nested fields directly without triggering observer notifications.
