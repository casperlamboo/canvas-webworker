export default class ImageData {
  constructor(width, height, data = Uint8ClampedArray(width * height * 4)) {
    this._data = data;
    this._width = width;
    this._height = height;
  }

  get data() { return this._data; }
  get width() { return this._width; }
  get height() { return this._height; }
}
