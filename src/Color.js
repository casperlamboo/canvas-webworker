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

  copy(color) {
    this.r = color.r;
    this.g = color.g;
    this.b = color.b;
    this.a = color.a;

    return this;
  }

  set(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;

    return this;
  }

  sourceOver(color) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_srcover

    const a = Math.min(color.a + this.a * (1 - color.a), 1);
    const r = Math.min((color.r * color.a + this.a * this.r * (1 - color.a)) / a, 255) || 0;
    const g = Math.min((color.g * color.a + this.a * this.g * (1 - color.a)) / a, 255) || 0;
    const b = Math.min((color.b * color.a + this.a * this.b * (1 - color.a)) / a, 255) || 0;

    this.set(r, g, b, a);
  }

  destinationOver(color) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_dstover

    const a = Math.min(color.a * (1 - this.a) + this.a, 1);
    const r = Math.min((color.a * color.r * (1 - this.a) + this.a * this.r) / a, 255) || 0;
    const g = Math.min((color.a * color.g * (1 - this.a) + this.a * this.g) / a, 255) || 0;
    const b = Math.min((color.a * color.b * (1 - this.a) + this.a * this.b) / a, 255) || 0;

    this.set(r, g, b, a);
  }

  sourceIn(color) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_srcin

    const a = Math.min(color.a * this.a, 1);
    const r = Math.min((color.r * this.a * color.a) / a, 255) || 0;
    const g = Math.min((color.g * this.a * color.a) / a, 255) || 0;
    const b = Math.min((color.b * this.a * color.a) / a, 255) || 0;

    this.set(r, g, b, a);
  }

  destinationIn(color) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_dstin

    const a = Math.min(color.a * this.a, 1);
    const r = Math.min((this.r * this.a * color.a) / a, 255) || 0;
    const g = Math.min((this.g * this.a * color.a) / a, 255) || 0;
    const b = Math.min((this.b * this.a * color.a) / a, 255) || 0;

    this.set(r, g, b, a);
  }

  sourceOut(color) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_srcout

    const a = Math.min(color.a * (1 - this.a), 1);
    const r = Math.min((color.a * color.r * (1 - this.a)) / a, 255) || 0;
    const g = Math.min((color.a * color.g * (1 - this.a)) / a, 255) || 0;
    const b = Math.min((color.a * color.b * (1 - this.a)) / a, 255) || 0;

    this.set(r, g, b, a);
  }

  destinationOut(color) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_dstout

    const a = Math.min(this.a * (1 - color.a), 1);
    const r = Math.min((this.a * this.r * (1 - color.a)) / a, 255) || 0;
    const g = Math.min((this.a * this.g * (1 - color.a)) / a, 255) || 0;
    const b = Math.min((this.a * this.b * (1 - color.a)) / a, 255) || 0;

    this.set(r, g, b, a);
  }

  sourceAtop(color) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_srcatop

    const a = Math.min(this.a * color.a + this.a * (1 - color.a), 1);
    const r = Math.min((color.a * color.r * this.a + this.a * this.r * (1 - color.a)) / a, 255) || 0;
    const g = Math.min((color.a * color.g * this.a + this.a * this.g * (1 - color.a)) / a, 255) || 0;
    const b = Math.min((color.a * color.b * this.a + this.a * this.b * (1 - color.a)) / a, 255) || 0;

    this.set(r, g, b, a);
  }

  destinationAtop(color) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_dstatop

    const a = Math.min(this.a * color.a + color.a * (1 - this.a), 1);
    const r = Math.min((this.a * this.r * color.a + color.a * color.r * (1 - this.a)) / a, 255) || 0;
    const g = Math.min((this.a * this.g * color.a + color.a * color.g * (1 - this.a)) / a, 255) || 0;
    const b = Math.min((this.a * this.b * color.a + color.a * color.b * (1 - this.a)) / a, 255) || 0;

    this.set(r, g, b, a);
  }

  xOr(color) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_xor

    const a = Math.min(color.a * (1 - this.a) + this.a * (1 - color.a), 1);
    const r = Math.min((color.a * color.r * (1 - this.a) + this.a * this.r * (1 - color.a)) / a, 255) || 0;
    const g = Math.min((color.a * color.g * (1 - this.a) + this.a * this.g * (1 - color.a)) / a, 255) || 0;
    const b = Math.min((color.a * color.b * (1 - this.a) + this.a * this.b * (1 - color.a)) / a, 255) || 0;

    this.set(r, g, b, a);
  }

  lighter(color) {
    // source: https://www.w3.org/TR/2013/WD-compositing-1-20130625/#porterduffcompositingoperators_plus

    const a = Math.min(color.a + this.a, 1);
    const r = Math.min((color.a * color.r + this.a * this.r) / a, 255) || 0;
    const g = Math.min((color.a * color.g + this.a * this.g) / a, 255) || 0;
    const b = Math.min((color.a * color.b + this.a * this.b) / a, 255) || 0;

    this.set(r, g, b, a);
  }

  toArray() {
    return [Math.round(this.r), Math.round(this.g), Math.round(this.b), Math.round(this.a * 255)];
  }

  clear() {
    this.r = this.g = this.b = this.a = 0;
    this._str = '#000000';
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
