# SlotTableModule: Properties & Configuration

## 1. Cocos Creator Inspector Properties (`@property`)

| Property Name | Data Type | Default | Description |
| :--- | :--- | :---: | :--- |
| **`table`** | `cc.Node` | `null` | Container node housing all reel columns. |
| **`reelPrefab`** | `cc.Prefab` | `null` | Prefab instantiated to create individual column reels (`SlotReelModule`). |
| **`symbolManager`** | `SlotSymbolManager` | `null` | Reference to the symbol pooling manager for the table. |

---

## 2. Internal State Variables

| State Variable | Data Type | Purpose |
| :--- | :--- | :--- |
| **`TOTAL_COLS`** | `number` | Total columns derived from `config.TABLE_FORMAT.length` (e.g. 5 columns). |
| **`SYMBOL_WIDTH`** | `number` | Width per column in pixels for layout calculations. |
| **`state`** | `TableSpinState` | Current spin state (`READY`, `SPINNING`, `STOPPING`, `STOPPED`). |
| **`reels`** | `SlotReelModule[]` | Array of instantiated column reel components. |
