# 📋 Master Task List: Comprehensive Modular Documentation for Game 9666 (Red Cliff)

> **Game Target**: `assets/cc-release-slot/cc1-red-cliff` (113 Scripts / 12 Prefabs / 3 Scenes)  
> **Documentation Target**: `mcp/mcp-fwcc/docs/game-implement/g9666_red_cliff/`  
> **Standard**: Multi-file modular chapters, exact math formulas, de-obfuscated TypeScript, line-by-line breakdown, and exhaustive variable dictionaries.

---

## 📊 Modular Subsystem Progress Matrix

| Section | Subsystem / Chapter | Target Folder | Sub-Documents | Status |
| :---: | :--- | :--- | :---: | :---: |
| **01** | **Game Overview & Math** | `01_game_overview/` | 3 Files | ✅ Completed |
| **02** | **Scene & Prefabs** | `02_scene_and_prefabs/` | 3 Files | ✅ Completed |
| **03** | **Composite Dual Cascade** | `03_composite_cascade/` | 5 Files | ✅ Completed |
| **04** | **Multiplier & Stack Wilds** | `04_multiplier_and_stack_wild/` | 5 Files | ✅ Completed |
| **05** | **Jackpot Collection** | `05_jackpot_collection/` | 4 Files | ✅ Completed |
| **06** | **Payline & Spine Sync** | `06_payline_and_spine_sync/` | 4 Files | ✅ Completed |
| **07** | **Directors & Writers** | `07_directors_and_writers/` | 4 Files | ✅ Completed |
| **08** | **Trial Mode & UI** | `08_trial_and_ui/` | 3 Files | ✅ Completed |
| **09** | **Audio & Cutscenes** | `09_audio_and_cutscenes/` | 3 Files | ✅ Completed |
| **10** | **Recipes & Debugging** | `10_recipes_and_debugging/` | 2 Files | ✅ Completed |
| **11** | **Per-Class Modules** | `modules/` (113 Classes) | 113 Folders | ✅ Completed |

---

## 📝 Granular Task Breakdown

### 🔹 Section 01: Game Overview & Math (`01_game_overview/`)
- [x] **Task 1.1**: `01_math_specification.md` - Combinatorial 117,649 Megaways math formula $\prod_{c=1}^6 \text{Height}[c]$, variable row sizing (2 to 7), RTP, and volatility profile.
- [x] **Task 1.2**: `02_symbol_registry_and_paytable.md` - Complete symbol table (`K1-8` Multiplier Wild, `S1` Guan Yu, `S2` Liu Bei, `S3` Zhang Fei, `S4` Zhao Yun, `R1-R5` Royals, `SC` Warship Scatter) with exact base payouts.
- [x] **Task 1.3**: `03_fsm_and_round_lifecycle.md` - Master Finite State Machine (`READY` $\rightarrow$ `SPINNING` $\rightarrow$ `WIN_EVAL` $\rightarrow$ `CASCADE_LOOP` $\rightarrow$ `FREE_GAME` $\rightarrow$ `SETTLED`).

### 🔹 Section 02: Scene & Prefab Hierarchies (`02_scene_and_prefabs/`)
- [x] **Task 2.1**: `01_scene_node_trees.md` - Full node hierarchies for `g9666L.fire` (Landscape), `g9666.fire`, and `g9666H.fire` (Portrait).
- [x] **Task 2.2**: `02_prefab_breakdown.md` - Structural node analysis of all 12 prefabs (`MainGamePrefab`, `FreeGamePrefab`, `HorizontalTable`, `JackpotCollection`, `PaylineInfo`, etc.).
- [x] **Task 2.3**: `03_layering_and_z_index.md` - Z-Index layering rules: Background $\rightarrow$ Main Table $\rightarrow$ Top Sub-Reel $\rightarrow$ Payline Highlight $\rightarrow$ VFX Layer $\rightarrow$ HUD $\rightarrow$ Popups.

### 🔹 Section 03: Composite Dual Cascade (`03_composite_cascade/`)
- [x] **Task 3.1**: `01_architecture_and_data_flow.md` - `CompositeCascade9666` dual cascade coordination model.
- [x] **Task 3.2**: `02_vertical_cascade_mechanics.md` - Gravity drops on Reels 1..6 (`VerticalCascadeModule9666`), acceleration, bounce physics.
- [x] **Task 3.3**: `03_horizontal_cascade_mechanics.md` - Right-to-left slide refills on Reels 2..5 (`HorizontalCascadeModule9666`), translation kinematics.
- [x] **Task 3.4**: `04_synchronization_and_events.md` - Parallel `Promise.all([p1, p2])` execution and `UPDATE_JACKPOT_COLLECTION` $\rightarrow$ `UPDATE_MEGAWAY` $\rightarrow$ `STACK_WILD_LANDED` sequence.
- [x] **Task 3.5**: `05_edge_cases_and_gotchas.md` - Cascade drop desync during fast-stop, matrix diff misalignment, pool exhaustion.

### 🔹 Section 04: Multiplier & Stack Wilds (`04_multiplier_and_stack_wild/`)
- [x] **Task 4.1**: `01_multiplier_wild_lifecycle.md` - `K1-2`, `K1-8` parsing, badge rendering, and winning combination participation.
- [x] **Task 4.2**: `02_badge_display_and_collection.md` - `hideMultiplierLabel()`, collection animation dispatch to consolidated multiplier banner.
- [x] **Task 4.3**: `03_unexploded_wild_reversion.md` - State reversion on next spin start: resetting `hasCollectedMultiplier = false` and re-showing badge for unexploded wilds.
- [x] **Task 4.4**: `04_stacked_wild_expansion.md` - Full-height Guan Yu Stack Wild expansion (`StackWildModule9666`, `StackWildModuleData`).
- [x] **Task 4.5**: `05_edge_cases_and_gotchas.md` - Multiplier badge disappearing on resize, frame clipping, fast-stop timing.

### 🔹 Section 05: Jackpot Collection (`05_jackpot_collection/`)
- [x] **Task 5.1**: `01_tier_architecture_and_thresholds.md` - 4-Tier token meter schema (Mini: 6, Minor: 9, Major: 12, Grand: 15 tokens).
- [x] **Task 5.2**: `02_token_meter_ui_and_fly_in.md` - Fly-in particle animations from winning symbols to HUD meters (`JackpotCollectionItem9666`).
- [x] **Task 5.3**: `03_smart_resume_deduction_math.md` - Smart resume deduction algorithm on `onJoinGameSuccess`: $C_{\text{before}} = \max(0, C_{\text{total}} - W_{\text{current}})$.
- [x] **Task 5.4**: `04_edge_cases_and_gotchas.md` - Token desync on rapid reconnect, mid-cascade disconnection, meter particle pooling.

### 🔹 Section 06: Payline & Spine Bone Tracking (`06_payline_and_spine_sync/`)
- [x] **Task 5.1**: `01_realtime_bone_tracking_update.md` - Real-time Spine bone tracking in `update(dt)` (`syncNodeToBone` on `'hsn'` and `'money'`).
- [x] **Task 5.2**: `02_hsn_multiplier_combine_spine.md` - Spine event listener integration (`add_money`, `add_ktt`) in `hsnCombineSpine`.
- [x] **Task 5.3**: `03_money_tween_and_speed_scaling.md` - Win amount bounce tweens, `MoneyTween` count-up, speed decorators ($1\times, 2\times, 3\times$).
- [x] **Task 5.4**: `04_edge_cases_and_gotchas.md` - Bone coordinate drift during canvas resize, orphan tweens on fast skip.

### 🔹 Section 07: Directors & Writers (`07_directors_and_writers/`)
- [x] **Task 7.1**: `01_normal_game_writer_pipeline.md` - `makeScriptNormalSpinTrigger` command sequence in `NormalGameWriterModule9666`.
- [x] **Task 7.2**: `02_free_game_writer_pipeline.md` - Free spin command sequence in `FreeGameWriterModule9666`.
- [x] **Task 7.3**: `03_state_store_and_session_sync.md` - `GameDataStore9666` session data caching and matrix state management.
- [x] **Task 7.4**: `04_edge_cases_and_gotchas.md` - Command promise freeze, state desync on network retry.

### 🔹 Section 08: Trial Mode & UI Framework (`08_trial_and_ui/`)
- [x] **Task 8.1**: `01_trial_mode_loop_controller.md` - `TrialModeLoopController9666` mock loop, 50,000,000 credit simulation.
- [x] **Task 8.2**: `02_bet_selector_and_wallet_sync.md` - Bet selection, wallet locking during spin.
- [x] **Task 8.3**: `03_fast_stop_and_skip_handling.md` - `TABLE_FAST_STOP` event dispatching and safe animation cancellation.

### 🔹 Section 09: Audio, Cutscenes & Master Event Bus (`09_audio_and_cutscenes/`)
- [x] **Task 9.1**: `01_sound_registry_and_bgm.md` - BGM tracks and SFX clips indexed by sound ID.
- [x] **Task 9.2**: `02_cutscene_state_machines.md` - Free Game Intro/Outro, BigWin, and MegaWin cutscene state flows.
- [x] **Task 9.3**: `03_master_event_bus_table.md` - Complete master event dictionary (Emitter, Listener, Payload, Purpose).

### 🔹 Section 10: Recipes & Debugging (`10_recipes_and_debugging/`)
- [x] **Task 10.1**: `01_mock_data_and_cheats.md` - Mock matrix injection recipes (`TutorialMockData9666`) and cheat codes.
- [x] **Task 10.2**: `02_troubleshooting_cookbook.md` - Debugging common issues in Red Cliff 9666 development.

### 🔹 Section 11: 113 Per-Class Module Folders (`modules/`)
- [x] **Task 11.1 - 11.113**: Complete `01_overview`, `02_variables`, `03_methods` with full line-by-line analysis for each class.
