import Color from './Color.js';

export default class CanvasImageSource {
  constructor(width = 0, height = 0) {
    this._width = width;
    this._height = height;

    this._initImageData();
  }

  _initImageData() {
    const length = this._width * this._height;

    this.imageData = {
      r: new Uint8ClampedArray(length),
      g: new Uint8ClampedArray(length),
      b: new Uint8ClampedArray(length),
      a: new Float32Array(length)
    };
  }

  set width(width) {
    this._width = width;
    this._initImageData();
  }

  set height(height) {
    this._height = height;
    this._initImageData();
  }

  get width() { return this._width; }
  get height() { return this._height; }
}
