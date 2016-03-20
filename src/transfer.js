import HTMLCanvasElementWorker from './HTMLCanvasElement.js';
import ImageDataWorker from './ImageData.js';
import ImageWorker from './Image.js';

let canvasDOM, contextDOM;
if (self.document !== undefined) {
  canvasDOM = document.createElement('canvas');
  contextDOM = canvasDOM.getContext('2d');
}

const canvasWorker = new HTMLCanvasElementWorker();
const contextWorker = canvasWorker.getContext('2d');

export function decode({ type, imageData }) {
  if (self.document !== undefined) {
    switch (type) {
      case 'canvas': {
        const canvas = document.createElement('canvas');
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        const context = canvas.getContext('2d');

        const realImageData = imageDataToRealImageData(imageData);

        context.putImageData(realImageData, 0, 0);

        return canvas;
      }
      case 'image': {
        canvasDOM.width = imageData.width;
        canvasDOM.height = imageData.height;

        const realImageData = imageDataToRealImageData(imageData);

        contextDOM.putImageData(realImageData, 0, 0);

        const image = new Image();
        image.src = canvasDOM.toDataURL();

        return image;
      }
      case 'imageData': {
        return imageDataToRealImageData(imageData);
      }
    }
  } else {
    switch (type) {
      case 'canvas': {
        const canvas = new HTMLCanvasElementWorker(imageData.width, imageData.height);

        const length = imageData.width * imageData.height;

        for (let imageDataIndex = 0, index = 0; index < length; index ++) {
          canvas.imageData.r[index] = imageData.data[imageDataIndex ++];
          canvas.imageData.g[index] = imageData.data[imageDataIndex ++];
          canvas.imageData.b[index] = imageData.data[imageDataIndex ++];
          canvas.imageData.a[index] = imageData.data[imageDataIndex ++] / 255;
        }

        return canvas;
      }
      case 'image': {
        const image = new ImageWorker();
        image.width = imageData.width;
        image.height = imageData.height;

        const length = imageData.width * imageData.height;

        for (let imageDataIndex = 0, index = 0; index < length; index ++) {
          image.imageData.r[index] = imageData.data[imageDataIndex ++];
          image.imageData.g[index] = imageData.data[imageDataIndex ++];
          image.imageData.b[index] = imageData.data[imageDataIndex ++];
          image.imageData.a[index] = imageData.data[imageDataIndex ++] / 255;
        }

        return image;
      }
      case 'imageData': {
        return new ImageWorker(imageData.width, imageData.height, imageData.data);
      }
    }
  }
};

export function encode(element) {
  let type, imageData;

  if (element instanceof HTMLCanvasElementWorker) {

    const context = element.getContext('2d');

    const _imageData = context.getImageData(0, 0, element.width, element.height);

    imageData = { data: _imageData._data, height: _imageData._height, width: _imageData._height };
    type = 'canvas';

  } else if (element instanceof ImageDataWorker) {

    imageData = { data: element._data, height: element._height, width: element._height };
    type = 'imageData';

  } else if (element instanceof ImageWorker) {

    canvasWorker.width = element.width;
    canvasWorker.height = element.height;

    contextWorker.drawImage(element, 0, 0);

    const _imageData = contextWorker.getImageData(0, 0, element.width, element.height);

    imageData = { data: _imageData._data, height: _imageData._height, width: _imageData._height };
    type = 'image';

  } else if (element instanceof HTMLCanvasElement) {

    canvasDOM.width = element.width;
    canvasDOM.height = element.height;

    contextDOM.drawImage(element, 0, 0);

    imageData = contextDOM.getImageData(0, 0, element.width, element.height);
    type = 'canvas';

  } else if (element instanceof ImageData) {

    imageData = element;
    type = 'imageData';

  } else if (element instanceof Image) {

    canvasDOM.width = element.width;
    canvasDOM.height = element.height;

    contextDOM.drawImage(element, 0, 0);

    imageData = contextDOM.getImageData(0, 0, element.width, element.height);
    type = 'image';

  }

  return {
    data: { type, imageData },
    buffer: imageData.data.buffer
  };
};

function imageDataToRealImageData({ width, height, data }) {
  const imageData = contextDOM.createImageData(width, height);

  for (let i = 0; i < data.length; i ++) {
    imageData.data[i] = data[i];
  }

  return imageData;
}
