# BaseGameDirector: Methods & API Reference

---

## 1. `runAction(actionName: string, data?: any): Promise<void>`
* **Purpose**: Dispatches an action command asynchronously through the `ScriptExecutor`.

---

## 2. `executeNextScript(script: any): void`
* **Purpose**: Advances to the next scripted task in the mode execution pipeline.

---

## 3. `onResetAllScripts(): void`
* **Purpose**: Clears all pending director tasks upon reset or game mode transition.

---

## 4. `setGameSpeed(mode: GAME_SPEED_ENUM): void`
* **Purpose**: Adjusts action delays and tween time scales dynamically for Turbo mode.
