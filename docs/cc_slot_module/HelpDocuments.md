# HelpDocuments

> **Source Path**: `assets/cc-common/cc-slot-module/Components/Common/HelpDocuments.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`HelpDocuments`**

## Key Methods
- `openDocumentation(): void`

## Source Implementation
```typescript
/**
 * Help Documents - Centralized documentation links for Slot Game System
 * This file contains all documentation URLs and help resources
 */
const appConfig = require("../../../../mock/appConfig");

const URL_DOCUMENT = appConfig.URL_DOCUMENT || "";

export class HelpDocuments {
    /** Slot Table Module Documentation */
    static readonly SLOT_TABLE_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/SlotTableModule.html`;
    /** Slot Table Payline Module Documentation */
    static readonly SLOT_TABLE_PAYLINE_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/SlotTablePaylineModule.html`;
    /** Cascade Module Documentation */
    static readonly CASCADE_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/CascadeModule.html`;
    /** Cascade Module Documentation */
    static readonly FORTUNE_WHEEL_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/FortuneWheelGameModule.html`;
    /** Slot Symbol Manager Module Documentation */
    static readonly SLOT_SYMBOL_MANAGER_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/SlotSymbolManager.html`;
    /** Slot Table Payline Module Documentation */
    static readonly BUY_FEATURE_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/BuyFeatureModule.html`;
    /** Slot Horizontal Reel Module Documentation */
    static readonly HORIZONTAL_REEL_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/HorizontalReelModule.html`;
    /** Slot Infinity Reel Module Documentation */
    static readonly INFINITY_REEL_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/InfinityReelModule.html`;
    /** Slot Mega Reel Module Documentation */
    static readonly MEGA_REEL_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/MegaReelModule.html`;
    /** Slot Nudge Reel Module Documentation */
    static readonly NUDGE_REEL_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/NudgeReelModule.html`;
    /** Slot Stacked Reel Module Documentation */
    static readonly STACKED_REEL_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/StackedReelModule.html`;
    /** Slot Tumbling Reel Module Documentation */
    static readonly TUMBLING_REEL_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/TumblingReelModule.html`;
    /** Slot Cascade Wild Generation Module Documentation */
    static readonly CASCADE_WILD_GENERATION_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/CascadeWildGeneration.html`;
    /** Slot Cluster Table Module Documentation */
    static readonly CLUSTER_TABLE_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/ClusterModule.html`;
    /** Slot Gigablox Table Module Documentation */
    static readonly GIGABLOX_TABLE_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/GigabloxModule.html`;
    /** Slot Horizontal Cascade Module Documentation */
    static readonly HORIZONTAL_CASCADE_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/HorizontalCascade.html`;
    /** Slot Cell Table Module Documentation */
    static readonly SLOT_CELL_TABLE_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/SlotCellTable.html`;
    /** Slot Removed Symbol Module Documentation */
    static readonly REMOVED_SYMBOL_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/RemovedSymbolModule.html`;
    /** Slot Sticky Symbol Module Documentation */
    static readonly STICKY_SYMBOL_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/StickySymbolModule.html`;
    /** Slot Transform Symbol Module Documentation */
    static readonly TRANSFORM_SYMBOL_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/TransformSymbolModule.html`;
    /** Slot Collection Items Module Documentation */
    static readonly COLLECTION_ITEMS_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/CollectionItemModule.html`;
    /** Slot Instant Cash Module Documentation */
    static readonly INSTANT_CASH_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/InstantCashModule.html`;
    /** Slot Megaway Module Documentation */
    static readonly MEGAWAY_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/MegawayModule.html`;
    /** Slot Multiplier Module Documentation */
    static readonly MULTIPLIER_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/MultiplierModule.html`;
    /** Slot Multiplier Reels Module Documentation */
    static readonly MULTIPLIER_REELS_MODULE = `${URL_DOCUMENT}/api-references/base-slot/module-library/MultiplierReelModule.html`;
    
    static readonly GAME_LOGIC_DOCUMENT = `${URL_DOCUMENT}/api-references/base-slot/Game.html`;
    static readonly GAME_MODE_DOCUMENT = `${URL_DOCUMENT}/api-references/base-slot/GameMode.html`;
    static readonly TRIAL_MODE_DOCUMENT = `${URL_DOCUMENT}/api-references/base-slot/TrialMode.html`;
    
    static readonly AUTO_SPIN_PANEL_DOCUMENT = `${URL_DOCUMENT}/api-references/base-slot/AutoSpinPanel.html`;
    /**
     * Open documentation in browser
     * @param url - Documentation URL
     */
    static openDocumentation(url: string): void {
        window.open(url, '_blank');
    }
}
```
