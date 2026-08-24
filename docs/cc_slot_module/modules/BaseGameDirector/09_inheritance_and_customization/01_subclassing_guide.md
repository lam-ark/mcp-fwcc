---
id: "cc_slot_module:BaseGameDirector:customization:subclassing_guide"
title: "BaseGameDirector Subclassing & Director Hierarchy Guide"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "customization", "subclassing", "director_writer"]
---

# 🏗️ BaseGameDirector Subclassing & Director Hierarchy Guide

## 1. Class Inheritance Declaration

When implementing a game mode (e.g. `NormalGameDirectorModule` or `FreeGameDirectorModule`), inherit from `BaseGameDirector`:

```typescript
const { _decorator } = cc;
import { BaseGameDirector } from "../Core/BaseGameDirector";
const { ccclass } = _decorator;

@ccclass("NormalGameDirectorModule")
export class NormalGameDirectorModule extends BaseGameDirector {
    // Mode-specific directors override hooks and declare step handlers
}
```

---

## 2. Invariant Subclassing Rules
1. **Never override `onLoad()` without `super.onLoad()`**: `BaseGameDirector.onLoad()` calls `super.onLoad()` to resolve IoC dependencies and then triggers `this.onExtendedLoad()`.
2. **Always implement `init()` properly**: Ensure `this.writer` and `this.director` are attached to the node before `this.init()` executes.
3. **Keep Step Handlers Async-Safe**: Any method invoked by a command descriptor (`{ command: "MY_STEP", data }`) must return a resolved `Promise<void>` or handle errors gracefully.
