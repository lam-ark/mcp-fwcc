---
id: "cc_slot_module:GameConfig:gotcha:missing_currency_format_crash"
title: "Gotcha: Missing Currency Code Crash in MoneyFormatter"
category: "cc_slot_module"
tags: ["GameConfig", "gameconfig", "cc_slot_module", "gotchas", "currency", "MoneyFormatter", "crash", "CURRENCY_CONFIG"]
---

# 🛑 Gotcha: Missing Currency Code Crash in `MoneyFormatter`

## 1. Symptom & Visual Defect
Upon game entry with a new currency (e.g. `MYR`, `IDR`, `BRL`), game initialization crashes with:
```text
TypeError: Cannot read property 'DECIMAL_COUNT' of undefined
at MoneyFormatter.formatMoney (MoneyFormatter.ts:45)
```

---

## 2. Root Cause & Technical Defect
`MoneyFormatter` looks up `CURRENCY_CONFIG[currencyCode]`. If the server returns a currency not configured in `GameConfig.CURRENCY_CONFIG`, the returned object is `undefined`, causing runtime crashes when accessing `DECIMAL_COUNT` or `CURRENCY_PREFIX`.

---

## 3. Standard Code Solution & Fix
Always ensure all supported currency codes are mapped in `CURRENCY_CONFIG` or provide a fallback entry in `GameConfig`:

```typescript
@ccclass("GameConfig")
export class GameConfig extends Component {
    public CURRENCY_CONFIG: any = {
        VND: { MONEY_FORMAT: { DECIMAL_COUNT: 0, CURRENCY_PREFIX: "", TRIM_ZERO: true }, ... },
        USD: { MONEY_FORMAT: { DECIMAL_COUNT: 2, CURRENCY_PREFIX: "$", TRIM_ZERO: false }, ... },
        THB: { MONEY_FORMAT: { DECIMAL_COUNT: 2, CURRENCY_PREFIX: "฿", TRIM_ZERO: false }, ... },
        // Fallback for custom markets
        DEFAULT: { MONEY_FORMAT: { DECIMAL_COUNT: 2, CURRENCY_PREFIX: "", TRIM_ZERO: false }, ... }
    };
}
```
