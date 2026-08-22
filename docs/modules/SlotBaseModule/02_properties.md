# SlotBaseModule: Injected Properties & State

## 1. Injected Core Services (`@inject`)

| Service Name | Type | Injected Token | Purpose |
| :--- | :--- | :--- | :--- |
| **`gameLogic`** | `any` | `eno.Game` | Central orchestrator for network, game state, and UI model dispatch. |
| **`eventManager`** | `GameEventManager` | `GameEventManager` | Global Event Bus for inter-module communication. |
| **`observer`** | `any` | `eno.ObserverObject` | Reactive data store observer watcher. |
| **`soundPlayer`** | `SlotSoundPlayerModule` | `SlotSoundPlayerModule` | Sound controller for SFX, BGM, and reel sounds. |

---

## 2. Runtime Context Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`moduleEvent`** | `GameModuleEvent` | Local event bus scoped strictly to components within the same Game Mode. |
| **`gameMode`** | `GAME_MODE_ENUM` | Active game mode (`NORMAL_GAME`, `FREE_GAME`, `BONUS_GAME`). |
