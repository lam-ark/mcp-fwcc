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
| **`_defineProperty()`** | `rootObj: any, obj: any, key: string, basePath: string` | `void` | Executes _defineProperty operation in `ObserverObject`. |
| **`_trigger()`** | `rootObj: any, path: string, oldValue: any, newValue: any` | `void` | Executes _trigger operation in `ObserverObject`. |
| **`_registerData()`** | `target: any, rootObj?: any, path?: string, visited?: WeakSet<any>` | `void` | Executes _registerData operation in `ObserverObject`. |
| **`register()`** | `obj: any` | `any` | Executes register operation in `ObserverObject`. |
| **`registerChild()`** | `rootObj: any, childObj: any, path: string` | `any` | Executes registerChild operation in `ObserverObject`. |
| **`isValidObject()`** | `obj: any` | `boolean` | Executes isValidObject operation in `ObserverObject`. |
| **`watch()`** | `target: any, targetPath: string, callback: CallbackFunction, context?: any, options?: WatchOptions` | `Function` | Executes watch operation in `ObserverObject`. |
| **`watchAll()`** | `target: any, callback: CallbackFunction, context?: any` | `Function` | Executes watchAll operation in `ObserverObject`. |
| **`recursive()`** | `target: any, path?: string, paths?: string[], visited?: WeakSet<any>` | `string[]` | Executes recursive operation in `ObserverObject`. |
| **`release()`** | `obj: any, callback: Function, context?: any` | `void` | Executes release operation in `ObserverObject`. |
| **`releaseAll()`** | `obj: any, context: any` | `void` | Executes releaseAll operation in `ObserverObject`. |
| **`releaseAllObservers()`** | `void` | `void` | Executes releaseAllObservers operation in `ObserverObject`. |
| **`unregister()`** | `obj: any` | `void` | Executes unregister operation in `ObserverObject`. |
