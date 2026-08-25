---
id: "cc_slot_module:MenuPanel:methods:onEnableSFX"
title: "MenuPanel.onEnableSFX Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "onEnableSFX"]
---

# 📖 `MenuPanel.onEnableSFX()`

---

## 1. Method Overview & Signature

```typescript
public onEnableSFX(isEnableSFX: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onEnableSFX(isEnableSFX: boolean): void {
	this.sfxOn.active = isEnableSFX;
	this.sfxOff.active = !isEnableSFX;
	if (this.soundPlayer) {
		this.soundPlayer.setEffectEnable(isEnableSFX);
	}
}
```
