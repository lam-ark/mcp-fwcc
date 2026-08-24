---
id: "cc_slot_module:BaseGameDirector:method:init"
title: "BaseGameDirector.init() Method Specification"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "method", "init", "ScriptExecutor", "writer"]
---

# `BaseGameDirector.init(): void`

---

## 1. Method Signature
```typescript
public init(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Reads `this.node["writer"]` and assigns to `this.writer`.
2. Reads `this.node["director"]` and assigns to `this.director`.
3. Instantiates new `ScriptExecutor` passing `(this.writer, this.director, this.gameLogic, this.dataStore, this.gameSettings, this.node.name)`.
4. Attaches logger via `this.executor.setLogger(this.logger)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
init(): void {
    this.writer = this.node["writer"];
    this.director = this.node["director"];
    this.executor = new ScriptExecutor(this.writer, this.director, this.gameLogic, this.dataStore, this.gameSettings, this.node.name);
    this.executor.setLogger(this.logger);
}
```
