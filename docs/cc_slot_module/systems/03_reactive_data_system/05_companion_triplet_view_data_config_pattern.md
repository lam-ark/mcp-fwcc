---
id: "cc_slot_module:systems:reactive_data:companion_triplet_view_data_config_pattern"
title: "The Companion Triplet Pattern: View Controller, Data Model & Config"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "reactive_data", "triplet_pattern", "view_data_config", "clean_code", "srp", "architecture", "flow"]
---

# 🏛️ The Companion Triplet Pattern: View Controller, Data Model & Config

---

## 1. Clean Code Philosophy: The 3-Tier Subsystem Separation

To maintain strict **Single Responsibility Principle (SRP)**, high testability, and zero spaghetti code across large-scale slot games, every visual feature in `cc-slot-module` is architected as a **Co-located Companion Triplet** (or Quad for modes with Writers):

```mermaid
graph TD
    subgraph Subsystem Co-located Container Node [e.g. Table Node / Payline Node / Cascade Node]
        View[🎮 1. Visual Controller: SlotTableModule<br/>• Extends SlotBaseModule / Component<br/>• Renders nodes, tweens, Spine skins<br/>• Listens to user touches & scoped events]
        
        Data[💾 2. Reactive Data Model: SlotTableData<br/>• Extends BaseDataModule<br/>• registeredKeys = ['matrix', 'matrix0']<br/>• Parses 1D flat payloads to 2D matrices]
        
        Config[⚙️ 3. Static & Dynamic Config: TableModuleConfig<br/>• Extends cc.Component / Config Object<br/>• Defines cell sizes, speeds, bounce easing<br/>• Buffer dimensions BUFFER_TOP / BUFFER_BOT]
        
        Audio[🔊 4. Audio Bridge: SlotTableSoundEffectModule<br/>• Extends SlotBaseModule<br/>• Maps state events to SFX clips]
    end

    GDS[GameDataStore Single Source of Truth] -->|Auto Data Broadcast| Data
    Data -->|Provides Clean Domain Structs| View
    Config -->|Provides Geometry & Timing| View
    View -->|Triggers Sound Events| Audio
```

---

## 2. Granular Responsibilities by Triplet Role

### 🎮 1. Visual Controller (`*Module.ts`)
* **Inheritance**: `SlotBaseModule` or `cc.Component`.
* **Primary Scope**: Presentation, DOM/Node Tree management, Spine skeleton playback, particle systems, and rendering animations.
* **Invariant Rule**: **Never directly parse raw server JSON socket packets** inside the visual controller. All data must be fetched through its companion `*Data.ts`.

### 💾 2. Reactive Data Model (`*Data.ts`)
* **Inheritance**: `BaseDataModule`.
* **Primary Scope**: Data validation, coordinate transformation, matrix format conversion (e.g. flat `string[]` to 2D `string[][]`), state filtering (`isFreeMode()`), and caching.
* **Registration**: Automatically binds to `GameDataStore` by declaring `registeredKeys = ["matrix", ...]`. Receives immutable deep-cloned slices via `onDataUpdate()`.

### ⚙️ 3. Configuration Component (`*Config.ts`)
* **Inheritance**: `cc.Component` or standalone exported TypeScript class.
* **Primary Scope**: Static geometric dimensions (`SYMBOL_WIDTH`, `SYMBOL_HEIGHT`), animation timings (`easingTimeStop`, `delayStop`), physics constants (`FAST_SPIN_RATE`), and table layout format (`TABLE_FORMAT`).
* **Invariant Rule**: Separates all magic numbers from code logic, allowing artists and game math designers to adjust visuals via Cocos Inspector or config files without editing animation code.

---

## 3. Subsystem Companion Inventory in `cc-slot-module`

| Feature Domain | 🎮 Visual Controller (`*Module`) | 💾 Reactive Data (`*Data`) | ⚙️ Configuration (`*Config`) | 🎬 Writer / Audio Companion |
| :--- | :--- | :--- | :--- | :--- |
| **Slot Matrix Table** | `SlotTableModule.ts` | `SlotTableData.ts` | `TableModuleConfig.ts` | `SlotTableSoundEffectModule.ts` |
| **Paylines & Win Boxes** | `SlotTablePaylineModule.ts` | `SlotTablePaylineData.ts` | `PaylineConfig.ts` | `PaylineFactory.ts` |
| **Cascades & Avalanches** | `VerticalCascadeModule.ts` | `CascadeModuleData.ts` | `CascadeModuleConfig.ts` | `CascadeDirectorModule.ts` |
| **Fortune Wheel Mini-Game** | `FortuneWheelModule.ts` | `FortuneWheelModuleData.ts` | `FortuneWheelModuleConfig.ts` | `FortuneWheelGameDirector.ts` |
| **Normal Game Mode** | `NormalGameDirectorModule.ts` | `BaseDataModule.ts` | `GameConfig.ts` | `NormalGameWriterModule.ts` |
| **Free Spins Game Mode** | `FreeGameDirectorModule.ts` | `BaseDataModule.ts` | `GameConfig.ts` | `FreeGameWriterModule.ts` |
| **Bonus Pick Game Mode** | `BonusGameTableModule.ts` | `BonusGameData.ts` | `BonusGameConfig.ts` | `BonusGameWriterModule.ts` |

---

## 4. Co-Location & Resolution Pattern in Scene

All 3 components are mounted **together on the same parent Cocos node** in the scene graph:

```typescript
// Inside SlotTableData.ts
onloadExtend(): void {
    // Clean, local resolution without traversing scene root
    this.config = this.getComponent(TableModuleConfig);
}

// Inside SlotTableModule.ts
onLoadExtend(): void {
    this.tableData = this.getComponent(SlotTableData);
    this.tableConfig = this.getComponent(TableModuleConfig);
}
```

### Benefits of Co-Location:
1. **Zero Global Lookup Overhead**: Components resolve peers instantly via `this.getComponent()`.
2. **Prefab Encapsulation**: The entire subsystem can be saved as a self-contained `.prefab` asset and dropped into any new slot game scene (`g9666L`, `g9888P`) with complete data, config, and visual bindings intact.
