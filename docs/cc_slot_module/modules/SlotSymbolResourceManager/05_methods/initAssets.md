---
id: "cc_slot_module:SlotSymbolResourceManager:method:initAssets"
title: "SlotSymbolResourceManager.initAssets() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "method", "initAssets", "dictionary_indexing"]
---

# `SlotSymbolResourceManager.initAssets(): void`

---

## 1. Method Signature
```typescript
protected initAssets(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Iterates over `symbolSfList` and sets `staticFrameAssets[code] = frame`.
2. Iterates over `blurSymbolSfList` and sets `blurFrameAssets[code] = frame`.
3. Iterates over `backgroundSymbolSfList` and sets `backgroundFrameAssets[code] = frame`.
4. Iterates over `symbolSkeletons` and sets `skeletonAssets[code] = skeletonData`.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected initAssets(): void {
	for (const frame of this.symbolSfList) {
		this.staticFrameAssets[frame.symbolCode] = frame.symbolSf;
	}

	for (const frame of this.blurSymbolSfList) {
		this.blurFrameAssets[frame.symbolCode] = frame.symbolSf;
	}

	for (const frame of this.backgroundSymbolSfList) {
		this.backgroundFrameAssets[frame.symbolCode] = frame.symbolSf;
	}

	for (const skeleton of this.symbolSkeletons) {
		this.skeletonAssets[skeleton.symbolCode] = skeleton.skeletonData;
	}
}
```
