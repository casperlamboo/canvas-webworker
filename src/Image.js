import getPixels from 'get-pixels';
import CanvasImageSource from './CanvasImageSource.js';

export default class Image extends CanvasImageSource {
  constructor() {
    super();

    this._src = '';
  }

  set src(src) {
    this._src = src;

    getPixels(src, (error, pixels) => {
      if (error) {
        return;
      }

      const [width, height] = pixels.shape;

      this.width = width;
      this.height = height;

      for (let pixelIndex = 0, dataIndex = 0; dataIndex < this._imageData.length; dataIndex ++) {
        const r = pixels.data[pixelIndex ++];
        const g = pixels.data[pixelIndex ++];
        const b = pixels.data[pixelIndex ++];
        const a = pixels.data[pixelIndex ++] / 255;

        this._imageData[dataIndex].set(r, g, b, a);
      }

      if (this.onload !== undefined) {
        this.onload();
      }
    });

  }
  get src() { return this._src; }
}
