# SlotBaseModule: Methods & Lifecycle Hooks

---

## 1. `onLoad(): void`
* **Purpose**: Orchestrates dependency injection and lifecycle hooks.
* **Implementation**:
  ```typescript
  onLoad(): void {
      const gameId = NodeUtils.getGameIdFromNode(this.node);
      applyInjections(this, gameId);
      if (this.gameLogic) {
          this.gameLogic.on("RESET_ALL_EFFECT_AND_TASKS", this.resetAllEffectAndTasks, this);
      }
      this.onLoadExtend();
      this.registerEvents();
  }
  ```

---

## 2. `onLoadExtend(): void`
* **Purpose**: Overridable initialization hook for subclasses. Guarantees that all `@inject` services are populated.

---

## 3. `setupModule(moduleEvent: GameModuleEvent, gameMode): void`
* **Purpose**: Called by Director to bind local scoped events when switching modes.

---

## 4. `onDestroy(): void`
* **Purpose**: Automatically unbinds all event listeners registered to `this`.
