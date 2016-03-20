export default class ImageData {
  constructor(width, height, data = new Uint8ClampedArray(width * height * 4)) {
    this.data = data;
    this.width = width;
    this.height = height;
  }
}
