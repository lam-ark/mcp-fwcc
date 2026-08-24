---
id: "cc_slot_module:SlotSymbolModule:methods:index"
title: "SlotSymbolModule Methods Index"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "methods", "index"]
---

# 📋 SlotSymbolModule Methods Index

---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`getModuleComponent(node): SlotSymbolModule`](./getModuleComponent.md)** | `public static` | Fast lookup helper checking cached `node['__SymbolModule__']` pointer. |
| **[`init(symbolValue, initSize): void`](./init.md)** | `public` | Initializes symbol code, size dimensions, and caches module references. |
| **[`changeToSymbol(symbolValue): void`](./changeToSymbol.md)** | `public` | Updates static sprite frame and background for target symbol code. |
| **[`changeToBlurSymbol(): void`](./changeToBlurSymbol.md)** | `public` | Switches sprite frame to motion-blurred texture during high-speed roll. |
| **[`changeToStaticSymbol(): void`](./changeToStaticSymbol.md)** | `public` | Forces switch to static texture and restores full opacity. |
| **[`transformToSymbol(symbolCode): void`](./transformToSymbol.md)** | `public` | Switches symbol code and immediately begins idle Spine breathing loop. |
| **[`playSymbolIntro(symbolCode): void`](./playSymbolIntro.md)** | `public` | Plays symbol introduction visual sequence. |
| **[`showStatic(): void`](./showStatic.md)** | `public` | Activates static sprite node and hides Spine skeleton node. |
| **[`hideStatic(): void`](./hideStatic.md)** | `public` | Hides static sprite node to allow Spine skeleton animation playback. |
| **[`playAnimation(name, loop): void`](./playAnimation.md)** | `public` | Loads Spine skeleton data and plays requested animation on Track 0. |
| **[`playAnimationAppear(): void`](./playAnimationAppear.md)** | `public` | Plays `appear` Spine track and queues `idle` looping track. |
| **[`playAnimationIdle(): void`](./playAnimationIdle.md)** | `public` | Starts continuous `idle` Spine breathing loop. |
| **[`playAnimationDisappear(): void`](./playAnimationDisappear.md)** | `public` | Plays `disappear` Spine explosion track for cascading elimination. |
| **[`playAnimationWin(loop): void`](./playAnimationWin.md)** | `public` | Plays celebratory winning Spine animation sequence. |
| **[`addAnimation(name, loop): void`](./addAnimation.md)** | `public` | Queues follow-up animation on Track 0. |
| **[`stopAnimation(): void`](./stopAnimation.md)** | `public` | Halts Spine playback, resets pose to setup, and switches to static sprite. |
| **[`enableHighlight(): void`](./enableHighlight.md)** | `public` | Restores standard vertex color (`colorNormal`) to symbol renderers. |
| **[`disableHighlight(): void`](./disableHighlight.md)** | `public` | Dims vertex color (`colorDim`) for non-winning symbols during payline display. |
| **[`changeColor(color): void`](./changeColor.md)** | `public` | Sets vertex color on all child renderers in `_rendererList`. |
| **[`resetToColorNormal(): void`](./resetToColorNormal.md)** | `public` | Restores white vertex color to all child renderers. |
| **[`addRendererList(): void`](./addRendererList.md)** | `public` | Caches child render nodes into `_rendererList` in `onLoad()`. |
| **[`reset(): void`](./reset.md)** | `public` | Resets animation, display state, color, and skeleton data. |
| **[`resetBeforeBackToPool(): void`](./resetBeforeBackToPool.md)** | `public` | Prepares node for returning into `SlotSymbolManager` NodePool. |
| **[`clearSkeletonData(): void`](./clearSkeletonData.md)** | `public` | Nulls `spine.skeletonData` to prevent GPU memory leaks. |
| **[`mapSymbolData(value, initSize): object`](./mapSymbolData.md)** | `public` | Parses composite symbol strings (e.g. `"K1_1_3"`) into code and size Vec2. |
| **[`switchToStatic(flagStatic): void`](./switchToStatic.md)** | `protected` | Internal coordinator toggling active states between Sprite and Spine nodes. |
