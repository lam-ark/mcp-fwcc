# AutoSpinButton: Methods & API Reference

---

## 1. `onLoadExtend(): void`
* **Purpose**: Fetches the attached `cc.Button` component and registers the observer watcher.
* **Execution Flow**:
  ```typescript
  onLoadExtend(): void {
      this.button = this.node.getComponent(cc.Button);
      this.setupObserver();
  }
  ```

---

## 2. `setupObserver(): void`
* **Purpose**: Subscribes to `UIManagerData.isUserInteractionEnabled` via `this.observer.watch()`.
* **Execution Flow**:
  ```typescript
  setupObserver(): void {
      this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
      this.observer.watch(
          this.uiManagerData,
          "isUserInteractionEnabled",
          this.setEnableButton.bind(this),
          this,
          { fireImmediately: true }
      );
  }
  ```

---

## 3. `setEnableButton(isEnable: boolean): void`
* **Purpose**: Toggles `this.button.interactable` state according to game state.

---

## 4. `onClick(): void`
* **Purpose**: Emits `GameLogicUIEvents.OPEN_AUTO_SPIN_PANEL` through `this.gameLogic`.

---

## 5. `onDestroy(): void`
* **Purpose**: Releases observer watchers to prevent memory leaks.
  ```typescript
  protected onDestroy(): void {
      this.observer.releaseAll(this.uiManagerData, this);
      super.onDestroy();
  }
  ```
