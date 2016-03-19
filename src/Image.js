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

      const length = width * height;

      for (let pixelIndex = 0, dataIndex = 0; dataIndex < length; dataIndex ++) {
        this.imageData.r[dataIndex] = pixels.data[pixelIndex ++];
        this.imageData.g[dataIndex] = pixels.data[pixelIndex ++];
        this.imageData.b[dataIndex] = pixels.data[pixelIndex ++];
        this.imageData.a[dataIndex] = pixels.data[pixelIndex ++] / 255;
      }

      if (this.onload !== undefined) {
        this.onload();
      }
    });

  }
  get src() { return this._src; }
}
