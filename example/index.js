import Canvas from '/src/HTMLCanvasElement.js';
import Image from '/src/Image.js';

const canvas = new Canvas(500, 500);
const context = canvas.getContext('2d');

const realCanvas = document.createElement('canvas');
realCanvas.width = 500;
realCanvas.height = 500;
document.body.appendChild(realCanvas);
const realContext = realCanvas.getContext('2d');

const pattern = new Image();
pattern.onload = function() {

  const gradient = new Image();
  gradient.onload = function() {
    context.drawImage(pattern, 0, 0);
    context.globalCompositeOperation = 'xor';
    context.drawImage(gradient, 0, 0);

    context.rect(100, 100, 100, 100);

    context.fill();

    console.log(canvas);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    const realImageData = realContext.createImageData(canvas.width, canvas.height);

    for (let i = 0; i < imageData.data.length; i ++) {
      realImageData.data[i] = imageData.data[i];
    }

    realContext.putImageData(realImageData, 0, 0);
  };
  gradient.src = './img/gradient.png';
};
pattern.src = './img/pattern.png';
