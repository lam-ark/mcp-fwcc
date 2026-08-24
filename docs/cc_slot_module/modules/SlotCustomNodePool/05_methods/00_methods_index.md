---
id: "cc_slot_module:SlotCustomNodePool:methods:index"
title: "SlotCustomNodePool Methods Index"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "methods", "index"]
---

# 📋 SlotCustomNodePool Methods Index

---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`initSymbolPool(): void`](./initSymbolPool.md)** | `public` | Initializes both normal and special symbol pools. |
| **[`setupNormalSymbolPool(): void`](./setupNormalSymbolPool.md)** | `protected` | Pre-warms the default normal symbol pool. |
| **[`setupSpecialSymbolPool(): void`](./setupSpecialSymbolPool.md)** | `protected` | Pre-warms individual pools for each special symbol template. |
| **[`createPool(poolName, template, count): cc.NodePool`](./createPool.md)** | `protected` | Instantiates and tags $N$ nodes into a new `cc.NodePool`. |
| **[`setNodeMetadata(node, poolName, isSpecial): void`](./setNodeMetadata.md)** | `protected` | Stamps origin pool name and `SPECIAL_SYMBOL_KEY` onto node. |
| **[`getSpecialPoolName(symbolCode): string`](./getSpecialPoolName.md)** | `protected` | Returns formatted pool key for a special symbol code. |
| **[`get(symbolCode): cc.Node`](./get.md)** | `public` | Resolves appropriate pool and returns a ready symbol node. |
| **[`getSymbolFromPool(pool, symbolCode, isSpecial): cc.Node`](./getSymbolFromPool.md)** | `protected` | Checks out node from pool or instantiates fallback if empty. |
| **[`put(symbol): void`](./put.md)** | `public` | Inspects node metadata and routes it back into its origin pool. |
| **[`size(): number`](./size.md)** | `public` | Computes aggregate total ready nodes across all pools. |
