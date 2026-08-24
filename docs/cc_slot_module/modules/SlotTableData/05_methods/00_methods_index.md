---
id: "cc_slot_module:SlotTableData:methods:index"
title: "SlotTableData Methods Index"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "methods", "index"]
---

# 📋 SlotTableData Methods Index

---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`onloadExtend(): void`](./onloadExtend.md)** | `public` | Resolves co-located peer `TableModuleConfig` on the same node. |
| **[`getMatrix(): string[][]`](./getMatrix.md)** | `public` | Converts raw 1D server array into structured 2D `[col][row]` matrix. |
| **[`getRawMatrix(): string[]`](./getRawMatrix.md)** | `public` | Retrieves the active 1D flat string array for the current game mode. |
| **[`getRawResumeMatrix(): string[]`](./getRawResumeMatrix.md)** | `public` | Retrieves the saved 1D flat array for state hydration on reconnection. |
| **[`getResumeMatrix(gameMode?: number): string[][]`](./getResumeMatrix.md)** | `public` | Reconstructs 2D resume matrix and synchronizes cache with `GameDataStore`. |
