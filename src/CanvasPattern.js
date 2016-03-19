import Color from './Color.js';
const COLOR = new Color();

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

      const r = this._image.imageData.r[index];
      const g = this._image.imageData.g[index];
      const b = this._image.imageData.b[index];
      const a = this._image.imageData.a[index];

      return COLOR.set(r, g, b, a);
    } else {
      return COLOR.set(0, 0, 0, 0);
    }
  }
}
