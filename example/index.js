import { transfer } from '/src/index.js';
import Worker from './WorkerShim.js';

const worker = new Worker('./worker.js');

worker.addEventListener('message', ({ data }) => {
  const canvas = transfer.decode(data);

  document.body.appendChild(canvas);
});
