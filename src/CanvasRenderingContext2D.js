import ImageData from './ImageData.js';
import Error from './Error.js';
import Color from './Color.js';
import CanvasPattern from './CanvasPattern';
import ClipperShape from 'clipper-js';

const DRAW_COLOR = new Color();
const CLEAR_COLOR = new Color();
const ERROR_MANAGER = new Error('CanvasRenderingContext2D');
const END_TYPE_CONVERT = { butt: 'etOpenButt', round: 'etOpenRound', square: 'etOpenSquare' };
const JOIN_TYPE_CONVERT = { bevel: 'jtSquare', round: 'jtRound', miter: 'jtMiter' };
const LINE_CAP_ENUM = ['butt', 'round', 'square'];
const LINE_JOIN_ENUM = ['bevel', 'round', 'miter'];
const REPEAT_ENUM = ['repeat', 'no-repeat', 'repeat-x', 'repeat-y'];
const GLOBAL_COMPOSITE_OPERATION_ENUM = ['source-over', 'source-in', 'source-out', 'source-atop', 'destination-over', 'destination-in', 'destination-out', 'destination-atop', 'lighter', 'copy', 'xor']; //, 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];

export default class CanvasRenderingContext2D {
  _fillStyle = new Color('#000000');
  // font = '10px sans-serif';
  _globalAlpha = 1;
  _globalCompositeOperation = 'source-over';
  // imageSmoothingEnabled = true;
  _lineCap = 'butt';
  // lineDashOffset = 0;
  _lineJoin = 'miter';
  _lineWidth = 1;
  _miterLimit = 10;
  // shadowBlur = 0;
  // _shadowColor = new Color('rgba(0, 0, 0, 0)');
  // shadowOffsetX = 0;
  // shadowOffsetY = 0;
  _strokeStyle = new Color('#000000');
  // textAlign = 'start';
  // textBaseline = 'alphabetic';
  _paths = [{ closed: false, path: [] }];
  _transform = [
    1, 0,
    0, 1,
    0, 0
  ];
  _transformStack = [];

  constructor(canvas) {
    this.canvas = canvas;
  }

  beginPath() {
    this._paths.splice(0, this._paths.length, [{ closed: false, path: [] }]);
  }

  lineTo(x, y) {
    ERROR_MANAGER.argumetsCheck('lineTo', 2, arguments.length);

    this._paths[0].path.push({ x, y });
  }

  moveTo(x, y) {
    ERROR_MANAGER.argumetsCheck('moveTo', 2, arguments.length);

    this._paths.unshift({ closed: false, path: [{ x, y }] });
  }

  closePath() {
    this._paths[0].closed = true;
    this._paths.unshift({ closed: false, path: [] });
  }

  rect(minX, minY, width, height) {
    const maxX = minX + width;
    const maxY = minY + height;

    this.moveTo(minX, minY);
    this.lineTo(maxX, minY);
    this.lineTo(maxX, maxY);
    this.lineTo(minX, maxY);
    this.closePath();
  }

  stroke() {
    const inverseTransform = this._getInverseTransfrom();
    const lineWidth = this.lineWidth / 2;
    const jointType = JOIN_TYPE_CONVERT[this.lineJoin];
    const miterLimit = this.miterLimit;

    const paths = this._paths
      .filter(({ path }) => path.length > 0);

    const shape = new ClipperShape();
    for (const { path, closed } of paths) {
      const endType = closed ? 'etClosedLine' : END_TYPE_CONVERT[this.lineCap];

      const pathShape = new ClipperShape([path], false, true)
        .offset(lineWidth, { jointType, endType, miterLimit });

      shape.join(pathShape);
    }
    shape.removeOverlap();

    for (let destinationY = 0; destinationY < this.canvas.height; destinationY ++) {
      for (let destinationX = 0; destinationX < this.canvas.width; destinationX ++) {

        const { sourceX, sourceY } = this._destinationToSource(destinationX, destinationY, inverseTransform);
        const pos = { X: sourceX, Y: sourceY };

        if (shape.pointInShape(pos)) {
          this._drawPixel(destinationX, destinationY, this._strokeStyle.getPixel(destinationX, destinationY));
        } else {
          this._drawPixel(destinationX, destinationY, CLEAR_COLOR);
        }
      }
    }
  }

  fill() {
    const inverseTransform = this._getInverseTransfrom();

    const paths = this._paths
      .map(({ path }) => path)
      .filter(path => path.length > 0);
    const shape = new ClipperShape(paths, true, true);

    for (let destinationY = 0; destinationY < this.canvas.height; destinationY ++) {
      for (let destinationX = 0; destinationX < this.canvas.width; destinationX ++) {

        const { sourceX, sourceY } = this._destinationToSource(destinationX, destinationY, inverseTransform);
        const pos = { X: sourceX, Y: sourceY };

        if (shape.pointInShape(pos)) {
          this._drawPixel(destinationX, destinationY, this._fillStyle.getPixel(destinationX, destinationY));
        } else {
          this._drawPixel(destinationX, destinationY, CLEAR_COLOR);
        }
      }
    }
  }

  fillRect(minX, minY, width, height) {
    const maxX = minX + width;
    const maxY = minY + height;
    const inverseTransform = this._getInverseTransfrom();

    for (let destinationY = 0; destinationY < this.canvas.height; destinationY ++) {
      for (let destinationX = 0; destinationX < this.canvas.width; destinationX ++) {

        const { sourceX, sourceY } = this._destinationToSource(destinationX, destinationY, inverseTransform);

        if (sourceX >= minX && sourceY >= minY && sourceX < maxX && sourceY < maxY) {
          this._drawPixel(destinationX, destinationY, this._fillStyle.getPixel(destinationX, destinationY));
        } else {
          this._drawPixel(destinationX, destinationY, CLEAR_COLOR);
        }
      }
    }
  }

  strokeRect(minX, minY, width, height) {
    // TODO
  }

  translate(x, y) {
    ERROR_MANAGER.argumetsCheck('translate', 2, arguments.length);

    this._transform[4] += x;
    this._transform[5] += y;
  }

  transform(...b) {
    ERROR_MANAGER.argumetsCheck('transform', 6, arguments.length);

    const a = this._transform;

    this._transform.splice(0, 6,
      a[0]*b[0] + a[2]*b[1], a[1]*b[0] + a[3]*b[1],
      a[0]*b[2] + a[2]*b[3], a[1]*b[2] + a[3]*b[3],
      a[4]*b[0] + a[5]*b[1] + b[4], a[4]*b[2] + a[5]*b[3] + b[5]
    );
  }

  rotate(angle) {
    ERROR_MANAGER.argumetsCheck('rotate', 1, arguments.length);

    const sin = Math.sin(angle);
		const cos = Math.cos(angle);

    this.transform(
      cos, -sin,
      sin, cos,
      0, 0
    );
  }

  scale(scaleX, scaleY) {
    ERROR_MANAGER.argumetsCheck('scale', 2, arguments.length);

    this._transform[0] *= scaleX;
    this._transform[3] *= scaleY;
  }

  save() {
    this._transformStack.push([...this._transform]);
  }

  restore() {
    const newTransform = this._transformStack.pop();

    if (newTransform) {
      this._transform.splice(0, 6, ...newTransform);
    } else {
      this._transform.splice(0, 6, 1, 0, 0, 1, 0, 0);
    }
  }

  drawImage() {
    ERROR_MANAGER.argumetsCheck('drawImage', 3, arguments.length);

    if (arguments.length >= 9) {
      var [
        image,
        imageSourceX, imageSourceY,
        imageSourceWidth, imageSourceHeight,
        imageDestinationX, imageDestinationY,
        imageDestinationWidth, imageDestinationHeight
      ] = arguments;
    } else if (arguments.length >= 5) {
      var [
        image,
        imageDestinationX, imageDestinationY,
        imageDestinationWidth, imageDestinationHeight,
      ] = arguments;

      var imageSourceX = 0;
      var imageSourceY = 0;
      var imageSourceWidth = image.width;
      var imageSourceHeight = image.height;
    } else if (arguments.length >= 3) {
      var [
        image,
        imageDestinationX, imageDestinationY,
      ] = arguments;

      var imageDestinationWidth = image.width;
      var imageDestinationHeight = image.height;
      var imageSourceX = 0;
      var imageSourceY = 0;
      var imageSourceWidth = image.width;
      var imageSourceHeight = image.height;
    }

    const inverseTransform = this._getInverseTransfrom();
    const ratioWidth = imageSourceWidth / imageDestinationWidth;
    const ratioHeight = imageSourceHeight / imageDestinationHeight;

    const minX = imageSourceX;
    const minY = imageSourceY;
    const maxX = imageSourceWidth + imageSourceX;
    const maxY = imageSourceHeight + imageSourceY;

    for (let destinationY = 0; destinationY < this.canvas.height; destinationY ++) {
      for (let destinationX = 0; destinationX < this.canvas.width; destinationX ++) {

        const { sourceX, sourceY } = this._destinationToSource(destinationX, destinationY, inverseTransform);

        const x = Math.round((sourceX - imageDestinationX) * ratioWidth + imageSourceX);
        const y = Math.round((sourceY - imageDestinationY) * ratioHeight + imageSourceY);

        if (x >= minX && y >= minY && x < maxX && y < maxY) {
          const index = y * image.width + x;

          const r = image.imageData.r[index];
          const g = image.imageData.g[index];
          const b = image.imageData.b[index];
          const a = image.imageData.a[index];

          this._drawPixel(destinationX, destinationY, { r, g, b, a });
        } else {
          this._drawPixel(destinationX, destinationY, CLEAR_COLOR);
        }
      }
    }
  }

  clearRect(minX, minY, width, height) {
    ERROR_MANAGER.argumetsCheck('clearRect', 4, arguments.length);

    const maxX = minX + width;
    const maxY = minY + height;
    const imageData = this.canvas.imageData;

    for (let y = minY; y < maxY; y ++) {
      for (let x = minX; x < maxX; x ++) {
        const index = y * this.canvas.width + x;

        imageData.r[index] = 0;
        imageData.g[index] = 0;
        imageData.b[index] = 0;
        imageData.a[index] = 0;
      }
    }
  }

  getImageData(minX, minY, width, height) {
    ERROR_MANAGER.argumetsCheck('getImageData', 4, arguments.length);

    const maxX = minX + width;
    const maxY = minY + height;

    const imageData = this.canvas.imageData;

    const data = new Uint8ClampedArray(width * height * 4);
    let dataIndex = 0;

    for (let y = minY; y < maxY; y ++) {
      for (let x = minX; x < maxX; x ++) {
        const index = y * this.canvas.width + x;

        data[dataIndex ++] = imageData.r[index];
        data[dataIndex ++] = imageData.g[index];
        data[dataIndex ++] = imageData.b[index];
        data[dataIndex ++] = Math.round(imageData.a[index] * 255);
      }
    }

    return new ImageData(width, height, data);
  }

  putImageData(imageData, x, y) {
    const { width, height, data } = imageData;

    for (let index = 0, dataIndex = 0; index < data.length; index ++) {
      const imageDataIndex = index + x + y * this.canvas.width;

      this.canvas.imageData.r[imageDataIndex] = data[dataIndex ++];
      this.canvas.imageData.g[imageDataIndex] = data[dataIndex ++];
      this.canvas.imageData.b[imageDataIndex] = data[dataIndex ++];
      this.canvas.imageData.a[imageDataIndex] = data[dataIndex ++] / 255;
    }
  }

  createImageData(width, height) {
    ERROR_MANAGER.argumetsCheck('createImageData', 2, arguments.length);

    return new ImageData(width, height);
  }

  createPattern(image, repeat) {
    if (REPEAT_ENUM.indexOf(repeat) === -1) {
      const enumStr = REPEAT_ENUM.map((str => `'${str}'`)).reduce((a, b, index, array) => {
        if (index === array.length - 1) {
          return `${a} or ${b}`;
        } else {
          return `${a}, ${b}`;
        }
      });

      ERROR_MANAGER.syntaxError('createPattern', `The provided type ('${repeat}') is not one of ${enumStr}`);
    }

    return new CanvasPattern(image, repeat);
  }

  _drawPixel(x, y, color) {
    const sourceColor = DRAW_COLOR.set(color.r, color.g, color.b, color.a);
    sourceColor.a *= this.globalAlpha;

    const index = y * this.canvas.width + x;

    const r = this.canvas.imageData.r[index];
    const g = this.canvas.imageData.g[index];
    const b = this.canvas.imageData.b[index];
    const a = this.canvas.imageData.a[index];

    let resultColor;
    switch (this.globalCompositeOperation) {
      case 'copy':
        resultColor = sourceColor.copy(r, g, b, a);
        break;
      case 'source-over':
        resultColor = sourceColor.sourceOver(r, g, b, a);
        break;
      case 'destination-over':
        resultColor = sourceColor.destinationOver(r, g, b, a);
        break;
      case 'source-in':
        resultColor = sourceColor.sourceIn(r, g, b, a);
        break;
      case 'destination-in':
        resultColor = sourceColor.destinationIn(r, g, b, a);
        break;
      case 'source-out':
        resultColor = sourceColor.sourceOut(r, g, b, a);
        break
      case 'destination-out':
        resultColor = sourceColor.destinationOut(r, g, b, a);
        break
      case 'source-atop':
        resultColor = sourceColor.sourceAtop(r, g, b, a);
        break
      case 'destination-atop':
        resultColor = sourceColor.destinationAtop(r, g, b, a);
        break
      case 'xor':
        resultColor = sourceColor.xOr(r, g, b, a);
        break;
      case 'lighter':
        resultColor = sourceColor.lighter(r, g, b, a);
        break;
    }

    this.canvas.imageData.r[index] = resultColor.r;
    this.canvas.imageData.g[index] = resultColor.g;
    this.canvas.imageData.b[index] = resultColor.b;
    this.canvas.imageData.a[index] = resultColor.a;
  }

  _getInverseTransfrom() {
    const transform = this._transform;

    const determinant = 1 / (transform[0] * transform[3] - transform[1] * transform[2]);

    return [
      determinant * transform[3], -determinant * transform[1],
      -determinant * transform[2], determinant * transform[0],
      determinant * (transform[1] * transform[5] - transform[4] * transform[3]), -determinant * (transform[0] * transform[5] - transform[4] * transform[2])
    ];
  }

  _destinationToSource(destinationX, destinationY, inverseTransform) {
    const sourceX = inverseTransform[0] * destinationX + inverseTransform[2] * destinationY + inverseTransform[4];
    const sourceY = inverseTransform[1] * destinationX + inverseTransform[3] * destinationY + inverseTransform[5];

    return { sourceX, sourceY };
  }

  set fillStyle(fillStyle) {
    if (typeof fillStyle === 'string') {
      fillStyle = new Color(fillStyle);
    }

    this._fillStyle = fillStyle;
  }
  get fillStyle() {
    if (this._fillStyle instanceof Color) {
      return this._fillStyle.str;
    } else {
      return this._fillStyle;
    }
  }

  set strokeStyle(strokeStyle) {
    if (typeof strokeStyle === 'string') {
      strokeStyle = new Color(strokeStyle);
    }

    this._strokeStyle = strokeStyle;
  }
  get strokeStyle() {
    if (this._strokeStyle instanceof Color) {
      return this._strokeStyle.str;
    } else {
      return this._strokeStyle;
    }
  }

  set lineJoin(str) { this._lineJoin = LINE_JOIN_ENUM.indexOf(str) !== -1 ? str : this._lineJoin; }
  get lineJoin() { return this._lineJoin; }

  set lineCap(str) { this._lineCap = LINE_CAP_ENUM.indexOf(str) !== -1 ? str : this._lineCap; }
  get lineCap() { return this._lineCap; }

  set globalAlpha(alpha) { this._globalAlpha = (alpha >= 0 && alpha <= 1) ? alpha : this._globalAlpha; }
  get globalAlpha() { return this._globalAlpha; }

  set globalCompositeOperation(operation) { this._globalCompositeOperation = GLOBAL_COMPOSITE_OPERATION_ENUM.indexOf(operation) !== -1 ? operation : this._globalCompositeOperation; }
  get globalCompositeOperation () { return this._globalCompositeOperation; }

  set lineWidth(width) { this._lineWidth = width > 0 ? width : this._lineWidth; }
  get lineWidth () { return this._lineWidth; }

  set miterLimit(limit) { this._miterLimit = limit > 0 ? limit : this._miterLimit; }
  get miterLimit () { return this._miterLimit; }

}
