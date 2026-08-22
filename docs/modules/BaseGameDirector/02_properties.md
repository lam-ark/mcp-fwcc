# BaseGameDirector: Properties & Injected Services

## 1. Injected Services (`@inject`)

| Service Name | Type | Description |
| :--- | :--- | :--- |
| **`dataStore`** | `GameDataStore` | Central repository for session state, bet values, and round results. |
| **`gameSettings`** | `SlotGameSettings` | User settings (Turbo speed, Sound on/off, Auto-spin parameters). |
| **`logger`** | `eno.Logger` | Structured logger for director action traces. |

---

## 2. Runtime Internal Properties

| Property Name | Type | Purpose |
| :--- | :--- | :--- |
| **`executor`** | `ScriptExecutor` | The asynchronous command executor executing action queues. |
| **`forceToExitMode`** | `boolean` | Flag signaling early abort when switching game modes or reconnecting. |
