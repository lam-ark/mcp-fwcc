---
id: "cc_slot_module:SlotSymbolModule:method:mapSymbolData"
title: "SlotSymbolModule.mapSymbolData() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "mapSymbolData", "mega_symbols"]
---

# `SlotSymbolModule.mapSymbolData(symbolValue: string, initSize: cc.Vec2 = null): { symbolCode: string, symbolSize: cc.Vec2 }`

---

## 1. Method Signature
```typescript
public mapSymbolData(symbolValue: string, initSize: cc.Vec2 = null): { symbolCode: string, symbolSize: cc.Vec2 }
```

---

## 2. Detailed Algorithmic Execution Logic
1. Splits string by underscore separator (`'_'`).
2. If multi-cell format (`"WILD_1_3"`): extracts width $1$ and height $3$, mapping size to `cc.Vec2(1, 3)`.
3. If single-cell: sets size to `cc.Vec2(1, 1)`.
4. Returns parsed `{ symbolCode, symbolSize }`.

---

## 3. Un-truncated Source Code Implementation
```typescript
mapSymbolData(symbolValue: string, initSize: cc.Vec2 = null): { symbolCode: string, symbolSize: cc.Vec2 } {
	const splitData = symbolValue.split('_');
	let symbolSize = initSize;
	if (!initSize || initSize.equals(Vec2.ZERO)) {
		if (splitData.length > 1) {
			symbolSize = new Vec2(Number(splitData[1]), Number(splitData[2]));
		} else {
			symbolSize = Vec2.ONE;
		}
	}
	const symbolCode = !initSize || symbolSize.equals(Vec2.ONE) ? symbolValue : splitData[0];
	return { symbolCode, symbolSize };
}
```
