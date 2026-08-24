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
| **[`init(symbolValue, initSize): void`](./init.md)** | `public` | Initializes symbol code, size dimensions, and caches module references. |
| **[`changeToSymbol(symbolValue): void`](./changeToSymbol.md)** | `public` | Updates static sprite frame and background for target symbol code. |
| **[`changeToBlurSymbol(): void`](./changeToBlurSymbol.md)** | `public` | Switches sprite frame to motion-blurred texture during high-speed roll. |
| **[`changeToStaticSymbol(): void`](./changeToStaticSymbol.md)** | `public` | Forces switch to static texture and restores full opacity. |
| **[`showStatic(): void`](./showStatic.md)** | `public` | Activates static sprite node and hides Spine skeleton node. |
| **[`hideStatic(): void`](./hideStatic.md)** | `public` | Hides static sprite node to allow Spine skeleton animation playback. |
| **[`playAnimation(name, loop): void`](./playAnimation.md)** | `public` | Loads Spine skeleton data and plays requested animation on Track 0. |
| **[`playAnimationWin(loop): void`](./playAnimationWin.md)** | `public` | Plays celebratory winning Spine animation sequence. |
| **[`stopAnimation(): void`](./stopAnimation.md)** | `public` | Halts Spine playback, resets pose to setup, and switches to static sprite. |
| **[`enableHighlight(): void`](./enableHighlight.md)** | `public` | Restores standard vertex color (`colorNormal`) to symbol renderers. |
| **[`disableHighlight(): void`](./disableHighlight.md)** | `public` | Dims vertex color (`colorDim`) for non-winning symbols during payline display. |
| **[`reset(): void`](./reset.md)** | `public` | Resets animation, display state, color, and skeleton data. |
| **[`resetBeforeBackToPool(): void`](./resetBeforeBackToPool.md)** | `public` | Prepares node for returning into `SlotSymbolManager` NodePool. |
| **[`clearSkeletonData(): void`](./clearSkeletonData.md)** | `public` | Nulls `spine.skeletonData` to prevent GPU memory leaks. |
| **[`mapSymbolData(value, initSize): object`](./mapSymbolData.md)** | `public` | Parses composite symbol strings (e.g. `"K1_1_3"`) into code and size Vec2. |
| **[`switchToStatic(flagStatic): void`](./switchToStatic.md)** | `protected` | Internal coordinator toggling active states between Sprite and Spine nodes. |
