---
id: "cc_slot_module:overview:guide_how_to_create_and_setup_new_module"
title: "Master Guide: How to Create and Setup a New Module from Scratch"
category: "cc_slot_module"
tags: ["cc_slot_module", "create_module", "setup_module", "new_module", "module_architecture", "scene_graph", "prefab_setup", "ioc_injection", "script_template", "tips"]
---

# 🚀 Master Guide: How to Create and Setup a New Module from Scratch

---

## 1. Module Architectural Classification & Base Classes

When designing a new feature in the FWCC Slot Framework, choose the corresponding base class:

| Module Role | Base Class | Core Purpose | Typical Scene Graph Location |
| :--- | :--- | :--- | :--- |
| **Visual / Presentation Module** | `SlotBaseModule` | Rendering Spine animations, particle VFX, win frames, sound cues. | Under `BoardG`, `SlotTableModule`, `SlotTablePaylineModule`, or `PopupControl`. |
| **Payline Follower Component** | `BasePaylineComponent` | Drawing lines, win boxes, or line markers driven by `payLineEmitter`. | Child node under `SlotTablePaylineModule`. |
| **Reactive Data Store** | `BaseDataModule` | State normalization, server matrix conversion, data caching. | Mounted alongside the Presentation Module or on Director node. |
| **Mode Director / Writer** | `BaseGameDirector` / `GameModeWriterModule` | Mode state machine loop, synthesizing action scripts for `ScriptExecutor`. | Root of GameMode Prefabs (`MainGamePrefab`, `FreeGamePrefab`). |

---

## 2. Standard TypeScript Boilerplate & Decorators

Below is the production-ready script template for creating a new `SlotBaseModule`:

```typescript
const { ccclass, property } = cc._decorator;
import { SlotBaseModule } from '../../Core/SlotBaseModule';
import { inject } from '../../Core/IOC';

@ccclass
export class CustomFeatureModule extends SlotBaseModule {
    //#region Inspector Properties
    @property({ type: cc.Node, tooltip: 'Container holding visual elements' })
    private effectContainer: cc.Node = null;

    @property({ tooltip: 'Effect playback duration in seconds' })
    private animDuration: number = 1.5;
    //#endregion

    //#region Injected Core Services (IoC Container)
    @inject('GameConfig')
    protected gameConfig: any;

    @inject('GameDataStore')
    protected gameDataStore: any;

    @inject('GameLogic')
    protected gameLogic: any;
    //#endregion

    //#region Lifecycle Hooks
    /**
     * 1. onLoadExtend(): Executes during onLoad() immediately after applyInjections().
     * ALWAYS initialize state here instead of overriding onLoad().
     */
    protected onLoadExtend(): void {
        this.resetAllEffectAndTasks();
    }

    /**
     * 2. setupModule(): Automatically invoked by GameModeDirectorModule on mode load.
     * Ingests scoped moduleEvent bus and current gameMode identifier.
     */
    public setupModule(moduleEvent: cc.EventTarget, gameMode: string): void {
        super.setupModule(moduleEvent, gameMode);
        this.registerModeEvents();
    }

    /**
     * 3. Scoped Event Registration: Subscribes to Writer/Director action steps.
     */
    private registerModeEvents(): void {
        if (!this.moduleEvent) return;

        this.moduleEvent.on("PLAY_CUSTOM_FEATURE", this.onPlayFeature, this);
        this.moduleEvent.on("STOP_CUSTOM_FEATURE", this.resetAllEffectAndTasks, this);
    }

    /**
     * 4. Action Step Handler: Can return Promise<void> to block ScriptExecutor sequentially.
     */
    private onPlayFeature(data: any): Promise<void> {
        return new Promise((resolve) => {
            if (this.effectContainer) {
                this.effectContainer.active = true;
            }

            cc.tween(this.node)
                .delay(this.animDuration)
                .call(() => {
                    this.eventManager.emit("ON_CUSTOM_FEATURE_COMPLETED", data);
                    resolve();
                })
                .start();
        });
    }

    /**
     * 5. Interrupt Reset: Halts tweens and hides overlays on Fast-Spin / Reconnect.
     */
    public resetAllEffectAndTasks(): void {
        cc.Tween.stopAllByTarget(this.node);
        if (this.effectContainer) {
            this.effectContainer.active = false;
        }
    }

    /**
     * 6. Teardown: Unregisters listeners on prefab destroy.
     */
    protected onDestroy(): void {
        if (this.moduleEvent) {
            this.moduleEvent.targetOff(this);
        }
        super.onDestroy();
    }
    //#endregion
}
```

---

## 3. Scene Graph Hierarchy Placement & Cocos Creator Mounting

All production slot games follow the standard `Canvas` node hierarchy (`g9000L.fire` / `g9666L.fire`):

```text
Canvas (cc.Canvas, CanvasModuleController)
└── Director (GameConfig, GameDataStore, GameInit, GameDirector)
    ├── GameMode (OnAddGameMode)
    │   ├── BG_MainG (cc.Sprite / sp.Skeleton)
    │   ├── BoardG (cc.Sprite)
    │   │   ├── SlotTableModule (SlotTableModule, TableModuleConfig, SlotTableData)
    │   │   │   ├── SymbolPool (SlotSymbolManager)
    │   │   │   └── Table (cc.Mask)
    │   │   └── SlotTablePaylineModule (SlotTablePaylineModule, PaylineConfig)
    │   │       ├── PaylineSymbolModule
    │   │       ├── PaylineWinFrameModule
    │   │       └── [📍 MOUNT PAYLINE COMPONENT HERE]
    │   │
    │   ├── MainGamePrefab (BaseGameMode, NormalGameDirectorModule, NormalGameWriterModule, OnAddSlotModule)
    │   │   ├── [📍 MOUNT NORMAL GAME FEATURE MODULE HERE]
    │   │   └── TransformSymbolModule
    │   │
    │   ├── FreeGamePrefab (BaseGameMode, FreeGameDirectorModule, FreeGameWriterModule, OnAddSlotModule)
    │   │   └── [📍 MOUNT FREE SPINS FEATURE MODULE HERE]
    │   │
    │   └── BonusGamePrefab (BonusGameDirectorModule, BonusGameTableModule)
    │
    ├── UIManager (UIManagerModule)
    ├── CutsceneControl (CutsceneController) ── [📍 MOUNT POPUP / CUTSCENE HERE]
    ├── PopupControl (PopupControllerModule)
    └── SlotSoundPlayer (SlotSoundPlayerModule, SoundConvertList)
```

### Editor Setup Steps in Cocos Creator:
1. **Create Node**: Right-click target parent node in scene/prefab hierarchy ➔ **Create Empty Node** ➔ Rename with clear prefix (e.g. `CustomFeatureModule`).
2. **Attach Component**: Drag `CustomFeatureModule.ts` onto the Inspector panel.
3. **Attach Editor Tag**:
   - Add `SlotModuleEditorTag` to the node, or ensure the parent mode prefab root has `OnAddSlotModule`.
   - This ensures `GameModeDirectorModule` auto-discovers the module via `getComponentsInChildren(SlotBaseModule)` and invokes `setupModule()`.
4. **Wire Inspector References**: Drag child nodes, SpriteFrames, and Spines into `@property` slots.

---

## 4. Writer & ScriptExecutor Integration

To integrate the new module into the spin sequence, append action steps in `NormalGameWriterModule.ts` or `FreeGameWriterModule.ts`:

```typescript
public makeSpinScript(playSession: any): any[] {
    const script: any[] = [];

    script.push({ command: "START_SPIN" });
    script.push({ command: "TABLE_SPINNING" });
    script.push({ command: "STOP_TABLE" });

    // Insert custom feature step
    if (playSession.hasCustomFeature) {
        script.push({
            command: "PLAY_CUSTOM_FEATURE",
            data: playSession.customFeatureData
        });
    }

    script.push({ command: "BLINK_ALL_PAYLINES" });
    script.push({ command: "SHOW_ALL_PAYLINES" });

    return script;
}
```

---

## 5. Golden Rules & Best Practices Checklist

1. **Never Override `onLoad()` Without `super.onLoad()`**: `SlotBaseModule.onLoad()` handles `@inject` IoC wiring. Override `onLoadExtend()` instead.
2. **Implement `resetAllEffectAndTasks()`**: Required for Turbo mode, fast clicks, and error recovery.
3. **Decouple Event Channels**:
   - `this.moduleEvent`: Internal command steps from Writer/Director.
   - `this.eventManager`: Global events to external UI / HUD.
4. **Zero-GC Object Pooling**: Use `SlotCustomNodePool` or `PaylineFactory` for high-frequency visual objects instead of runtime `instantiate()` / `destroy()`.
5. **Declare `relations.json`**: Always maintain `relations.json` alongside module code for automatic MCP documentation indexing.
