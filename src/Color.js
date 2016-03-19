export default class Color {
  constructor(str) {
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;

    if (str) this.str = str;
    else this._str = '';
  }

  getPixel() {
    return this;
  }

  set(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;

    return this;
  }

  copy(r, g, b, a) {
    return { r, g, b, a };
  }

  sourceOver(bR, bG, bB, bA) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_srcover

    const sR = this.r;
    const sG = this.g;
    const sB = this.b;
    const sA = this.a;

    const a = Math.min(sA + bA * (1 - sA), 1);
    const r = (sR * sA + bA * bR * (1 - sA)) / a;
    const g = (sG * sA + bA * bG * (1 - sA)) / a;
    const b = (sB * sA + bA * bB * (1 - sA)) / a;

    return { r, g, b, a };
  }

  destinationOver(bR, bG, bB, bA) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_dstover

    const sR = this.r;
    const sG = this.g;
    const sB = this.b;
    const sA = this.a;

    const a = Math.min(sA * (1 - bA) + a, 1);
    const r = (sA * sR * (1 - bA) + bA * bR) / a;
    const g = (sA * sG * (1 - bA) + bA * bG) / a;
    const b = (sA * sB * (1 - bA) + bA * bB) / a;

    return { r, g, b, a };
  }

  sourceIn(bR, bG, bB, bA) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_srcin

    const sR = this.r;
    const sG = this.g;
    const sB = this.b;
    const sA = this.a;

    const a = Math.min(sA * bA, 1);
    const r = (sR * bA * sA) / a;
    const g = (sG * bA * sA) / a;
    const b = (sB * bA * sA) / a;

    return { r, g, b, a };
  }

  destinationIn(bR, bG, bB, bA) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_dstin

    const sR = this.r;
    const sG = this.g;
    const sB = this.b;
    const sA = this.a;

    const a = Math.min(sA * bA, 1);
    const r = (bR * bA * sA) / a;
    const g = (bG * bA * sA) / a;
    const b = (bB * bA * sA) / a;

    return { r, g, b, a };
  }

  sourceOut(bR, bG, bB, bA) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_srcout

    const sR = this.r;
    const sG = this.g;
    const sB = this.b;
    const sA = this.a;

    const a = Math.min(sA * (1 - bA), 1);
    const r = (sA * sR * (1 - bA)) / a;
    const g = (sA * sG * (1 - bA)) / a;
    const b = (sA * sB * (1 - bA)) / a;

    return { r, g, b, a };
  }

  destinationOut(bR, bG, bB, bA) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_dstout

    const sR = this.r;
    const sG = this.g;
    const sB = this.b;
    const sA = this.a;

    const a = Math.min(bA * (1 - sA), 1);
    const r = (bA * bR * (1 - sA)) / a;
    const g = (bA * bG * (1 - sA)) / a;
    const b = (bA * bB * (1 - sA)) / a;

    return { r, g, b, a };
  }

  sourceAtop(bR, bG, bB, bA) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_srcatop

    const sR = this.r;
    const sG = this.g;
    const sB = this.b;
    const sA = this.a;

    const a = Math.min(bA * sA + bA * (1 - sA), 1);
    const r = (sA * sR * bA + bA * bR * (1 - sA)) / a;
    const g = (sA * sG * bA + bA * bG * (1 - sA)) / a;
    const b = (sA * sB * bA + bA * bB * (1 - sA)) / a;

    return { r, g, b, a };
  }

  destinationAtop(bR, bG, bB, bA) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_dstatop

    const sR = this.r;
    const sG = this.g;
    const sB = this.b;
    const sA = this.a;

    const a = Math.min(bA * sA + sA * (1 - bA), 1);
    const r = (bA * bR * sA + sA * sR * (1 - bA)) / a;
    const g = (bA * bG * sA + sA * sG * (1 - bA)) / a;
    const b = (bA * bB * sA + sA * sB * (1 - bA)) / a;

    return { r, g, b, a };
  }

  xOr(bR, bG, bB, bA) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_xor

    const sR = this.r;
    const sG = this.g;
    const sB = this.b;
    const sA = this.a;

    const a = Math.min(sA * (1 - bA) + bA * (1 - sA), 1);
    const r = (sA * sR * (1 - bA) + bA * bR * (1 - sA)) / a;
    const g = (sA * sG * (1 - bA) + bA * bG * (1 - sA)) / a;
    const b = (sA * sB * (1 - bA) + bA * bB * (1 - sA)) / a;

    return { r, g, b, a };
  }

  lighter(bR, bG, bB, bA) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_plus

    const sR = this.r;
    const sG = this.g;
    const sB = this.b;
    const sA = this.a;

    const a = Math.min(sA + bA, 1);
    const r = (sA * sR + bA * bR) / a;
    const g = (sA * sG + bA * bG) / a;
    const b = (sA * sB + bA * bB) / a;

    return { r, g, b, a };
  }

  set str(str) {
    this._str = str;

    if (str.startsWith('#')) {
      this.r = parseInt(str.slice(1, 3), 16);
      this.g = parseInt(str.slice(3, 5), 16);
      this.b = parseInt(str.slice(5, 7), 16);
      this.a = 1;
    } else if (str.startsWith('rgba')) {
      const start = str.indexOf('(') + 1;
      const end = str.indexOf(')');
      const [r, g, b, a] = str.slice(start, end).split(',').map(parseFloat);

      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
    } else if (str.startsWith('rgb')) {
      const start = str.indexOf('(') + 1;
      const end = str.indexOf(')');
      const [r, g, b] = str.slice(start, end).split(',').map(parseFloat);

      this.r = r;
      this.g = g;
      this.b = b;
      this.a = 1;
    } else {

    }
  }

  get str() {
    return this._str
  }
}
