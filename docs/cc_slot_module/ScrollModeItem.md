# ScrollModeItem

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/BetHistory/ScrollModeItem.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`ScrollModeItem`** extends `SlotBaseModule`

## CC Properties
- `tabAnchor`
- `modeName`

## Key Methods
- `onLoad(): void`
- `setDataScroll(): void`
- `reset(): void`
- `onClick(): void`
- `activeHighLight(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
import { GameUIEvents } from "../../Core/GameUIEvents";
const { ccclass, property } = _decorator;

@ccclass
export class ScrollModeItem extends SlotBaseModule {
	@property(cc.Node)
	tabAnchor: cc.Node = null;
	@property(cc.Label)
	modeName: cc.Label = null;

	data = null;

	onLoad(): void {
		super.onLoad();
		this.node.on("SET_DATA_SCROLL", this.setDataScroll, this);
		this.node.on("ACTIVE_HIGHLIGHT", this.activeHighLight, this);
		this.node.on("RESET", this.reset, this);

		this.reset();
	}

	setDataScroll(index: number, data: any): void {
		const { name } = data;
		this.modeName.string = name;
		this.data = data;
		this.node["indexPage"] = index;
	}

	reset(): void {
		this.node["indexPage"] = 0;
		this.modeName.string = "";
		this.data = null;
		this.tabAnchor.active = false;
	}

	onClick(): void {
		this.eventManager.emit(GameUIEvents.BET_HISTORY.ON_SCROLL_CLICK, this.node["indexPage"]);
	}

	activeHighLight(isActive: boolean): void {
		this.tabAnchor.active = isActive;
	}
}

```
