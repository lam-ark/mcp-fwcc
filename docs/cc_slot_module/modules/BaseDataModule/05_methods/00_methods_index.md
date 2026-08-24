---
id: "cc_slot_module:BaseDataModule:methods:index"
title: "BaseDataModule Methods Index"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "methods", "index"]
---

# 📋 BaseDataModule Methods Index

---

## 1. Declared Methods Catalog

| Member Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`onLoad(): void`](./onLoad.md)** | `public` | Binds sibling `SlotBaseModule`, inherits `gameMode`, resolves IoC dependencies, and calls `onloadExtend()`. |
| **[`onloadExtend(): void`](./onloadExtend.md)** | `public` | Virtual extension hook for subclass initialization. |
| **[`start(): void`](./start.md)** | `public` | Registers this instance to `GameDataStore.registerModule(this)`. |
| **[`onDataUpdate(key: string, value: any): void`](./onDataUpdate.md)** | `public` | Ingests updated state slice and assigns `this[key] = value`. Subclasses override for sanitization. |
| **[`clearDataWithKey(key: string): void`](./clearDataWithKey.md)** | `public` | Resets a specific registered key to `null`. |
| **[`clearData(): void`](./clearData.md)** | `public` | Resets all `registeredKeys` properties to `null`. |
| **[`getData(key: string): any`](./getData.md)** | `public` | Retrieves the stored value for a given key. |
| **[`isFreeMode(): boolean`](./isFreeMode.md)** | `public` | Checks if `this.gameMode` corresponds to any Free Game variant. |
