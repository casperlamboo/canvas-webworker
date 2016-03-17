let context;

if (document !== undefined) {
  const canvas = document.createElement('canvas');
  context = canvas.getContext('2d');
}

export default class ImageData {
  constructor(width, height, data = Uint8ClampedArray(width * height * 4)) {
    this._data = data;
    this._width = width;
    this._height = height;
  }

  toReal() {
    if (context !== undefined) {
      const imageData = context.createImageData(this.width, this.height);
      const data = this.data;

      for (let i = 0; i < data.length; i ++) {
        imageData.data[i] = data[i];
      }

      return imageData;
    }

    return null;
  }

  get data() { return this._data; }
  get width() { return this._width; }
  get height() { return this._height; }
}
