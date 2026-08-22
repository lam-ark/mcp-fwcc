# SlotCustomType

> **Source Path**: `assets/cc-common/cc-slot-module/Components/Common/SlotCustomType.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`SlotCustomEvent`** extends `Event`
- **`CustomAudioClipModule`**

## CC Properties
- `isMusic`
- `isEffect`
- `soundId`
- `ignoreCheckMaxChannel`
- `audioFile`
- `audioSource`

## Source Implementation
```typescript

const { _decorator, Event, AudioSource } = cc;
const { ccclass, property } = _decorator;

export class SlotCustomEvent extends Event {
	constructor(name: string, bubbles?: boolean, details?: any) {
		super(name, bubbles);
		this.details = details;
	}
	public details: any = null;
}

@ccclass('CustomAudioClipModule')
export class CustomAudioClipModule {
	@property() isMusic: boolean = false;
	@property() isEffect: boolean = false;
	@property() soundId = ''
	@property() ignoreCheckMaxChannel: boolean = false;
	@property({ type: cc.AudioClip }) audioFile: cc.AudioClip = null;
	@property({ type: AudioSource, visible: false }) audioSource: cc.AudioSource = null;

	audioSourcePool: cc.AudioSource[] = [];
}

export type HowlerDataModule = { clip: any /*Howl*/, id?: number };
```
