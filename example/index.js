import { transfer } from 'src/index.js';
import CanvasWorker from './worker.js';

const worker = new CanvasWorker();

worker.addEventListener('message', ({ data }) => {
  const canvas = transfer.decode(data);

  document.body.appendChild(canvas);
});
