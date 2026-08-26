---
id: "cc_core_lib:ObserverObject:methods:index"
title: "ObserverObject Methods Master Index"
category: "cc_core_lib"
tags: ["ObserverObject", "observer_object", "cc_core_lib", "methods", "index"]
---

# 📖 `ObserverObject` Methods Master Index

---

## 1. Declared Method Signatures

| Method | Parameters | Return Type | Description |
| :--- | :--- | :--- | :--- |
| **[`_defineProperty()`](./_defineProperty.md)** | `rootObj: any, obj: any, key: string, basePath: string` | `void` | Executes _defineProperty operation in `ObserverObject`. |
| **[`_trigger()`](./_trigger.md)** | `rootObj: any, path: string, oldValue: any, newValue: any` | `void` | Executes _trigger operation in `ObserverObject`. |
| **[`_registerData()`](./_registerData.md)** | `target: any, rootObj?: any, path?: string, visited?: WeakSet<any>` | `void` | Executes _registerData operation in `ObserverObject`. |
| **[`register()`](./register.md)** | `obj: any` | `any` | Executes register operation in `ObserverObject`. |
| **[`registerChild()`](./registerChild.md)** | `rootObj: any, childObj: any, path: string` | `any` | Executes registerChild operation in `ObserverObject`. |
| **[`isValidObject()`](./isValidObject.md)** | `obj: any` | `boolean` | Executes isValidObject operation in `ObserverObject`. |
| **[`watch()`](./watch.md)** | `target: any, targetPath: string, callback: CallbackFunction, context?: any, options?: WatchOptions` | `Function` | Executes watch operation in `ObserverObject`. |
| **[`watchAll()`](./watchAll.md)** | `target: any, callback: CallbackFunction, context?: any` | `Function` | Executes watchAll operation in `ObserverObject`. |
| **[`recursive()`](./recursive.md)** | `target: any, path?: string, paths?: string[], visited?: WeakSet<any>` | `string[]` | Executes recursive operation in `ObserverObject`. |
| **[`release()`](./release.md)** | `obj: any, callback: Function, context?: any` | `void` | Executes release operation in `ObserverObject`. |
| **[`releaseAll()`](./releaseAll.md)** | `obj: any, context: any` | `void` | Executes releaseAll operation in `ObserverObject`. |
| **[`releaseAllObservers()`](./releaseAllObservers.md)** | `void` | `void` | Executes releaseAllObservers operation in `ObserverObject`. |
| **[`unregister()`](./unregister.md)** | `obj: any` | `void` | Executes unregister operation in `ObserverObject`. |
