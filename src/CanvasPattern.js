import Color from './Color.js';
const CLEAR_COLOR = new Color();

export default class CanvasPattern {
  constructor(image, repeat) {
    this._image = image;
    this._repeat = repeat;
  }

  getPixel(x, y) {
    x = Math.round((this._repeat === 'repeat' || this._repeat === 'repeat-x') ? x % this._image.width : x);
    y = Math.round((this._repeat === 'repeat' || this._repeat === 'repeat-y') ? y % this._image.height : y);

    if (x >= 0 && y >= 0 && x < this._image.width && y < this._image.height) {
      const index = y * this._image.width + x;

      return this._image._imageData[index];
    } else {
      return CLEAR_COLOR;
    }
  }
}
