# SlotModuleEditorTag

> **Source Path**: `assets/cc-common/cc-slot-module/Editor/SlotModuleEditorTag.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlotModuleEditorTag`** extends `Component`

## Source Implementation
```typescript
const { _decorator, Component, Enum } = cc;
const { ccclass, property } = _decorator;

export enum SlotModuleEditorEnum {
    REGISTER_ADDED
}


@ccclass
export class SlotModuleEditorTag extends Component {
    @property({ type: Enum(SlotModuleEditorEnum) }) tag: SlotModuleEditorEnum = SlotModuleEditorEnum.REGISTER_ADDED;
}
```
