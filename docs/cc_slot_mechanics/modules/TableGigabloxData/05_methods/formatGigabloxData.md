---
id: "cc_slot_mechanics:TableGigabloxData:methods:formatGigabloxData"
title: "TableGigabloxData.formatGigabloxData Method"
category: "cc_slot_mechanics"
tags: ["TableGigabloxData", "table_gigablox_data", "cc_slot_mechanics", "methods", "formatGigabloxData"]
---

# 📖 `TableGigabloxData.formatGigabloxData()`

---

## 1. Method Signature & Overview

```typescript
formatGigabloxData(megaMatrix): void
```

- **Primary Role**: Implements formatGigabloxData within the TableGigabloxData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
formatGigabloxData(megaMatrix): void {
		const NORMAL_TABLE_FORMAT = [3, 3, 3, 3, 3];
		let bloxes = [];
		let blox = 1;
		for (let col = 0; col < NORMAL_TABLE_FORMAT.length; col++) {
			if (blox == 1) {
				for (let row = 0; row < NORMAL_TABLE_FORMAT[col]; row++) {
					if (megaMatrix[col][row].includes("-") && blox == 1) {
						blox = megaMatrix[col][row].split("-")[1];
						bloxes.push({ col, blox: blox });
					}
				}
			} else {
				blox--;
				continue;
			}
		}
		if (bloxes.length > 0) {
			for (let i = 0; i < bloxes.length; i++) {
				const { col } = bloxes[i];
				let symbols = [];
				let symbolStartRows = [];
				for (let row = 0; row < NORMAL_TABLE_FORMAT[col]; row++) {
					const symbol = megaMatrix[col][row]
					if (symbols.indexOf(symbol) < 0) {
						symbols.push(symbol);
						symbolStartRows.push(row);
					}
				}
				if (symbols.length > 0) {
					bloxes[i].symbols = symbols;
					bloxes[i].rows = symbolStartRows;
				}
			}
		}
		//log(bloxes);
	}
```
