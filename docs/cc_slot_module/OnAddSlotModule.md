# OnAddSlotModule

> **Source Path**: `assets/cc-common/cc-slot-module/Editor/OnAddSlotModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`OnAddSlotModule`** extends `Component`

## Key Methods
- `onLoad(): void`
- `onSlotModuleAdded(): void`
- `onSlotModuleRemoved(): void`

## Source Implementation
```typescript
const { _decorator, Component, Event, Node } = cc;
import { GameModeDirectorModule } from '../GameMode/GameModeDirectorModule';
import { SlotModuleEditorEnum, SlotModuleEditorTag } from './SlotModuleEditorTag';
const { ccclass, property, disallowMultiple, executeInEditMode, requireComponent } = _decorator;

@ccclass
@disallowMultiple
@executeInEditMode
@requireComponent(GameModeDirectorModule)
export class OnAddSlotModule extends Component {
    onLoad(): void {
        //@ts-ignore
        if (!CC_EDITOR) {
            return;
        }

        this.node.on(Node.EventType.CHILD_ADDED, this.onSlotModuleAdded, this);
        this.node.on(Node.EventType.CHILD_REMOVED, this.onSlotModuleRemoved, this);
    }

    onSlotModuleAdded(node: cc.Node): void {
        if (!node) {
            return;
        }

        const directorComp = this.node.getComponent(GameModeDirectorModule);
        if (!directorComp) {
            return;
        }

        const editorTag = node.getComponent(SlotModuleEditorTag);
        if (!editorTag || editorTag.tag !== SlotModuleEditorEnum.REGISTER_ADDED) {
            return;
        }

        const modules = directorComp.moduleList;
        if (modules.find(it => it === node)) {
            return;
        }

        modules.push(node);
        // Editor.Message.send('scene', 'save-scene');
        console.log('ADD SLOT MODULE: ', node.name);
    }

    onSlotModuleRemoved(node: cc.Node): void {
        if (!node) {
            return;
        }

        const directorComp = this.node.getComponent(GameModeDirectorModule);
        if (!directorComp) {
            return;
        }

        let modules = directorComp.moduleList;
        if (!modules.find(it => it === node)) {
            return;
        }

        modules = modules.filter(it => it !== node);
        directorComp.moduleList = modules;
        // Editor.Message.send('scene', 'save-scene');
        console.log('REMOVE SLOT MODULE: ',  directorComp.moduleList.length);
    }
}
```
