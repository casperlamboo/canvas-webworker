import EventDispatcher from 'EventDispatcher';

export default class WorkerShim extends EventDispatcher {
	constructor(path) {
		super();

		this._worker = new Worker('./WorkerShim.worker.js');
		this._worker.postMessage(path);
		this._loaded = false;
		this._postMessageStack = [];

		this._worker.addEventListener('message', (event) => {

			if (event.data === 'WEBWORKER_FINISH_LOADING') {
				this._loaded = true;

				for (const { message, transferList } of this._postMessageStack) {
					this._worker.postMessage(message, transferList);
				}
			} else {
				this.dispatchEvent(event);
			}
		});
	}

	postMessage(message, transferList) {
		if (this._loaded) {
			this._worker.postMessage(message, transferList);
		} else {
			this._postMessageStack.push({ message, transferList });
		}
	}

	terminate() {
		this._worker.terminate();
	}
}
