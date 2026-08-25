---
id: "cc_slot_module:MenuPanel:methods:setupObserver"
title: "MenuPanel.setupObserver Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `MenuPanel.setupObserver()`

---

## 1. Method Overview & Signature

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
	this.observer.watch(this.uiManagerData, "isMenuPanelOpen", (isOpen) => {
		if (isOpen) {
			this.openPanel();
		} else {
			this.closePanel();
		}
	}, this, { fireImmediately: true });
	this.observer.watch(this.gameSettingData, "isEnableBGM", this.onEnableBGM.bind(this), this);
	this.observer.watch(this.gameSettingData, "isEnableSFX", this.onEnableSFX.bind(this), this);
}
```
