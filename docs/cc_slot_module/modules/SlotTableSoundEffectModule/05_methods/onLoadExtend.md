---
id: "cc_slot_module:SlotTableSoundEffectModule:method:onLoadExtend"
title: "SlotTableSoundEffectModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 🚀 `SlotTableSoundEffectModule.onLoadExtend(): void`

---

## 1. Method Signature

```typescript
public onLoadExtend(): void
```

---

## 2. Trigger Source & Execution Lifecycle

Invoked by `SlotBaseModule.onLoad()` during table instantiation. Binds audio trigger listeners to `this.node` and caches `TableModuleConfig`.

---

## 3. Algorithmic Steps

1. Subscribes `this.node.on('REEL_START_SOUND', this.onReelStartSound, this)`.
2. Subscribes `this.node.on('REEL_STOP_SOUND', this.onReelStopSound, this)`.
3. Queries and stores `this.tableConfig = this.getComponent(TableModuleConfig)`.

---

## 4. Full Source Code

```typescript
onLoadExtend(): void {
    this.node.on('REEL_START_SOUND', this.onReelStartSound, this);
    this.node.on('REEL_STOP_SOUND', this.onReelStopSound, this);
    this.tableConfig = this.getComponent(TableModuleConfig);
}
```
