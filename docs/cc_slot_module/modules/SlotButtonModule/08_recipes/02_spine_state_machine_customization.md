---
id: "cc_slot_module:SlotButtonModule:recipes:spine_state_machine_customization"
title: "Recipe: Setting Up Spine Skeleton Spin Button Animations"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonSpine", "cc_slot_module", "recipes", "spine", "animation"]
---

# 💡 Recipe: Setting Up Spine Skeleton Spin Button Animations

---

## 1. Spine Component Configuration

Attach `SlotButtonSpine` to the `display` node:

```typescript
@property(sp.Skeleton) spineBtnSpin: sp.Skeleton = null;
@property(sp.Skeleton) spineHover: sp.Skeleton = null;
```

Configure the animation clip names in the Cocos Inspector:
- `animIdle`: `"Spin"` (looping glowing button)
- `animStop`: `"Stop"` (red square / fast stop state)
- `animHover`: `"Hover"` (mouseover light aura)
- `animSpinToStop`: `"Spin_To_Stop"` (transitional animation between spin and stop)
