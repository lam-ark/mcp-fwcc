---
id: "cc_slot_module:LoadingScreenModule:overview:lifecycle_flowchart"
title: "LoadingScreenModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "overview", "lifecycle", "sequence"]
---

# 🔄 LoadingScreenModule Lifecycle Flowchart

---

## 1. Preloading Sequence

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Loader as LoadingScreenModule
    participant Remote as Remote Config / Server
    participant Director as cc.director

    Engine->>Loader: onLoad()
    Loader->>Loader: resetProgress() (0%)
    Loader->>Remote: startLoadingPipeline() (Poll IS_FINISHED_REMOTE)
    Remote-->>Loader: Config Ready
    Loader->>Loader: redirectSceneName()
    Loader->>Loader: addHomeEvent() (Schedule 10s delay)
    Loader->>Director: preloadScene(updatedScene, progressCb, completeCb)
    loop Asset Download
        Director-->>Loader: completedCount / totalCount
        Loader->>Loader: update(dt) -> interpolate progress bar
    end
    Director-->>Loader: preloadScene complete
    Loader->>Loader: setProgressFull() -> tween to 100%
    Loader->>Director: loadScene(updatedScene)
```
