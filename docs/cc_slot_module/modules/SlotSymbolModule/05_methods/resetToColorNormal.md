---
id: "cc_slot_module:SlotSymbolModule:method:resetToColorNormal"
title: "SlotSymbolModule.resetToColorNormal() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "resetToColorNormal"]
---

# `SlotSymbolModule.resetToColorNormal(): void`

---

## 1. Method Signature
```typescript
public resetToColorNormal(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Ensures `this.resourceManager` is loaded.
2. Fetches bright white color from `this.resourceManager.getColorNormal()`.
3. Applies color to all renderers in `this._rendererList`.

---

## 3. Un-truncated Source Code Implementation
```typescript
resetToColorNormal(): void {
	if (!this.resourceManager) {
		this.setResourceManager();
	}
	const colorNormal = this.resourceManager.getColorNormal();
	this._rendererList.forEach(renderer => {
		if (!renderer.color.equals(colorNormal)) {
			renderer.color = colorNormal;
		}
	});
}
```
