---
id: "cc_slot_module:MenuPanel:methods:updateButtonLayout"
title: "MenuPanel.updateButtonLayout Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "updateButtonLayout"]
---

# 📖 `MenuPanel.updateButtonLayout()`

---

## 1. Method Overview & Signature

```typescript
public updateButtonLayout(): void
```

---

## 2. Complete Source Code Implementation

```typescript
updateButtonLayout(): void {
	const { LOGIN_IFRAME } = eno.environment.getConfig();
	const isEnableHomeBtn = eno.gameCommonUtils.checkConditionCloseGameIframe();
	if (this.buttonLayout && this.spacingX && LOGIN_IFRAME && !isEnableHomeBtn) {
		this.buttonLayout.spacingX = this.spacingX;
		this.buttonLayout.updateLayout();
	}
}
```
