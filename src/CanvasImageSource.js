import Color from './Color.js';

export default class CanvasImageSource {
  constructor(width = 0, height = 0) {
    this._width = width;
    this._height = height;

    this._initImageData();
  }

  _initImageData() {
    this._imageData = Array.from(Array(this._width * this._height)).map(() => new Color());
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
  get data() { return this._imageData; }
}
