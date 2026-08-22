# SoundConvertList

> **Source Path**: `assets/cc-common/cc-slot-module/Core/SlotSound/SoundConvertList.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`SoundConvertList`** extends `Component`

## CC Properties
- `private`
- `get`
- `private`
- `get`

## Key Methods
- `bgmList(): cc.AudioClip[]`
- `sfxList(): cc.AudioClip[]`
- `onLoad(): void`
- `onSoundListChange(): void`
- `removePrefix(): string`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
import { CustomAudioClipModule } from '../../Components/Common/SlotCustomType';
import { SlotSoundPlayerModule } from './SlotSoundPlayerModule';
const { ccclass, property, requireComponent, executeInEditMode } = _decorator;

@ccclass
@requireComponent(SlotSoundPlayerModule)
@executeInEditMode()
export class SoundConvertList extends Component {
    @property prefix: string = "9xxx_";
    @property({type: [cc.AudioClip]}) private _bgmList: cc.AudioClip[] = [];
    @property({type: [cc.AudioClip]})
    get bgmList(): cc.AudioClip[] {
        return this._bgmList;
    }

    set bgmList(value: cc.AudioClip[]) {
        this._bgmList = value;
        this.onSoundListChange();
    }

    @property({type: [cc.AudioClip]}) private _sfxList: cc.AudioClip[] = [];
    @property({type: [cc.AudioClip]})
    get sfxList(): cc.AudioClip[] {
        return this._sfxList;
    }

    set sfxList(value: cc.AudioClip[]) {
        this._sfxList = value;
        this.onSoundListChange();
    }

    private _soundPlayer: SlotSoundPlayerModule = null;


    onLoad(): void {
        this._soundPlayer = this.getComponent(SlotSoundPlayerModule);
    }

    onSoundListChange(): void {
        // this._soundPlayer.musicList = this._bgmList;
        // this._soundPlayer.sfxList = this._sfxList;
        //@ts-ignore
        if (!CC_EDITOR) {
            return;
        }

        const cloneBgmList = [...this._bgmList];
        const cloneSfxList = [...this._sfxList];

        const bgmList = cloneBgmList.map(it => {
            const bgm = new CustomAudioClipModule();
            bgm.isMusic = true;
            bgm.soundId = this.removePrefix(it.name);
            bgm.audioFile = it;
            return bgm;
        });



        const sfxList = cloneSfxList.map(it => {
            const sfx = new CustomAudioClipModule();
            sfx.isEffect = true;
            sfx.soundId = this.removePrefix(it.name);
            sfx.audioFile = it;
            return sfx;
        });

        if (this._soundPlayer) {
            this._soundPlayer.musicList = bgmList;
            this._soundPlayer.sfxList = sfxList;
        }
    }

    private removePrefix(name: string): string {
        const prefixRegex = new RegExp(`^${this.prefix}`);
        return name.replace(prefixRegex, '').toUpperCase();
    }
}


```
