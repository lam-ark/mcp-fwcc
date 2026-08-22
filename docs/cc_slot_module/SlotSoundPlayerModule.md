# SlotSoundPlayerModule

> **Source Path**: `assets/cc-common/cc-slot-module/Core/SlotSound/SlotSoundPlayerModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlotSoundPlayerModule`** extends `SoundPlayerModuleImpl`

## Key Methods
- `playMainBGM(): void`
- `switchMusicBGM(): void`
- `forcePlayMusicBGM(): void`

## Source Implementation
```typescript
const { _decorator, tween } = cc;
import { GAME_MODE_ENUM } from '../../Components/Common/SlotEnum';
import { SoundPlayerModuleImpl } from '../../Components/SoundPlayerModuleImpl';

const { ccclass } = _decorator;

@ccclass
export class SlotSoundPlayerModule extends SoundPlayerModuleImpl {
	_tweenSwitchMusicBGM: any = null;
	_sfxTransition: string = "";

	playMainBGM(currentGameMode?: number): void {
		let soundId = "BGM_MAIN";
		if (currentGameMode === GAME_MODE_ENUM.FREE_GAME) {
			soundId = "BGM_FREE";
		} else if (currentGameMode === GAME_MODE_ENUM.BONUS_GAME) {
			soundId = "BGM_BONUS";
		}

		this.playMusic(soundId);
	}

	switchMusicBGM(nextGameMode: number, sfxTransition: string = "", fadeTime: number = 0.2, delaySwitch: number = 0): void {
		if (!this.isMuteMusic && this.isEnableBGM) {
			this.fadeMusicTo(fadeTime, 0);
		}

		if (sfxTransition) {
			this._sfxTransition = sfxTransition
			this.playSfx(this._sfxTransition);
		}

		this._tweenSwitchMusicBGM && this._tweenSwitchMusicBGM.stop();
		this._tweenSwitchMusicBGM = tween(this.node)
			.delay(delaySwitch)
			.call(() => {
				this.playMainBGM(nextGameMode);

				if (!this.isMuteMusic && this.isEnableBGM) {
					this.fadeMusicTo(fadeTime, this.musicVolume);
				}
			})

		this._tweenSwitchMusicBGM.start();
	}

	forcePlayMusicBGM(gameMode?: number): void {
		this._tweenSwitchMusicBGM && this._tweenSwitchMusicBGM.stop();
		this.stopSfx(this._sfxTransition);

		if (!this.isMuteMusic && this.isEnableBGM) {
			this.fadeMusicTo(0, this.musicVolume);
		}

		this.playMainBGM(gameMode);
	}
}

```
