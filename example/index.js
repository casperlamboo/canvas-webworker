import { transfer } from '/src/index.js';
import Worker from 'worker/WorkerShim';
import workerSrc from './worker.js!worker';

const worker = new Worker(workerSrc);

worker.addEventListener('message', ({ data }) => {
  const canvas = transfer.decode(data);

  document.body.appendChild(canvas);
});
