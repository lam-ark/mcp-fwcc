---
id: "cc_slot_module:BetSelectionPanel:methods:init"
title: "BetSelectionPanel.init Method"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "methods", "init", "instantiation"]
---

# 📖 `BetSelectionPanel.init()`

---

## 1. Method Overview & Signature

Instantiates selectable bet item rows and top/bottom buffer padding inside the denomination and total bet ScrollView content containers.

```typescript
public init(): void
```

---

## 2. Trigger Source & Execution Context

- **Invoker**: Called by `openPanel()` on initial modal launch.
- **Idempotency Guard**: Protected by `if (this.isInited) return;` to prevent duplicate prefab instantiations.

---

## 3. Algorithmic Breakdown

1. **Idempotency Check**: Aborts immediately if `this.isInited` is true.
2. **Top Buffer Padding**: Calls `this.addBufferItem(true)` to insert `bufferTop` blank items (`"--"`), allowing the first bet option to center in the wheel viewport.
3. **Bet Item Creation**: Iterates over keys in `this.mainBets`:
   - Calls `createBetDenomItem(betId)` to create the denomination chip row.
   - Calls `createTotalBetItem(betId)` to create the total bet amount row.
   - Records key-to-index mapping: `this.mapBetIdWithIndex[betId] = index`.
4. **Bottom Buffer Padding**: Calls `this.addBufferItem(false)` to insert `bufferBot` blank items, allowing the last option to center.
5. **Count Recording**: Sets `this.showItems = Object.keys(this.mainBets).length`.

---

## 4. Complete Source Code Implementation

```typescript
init(): void {
	if (this.isInited) {
		return;
	}
	this.isInited = true;
	this.addBufferItem(true);
	Object.keys(this.mainBets).forEach((betId, index) => {
		this.createBetDenomItem(betId);
		this.createTotalBetItem(betId);
		this.mapBetIdWithIndex[betId] = index;
	});
	this.showItems = Object.keys(this.mainBets).length;
	this.addBufferItem(false);
}
```
