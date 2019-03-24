import { Canvas, Image, transfer } from 'src/index.js';

const canvas = new Canvas(300, 300);
const context = canvas.getContext('2d');

context.fillRect(100, 100, 100, 100);

const { data, buffer } = transfer.encode(canvas);

self.postMessage(data, [buffer]);
