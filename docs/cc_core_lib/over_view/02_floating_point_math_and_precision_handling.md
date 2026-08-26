---
id: "cc_core_lib:overview:floating_point_math"
title: "Floating Point Arithmetic & Financial Precision"
category: "cc_core_lib"
tags: ["cc_core_lib", "overview", "float_utils", "precision", "financial_math"]
---

# 🔢 Floating Point Arithmetic & Financial Precision

---

## 1. The IEEE-754 Problem in Slot Gaming
JavaScript numbers are double-precision floating points. Direct operations like `0.1 + 0.2 === 0.30000000000000004` cause rounding discrepancies in bets and payouts.

## 2. FloatUtils Integer Scaling
`FloatUtils` scales operands to integers before computing:
$$\text{add}(a, b) = \frac{a \times 10^k + b \times 10^k}{10^k}$$
