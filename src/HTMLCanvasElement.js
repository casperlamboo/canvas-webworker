import CanvasRenderingContext2D from './CanvasRenderingContext2D.js';
import CanvasImageSource from './CanvasImageSource.js';

export default class HTMLCanvasElement extends CanvasImageSource {
  constructor(width = 300, height = 150) {
    super(width, height);
  }

  getContext(identifier) {
    switch (identifier) {
      case '2d':
        return new CanvasRenderingContext2D(this);

      default:
        return null;
    }
  }
}
