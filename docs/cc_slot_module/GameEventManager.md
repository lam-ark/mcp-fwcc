# GameEventManager

> **Source Path**: `assets/cc-common/cc-slot-module/Core/GameEventManager.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`GameEventManager`**

## Key Methods
- `on(): void`
- `off(): void`
- `emit(): Promise<void>`
- `bind(): listener`
- `targetOff(): void`
- `setLogger(): void`
- `destroy(): void`

## Source Implementation
```typescript
const { error, log, warn } = cc;

type EventEntry = {
	listener: Function;
	context: any;
};

export class GameEventManager {
	private events: Record<string, EventEntry[]> = {};
	private _logger: any = { log, warn, error };
	private _logTag: string = '[EventManager]';

	on(event: string, listener: Function, context: any = null): void {
		if (!this.events[event]) {
			this.events[event] = [];
		}
		this.events[event].push({ listener, context });
	}

	off(event: string, listener: Function, context: any = null): void {
		if (!this.events[event]) {
			return;
		}
		this.events[event] = this.events[event].filter(entry => (entry.listener !== listener) || (entry.context !== context));
	}

	async emit(event: string, ...args: any[]): Promise<void> {
		const listeners = this.events[event];
		if (!listeners || listeners.length === 0) {
			this._logger && this._logger.warn(this._logTag, 'No listeners for', event);
			return Promise.resolve();
		}

		const executions = listeners.map(({ listener, context }) => {
			const boundFn = context ? listener.bind(context) : listener;
			const ctxName = context && context.constructor && context.constructor.name || 'UnknownContext';
			this._logger && this._logger.log(this._logTag, 'Trigger', event, '→', ctxName);

			try {
				const result = boundFn(...args);
				return result instanceof Promise ? result : Promise.resolve();
			} catch (err) {
				error(err);
				this._logger && this._logger.error(this._logTag, 'Error in', event, 'listener', err);
				return Promise.resolve();
			}
		});

		await Promise.all(executions);
	}

	targetOff(context: any): void {
		for (const event in this.events) {
			this.events[event] = this.events[event].filter(entry => entry.context !== context);
		}
	}

	setLogger(logger: any, logTag: string): void {
		if (logger) {
			this._logger = logger;
			this._logTag = logTag;
			this._logger.addFilter(logTag);
		}
	}
	destroy(): void {
		this.events = {};
	}
}

```
