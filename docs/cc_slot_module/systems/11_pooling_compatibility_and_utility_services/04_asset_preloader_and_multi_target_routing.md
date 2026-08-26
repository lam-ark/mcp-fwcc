---
id: "cc_slot_module:systems:pooling_compatibility:asset_preloader"
title: "Asset Preloader & Multi-Target Scene Routing"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "loading_screen", "preloader", "scene_routing", "howler_warmup"]
---

# 🚀 Asset Preloader & Multi-Target Scene Routing

---

## 1. Multi-Target Scene Routing
`LoadingScreenModule` inspects environment parameters and device capabilities at launch:
- Loads `sdSceneName` on low-memory mobile devices.
- Loads `sceneNameHistory` if URL contains `?history=true`.
- Warms up WebAudio audio context via `JsbUtils.registerLoadHowl()`.
- Interpolates visual progress bar values via `cc.tween` sine curves to avoid visual stutter.
