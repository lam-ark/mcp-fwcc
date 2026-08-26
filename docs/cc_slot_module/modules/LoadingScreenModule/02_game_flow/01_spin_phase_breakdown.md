---
id: "cc_slot_module:LoadingScreenModule:game_flow:spin_phase_breakdown"
title: "LoadingScreenModule Preload & Transition Phases"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "game_flow", "preload_phases"]
---

# ⚡ LoadingScreenModule Preload & Transition Phases

---

## 1. Loading Phase Breakdown

1. **Bootstrap Phase**: Initializes progress bar to 0%, verifies remote environment flags (`IS_FINISHED_REMOTE`).
2. **Routing Phase**: Resolves target scene based on device memory and URL parameters (`?history=true`).
3. **Asset Preload Phase**: Downloads textures, audio files, and Spine assets with progress callbacks.
4. **Finalization Phase**: Triggers `setProgressFull()` tween to smoothly reach 100% before triggering `director.loadScene()`.
