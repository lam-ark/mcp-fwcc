---
id: "cc_slot_module:PaylineInfoModule:gotchas:unsupported_pay_system_type_crash"
title: "Gotcha: Unmatched PAY_SYSTEM Math Type"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "gotchas", "math_types"]
---

# ⚠️ Gotcha: Unmatched PAY_SYSTEM Math Type

---

## 1. Problem Description

If a custom slot mechanic defines a new `PAY_SYSTEM` without extending `convertPayLineInfo()`, the switch statement returns `undefined`, throwing:
`TypeError: Cannot destructure property 'symbolId' of 'undefined'`.

---

## 2. Prevention

Always override `convertPayLineInfo()` in custom math games or ensure fallback handling is implemented.
