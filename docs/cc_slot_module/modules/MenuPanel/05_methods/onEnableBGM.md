---
id: "cc_slot_module:MenuPanel:methods:onEnableBGM"
title: "MenuPanel.onEnableBGM Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "onEnableBGM"]
---

# 📖 `MenuPanel.onEnableBGM()`

---

## 1. Method Overview & Signature

```typescript
public onEnableBGM(isEnableBGM: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onEnableBGM(isEnableBGM: boolean): void {
	this.musicOn.active = isEnableBGM;
	this.musicOff.active = !isEnableBGM;
	if (this.soundPlayer) {
		this.soundPlayer.setBgmEnable(isEnableBGM);
	}
}
```
