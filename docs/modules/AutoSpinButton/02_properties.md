# AutoSpinButton: Properties & Configuration

## 1. Cocos Creator Component References

| Property Name | Data Type | Default | Required | Description |
| :--- | :--- | :---: | :---: | :--- |
| **`button`** | `cc.Button` | `null` | Yes | Attached `cc.Button` component for handling click transitions and interactability. |

---

## 2. Runtime Internal State Variables

| State Variable | Data Type | Purpose & Lifecycle Scope |
| :--- | :--- | :--- |
| **`uiManagerData`** | `any` | Reference to `this.gameLogic.getDataModel().UIManagerData` holding reactive flags. |
