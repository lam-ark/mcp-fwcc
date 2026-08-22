# FortuneWheelModule

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/FortuneWheelGame/Scripts/Table/FortuneWheelModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`FortuneWheelModule`** extends `SlotBaseModule`

## CC Properties
- `itemPrefab`
- `wheelNode`
- `arrowNode`
- `fortuneItemHolder`
- `dotPrefab`
- `dotHolder`
- `direction`

## Key Methods
- `onLoadExtend(): void`
- `registerEvents(): void`
- `initWheel(): void`
- `getFortuneWheelModuleConfig(): FortuneWheelModuleConfig`
- `getFortuneWheelModuleData(): FortuneWheelModuleData`
- `initDot(): void`
- `setUpdateArrowInit(): void`
- `resetTable(): void`
- `runWheelIdle(): void`
- `startSpinWheel(): void`
- `stopSpinWheel(): Promise<void>`
- `fastStopWheel(): void`
- `setupStopAngle(): void`
- `randRange(): number`
- `update(): void`

## Source Implementation
```typescript
const { _decorator, instantiate, tween } = cc;
import { SlotBaseModule } from "../../../../Core/SlotBaseModule";
import { FortuneWheelModuleConfig } from "./FortuneWheelModuleConfig";
import { FortuneWheelModuleData } from "./FortuneWheelModuleData";

const { ccclass, property } = _decorator;
enum SpinDirection {
	CLOCKWISE = -1,
	ANTICLOCKWISE = 1
}
enum SpinState {
	IDLE,
	ACCELERATING,
	SPINNING,
	DECELERATING,
	WINNING,
}
@ccclass
export class FortuneWheelModule extends SlotBaseModule {
	@property(cc.Prefab)
	itemPrefab: cc.Prefab = null;
	@property(cc.Node)
	wheelNode: cc.Node = null;
	@property(cc.Node)
	arrowNode: cc.Node = null
	@property(cc.Node)
	fortuneItemHolder: cc.Node = null;
	@property(cc.Prefab)
	dotPrefab: cc.Prefab = null;
	@property(cc.Node)
	dotHolder: cc.Node = null;
	@property()
	direction: number = -1;

	_offsetAngle: number = 0;
	listItems: cc.Node[] = [];
	listDotItems: cc.Node[] = [];
	_betId: string = "";
	_result: any = null;
	_indexAngle: number[] = [];
	_config: FortuneWheelModuleConfig = null;
	_data: FortuneWheelModuleData = null;

	_state: SpinState = SpinState.IDLE;
	_timer: number = 0;
	_currentSpeed: number = 0;
	_lastPassedSegment: number = -1;
	_decelerationDuration: number = 0;
	stopBounceAngle: number = 0;
	startBounceAngle: number = Number.MAX_SAFE_INTEGER;
	tweenBounceBack: any = null;
	wheelMode = null;
	resultIndex: number = -1;
	resultAngle: number = 0;
	startAngle: number = 0;
	angelPerItem: number = 0;
	tweenBounce = null;
	fastStop = false;

	resultCallback: Function = null;

	onLoadExtend(): void {
		this._config = this.getFortuneWheelModuleConfig();
		this._data = this.getFortuneWheelModuleData();
	}

	protected registerEvents(): void {
		if (this.moduleEvent) {
			this.moduleEvent.on("INIT_BONUS_GAME", this.initWheel, this);
			this.moduleEvent.on("START_SPIN_WHEEL", this.startSpinWheel, this);
			this.moduleEvent.on("STOP_SPIN_WHEEL", this.stopSpinWheel, this);
			this.moduleEvent.on("FAST_STOP_WHEEL", this.fastStopWheel, this);
			this.moduleEvent.on("RESET_WHEEL", this.resetWheel, this);
		}
	}

	initWheel(): void {
		const { TOTAL_ITEM, WHEEL_MODES } = this._config;
		this.wheelMode = WHEEL_MODES.NORMAL;
		this.angelPerItem = 360 / TOTAL_ITEM;
		for (let index = 0; index < TOTAL_ITEM; index++) {
			const item = instantiate(this.itemPrefab);
			this.wheelNode.addChild(item);
			const angleItem = index * this.angelPerItem
			this._indexAngle.push(angleItem);
			item.angle = angleItem;
			item.emit("INIT", { itemId: index, value: 0 });
			item.setSiblingIndex(0);
			this.initDot(index);
			this.listItems.push(item);
		}
		this.setUpdateArrowInit();
		this.runWheelIdle();
	}

	getFortuneWheelModuleConfig(): FortuneWheelModuleConfig {
		return this.getComponent(FortuneWheelModuleConfig);
	}

	getFortuneWheelModuleData(): FortuneWheelModuleData {
		return this.getComponent(FortuneWheelModuleData);
	}

	initDot(index): void {
		if (this.dotPrefab && this.dotHolder) {
			const dot = instantiate(this.dotPrefab)
			this.dotHolder.addChild(dot)
			const anglePerSegment = this.angelPerItem * (Math.PI / 180);
			const startAngle = index * anglePerSegment;
			const midAngle = startAngle + anglePerSegment;
			const dotX = this._config.RADIUS * Math.cos(midAngle);
			const dotY = this._config.RADIUS * Math.sin(midAngle);
			dot.position = new cc.Vec2(dotX, dotY);
			this.listDotItems.push(dot);
		}
	}
	setUpdateArrowInit(): void {
		if (this.wheelNode.angle == 0 && this.arrowNode) {
			const dotAngleInDegree = 2 * Math.atan((this._config.DOT_RADIUS / 2) / (this._config.RADIUS / 2)) * (180 / Math.PI);
			this.startBounceAngle = 0;
			this.stopBounceAngle = dotAngleInDegree / 2 * this.direction;
			this.arrowNode.angle = -dotAngleInDegree * this.direction;
			this._lastPassedSegment = 0;
		}
	}

	resetTable(): void {
		this.listItems.forEach(item => {
			item.emit("RESET");
		});
	}

	runWheelIdle(): void {
		this._currentSpeed = this._config.IDLE_SPEED;
		this._state = SpinState.IDLE;
	}

	startSpinWheel(isTurbo: boolean): void {
		const { TURBO, NORMAL } = this._config.WHEEL_MODES;
		const mode = isTurbo ? TURBO : NORMAL;
		if (this._state !== SpinState.IDLE) {
			console.warn("Current state cannot spin");
			return;
		}
		this.wheelMode = mode;
		this._timer = 0;
		this._currentSpeed = 0;
		this._state = SpinState.ACCELERATING;
	}

	stopSpinWheel(result: number, callback?): Promise<void> {
		const bonusValue = (result || result === 0) ? result : this._data.getBonusValue();
		this.wheelNode.stopAllActions();
		this.resultIndex = bonusValue;
		if (this._state == SpinState.SPINNING) {
			this.setupStopAngle();
			this._state = SpinState.DECELERATING;
		}
		return new Promise((resolve) => {
			this.resultCallback = (index) => {
				callback && callback(index);
				this.resultCallback = null;
				this._state = SpinState.IDLE;
				resolve();
			}
		});
	}

	fastStopWheel(): void {
		if (this.resultIndex == -1 || this.fastStop) {
			return;
		}

		this.fastStop = true;
		this.setupStopAngle(true);
		this._state = SpinState.DECELERATING;
		this._decelerationDuration = this.wheelMode.TIME_TO_RESULT / 5
		// tween(this as any)
		// 	.to(0.5, { _decelerationDuration: fastStopTime })
		// 	.start()
	}

	setupStopAngle(isFast = false): void {
		this.startAngle = this.normalizedAngle(this.wheelNode.angle);
		this._timer = 0;
		let targetAngleInSlice = this.calculateResultIndex(this.resultIndex);
		targetAngleInSlice -= (this.randRange(0.25, 0.75) * this.angelPerItem);
		const idealDistance = (this._config.MAX_SPEED * this.wheelMode.TIME_TO_RESULT) / 3
		const calculateFinalAngle = this.startAngle + (idealDistance * this.direction);
		const remainder = calculateFinalAngle % 360;
		this.resultAngle = (isFast ? 0 : (calculateFinalAngle - remainder)) + targetAngleInSlice;
		const validResultAngle = this.direction * (this.resultAngle - this.startAngle) > 0
		if (isFast && validResultAngle) {
			return;
		}
		if (this.direction === SpinDirection.CLOCKWISE) {
			if (this.resultAngle > this.startAngle) {
				this.resultAngle -= 360;
			}
		} else {
			if (this.resultAngle < this.startAngle) {
				this.resultAngle += 360;
			}
		}

	}

	randRange(min: number, max: number): number {
		return Math.random() * (max - min) + min;
	}

	update(dt: number): void {
		if (this._state === SpinState.WINNING || (this._state === SpinState.IDLE && this._config.IDLE_SPEED <= 0)) {
			return;
		}
		const previousAngle = this.wheelNode.angle;
		let accelProgress = 0;
		let decelProgress = 0;
		let easedProgress = 0;
		switch (this._state) {
			case SpinState.ACCELERATING:
				this._timer += dt;
				accelProgress = Math.min(this._timer / this.wheelMode.TIME_TO_MAX_SPEED, 1);
				this._currentSpeed = this._config.MAX_SPEED * accelProgress;
				this.wheelNode.angle += this.direction * this._currentSpeed * dt;
				this.wheelNode.angle = this.normalizedAngle(this.wheelNode.angle);
				if (accelProgress >= 1) {
					this._currentSpeed = this._config.MAX_SPEED;
					this._timer = 0;
					if (this.resultIndex >= 0 && !this.fastStop) {
						this.setupStopAngle();
						this._state = SpinState.DECELERATING
					} else {
						this._state = SpinState.SPINNING;
					}
				}
				break;
			case SpinState.SPINNING:
			case SpinState.IDLE:
				this.wheelNode.angle += this.direction * this._currentSpeed * dt;
				this.wheelNode.angle = this.normalizedAngle(this.wheelNode.angle);
				break;
			case SpinState.DECELERATING:
				this._timer += dt;
				decelProgress = Math.min(this._timer / this._decelerationDuration, 1);
				easedProgress = this.fastStop ? decelProgress : this.easeOutCubic(decelProgress);
				this.wheelNode.angle = cc.misc.lerp(this.startAngle, this.resultAngle, easedProgress);
				this._currentSpeed = Math.abs(this.wheelNode.angle - previousAngle) / dt;
				if (decelProgress >= 1) {
					this.wheelNode.angle = this.resultAngle;
					this.wheelNode.angle = this.normalizedAngle(this.wheelNode.angle);
					this._state = SpinState.WINNING;
					this._currentSpeed = 0;
					if (this.resultCallback) {
						this.resultCallback(this.resultIndex);
					}
					this.playAnimResult()
				}
		}
		this.triggerArrowBounce();
	}

	easeOutCubic(t: number): number {
		return 1 - Math.pow(1 - t, 3);
	}

	playAnimResult(): void {
		if (this.resultCallback) {
			this.resultCallback(this.resultIndex);
		}
	}

	calculateResultIndex(targetIndex: number): number {
		return -this._indexAngle[targetIndex];
	}

	triggerArrowBounce(): void {
		if (!this.arrowNode) {
			return;
		}
		const dotAngleInDegree = 2 * Math.atan((this._config.DOT_RADIUS / 2) / (this._config.RADIUS / 2)) * (180 / Math.PI);
		const effectiveAngle = (this.wheelNode.angle + dotAngleInDegree * this.direction) % 360;
		const currentSegment = Math.floor((Math.abs(effectiveAngle)) / this.angelPerItem);
		if (currentSegment !== this._lastPassedSegment) {
			const rightAngle = dotAngleInDegree;
			if (this.wheelNode.angle !== 0) {
				this.startBounceAngle = this.normalizedAngle(this.wheelNode.angle);
				this.stopBounceAngle = this.normalizedAngle(effectiveAngle + rightAngle * this.direction);
			}
			if (currentSegment == 0) {
				this.startBounceAngle -= 360 * this.direction;
			}
			this._lastPassedSegment = currentSegment;
		}
		if (this.canBounceBack()) {
			this.stopBounceAngle = 0;
			this.startBounceAngle = Number.MAX_SAFE_INTEGER;
			this.playArrowBounceBack(0.4);
		} else if (this.checkConditionBounceArrow()) {
			const isMinAngleBounce = this.arrowNode.angle <= this._config.MIN_BOUNCE_ANGLE;
			if (isMinAngleBounce) {
				this.tweenBounceBack && this.tweenBounceBack.stop();
				this.tweenBounceBack = null;
				const newAngle = this.calculateBounceAngle();
				if (Math.abs(newAngle) > Math.abs(this.arrowNode.angle) && Math.abs(newAngle) <= this._config.MAX_BOUNCE_ANGLE) {
					this.arrowNode.angle = newAngle;
				}
			}
		}
	}

	calculateBounceAngle(): number {
		const bounceAngle = -this.direction * this._config.BOUNCE_RATIO * Math.abs(this.wheelNode.angle - this.startBounceAngle);
		return this.normalizedAngle(bounceAngle);
	}

	playArrowBounceBack(duration): void {
		this.tweenBounceBack && this.tweenBounceBack.stop();
		this.tweenBounceBack = tween(this.arrowNode)
			.to(duration, { angle: 0 }, { easing: 'quadIn' })
			.call(() => {
				this.tweenBounceBack = null;
			})
			.start();
	}

	checkConditionBounceArrow(): boolean {
		const validStopBounceAngle = this.stopBounceAngle !== 0;
		const validStartBounceAngle = this.startBounceAngle !== Number.MAX_SAFE_INTEGER;
		return validStopBounceAngle && validStartBounceAngle;
	}

	canBounceBack(): boolean {
		const isBouncing = this.stopBounceAngle !== 0;
		const wheelAngle = this.normalizedAngle(this.wheelNode.angle);
		let hasBounceLogic = Math.abs(wheelAngle) >= Math.abs(this.stopBounceAngle)
		if (this._lastPassedSegment == 0) {
			hasBounceLogic = Math.abs(wheelAngle) < this.angelPerItem && hasBounceLogic;
		}
		return hasBounceLogic && isBouncing;
	}

	normalizedAngle(angle): number {
		return angle % 360;
	}

	resetWheel(): void {
		this._decelerationDuration = this.wheelMode.TIME_TO_RESULT;
		this._state = SpinState.IDLE;
		this._currentSpeed = 0;
		this.resultIndex = -1;
		this.resultCallback = null;
		this.fastStop = false;
	}

	protected onDestroy(): void {
		this.wheelNode.stopAllActions();
	}

}


```
