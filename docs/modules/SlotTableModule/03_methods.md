# SlotTableModule: Methods & API Reference

---

## 1. `onLoadExtend(): void`
* **Purpose**: Fetches `TableModuleConfig`, `SlotTableData`, and configures `symbolManager.setGameConfig(this.gameConfig)`.

---

## 2. `startSpin(): void`
* **Purpose**: Triggers column roll animations with staggered column delays.

---

## 3. `stopTable(matrix: string[][], callback: Function): void`
* **Purpose**: Passes stopping matrix data to reels and handles near-win anticipation delays.

---

## 4. `getTableMatrix(): string[][]`
* **Purpose**: Returns the active 2D symbol matrix string array.
