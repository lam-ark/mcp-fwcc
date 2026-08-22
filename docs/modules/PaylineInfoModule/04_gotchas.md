# PaylineInfoModule: Gotchas & Best Practices

---

## ⚠️ Gotcha 1: BitmapFont Missing Glyphs Blanking Win Box
> [!WARNING]
> **Symptom**: The win box displays empty/black text when winning payouts occur.
> 
> **Root Cause**: Setting string with English letters (e.g. `"Total win $200"`) on a `cc.BitmapFont` containing only digits `0-9` and `$`.
> 
> **Standard Fix**: Only format pure currency numbers via `this.moneyFormatter.formatMoney(winAmount)`.
