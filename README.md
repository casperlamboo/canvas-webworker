# Canvas WebWorker
Pure JavaScript Canvas implimentation that can be used in WebWorkers

WebWorkers are great when long scripts has to be excuted while the main program has to keep running (cannot be blocked). When a complex image has to be generated, for instance a large texture for a game, the generation can be blocking for the game. A solution would be to generate the texture in a WebWorker. Due to the fact that the HTMLCanvasElement cannot be accecssed in the WebWorker this is fairly difficult. Using this pure JavaScript a Canvas polyfill can be used. Drawing is not hardware accerated so it will be slower compaired to a regular canvas but the programm will remain non-blocking.

# Instalation
Install the library

Using JSPM (ECMAScript / ES6 Module)
```
jspm install github:casperlamboo/canvas-webworker
```

Using NPM (CommonJS module)
```
npm install canvas-webworker
```

# Usage
Include the library.

Using JSPM (ECMAScript / ES6 Module)
```javascript
import { Canvas, Image } from 'casperlamboo/canvas-webworker';
```

Using NPM (CommonJS module)
```javascript
var canvasWebWorker = require('canvas-webworker');

var Canvas = canvasWebWorker.Canvas;
var Image = canvasWebWorker.Image;
```

When the library is included `Canvas` can be used.

```javascript
var canvas = new Canvas(720, 480);
var context = canvas.getContext('2d');
```

# Progress
The library isn't finished yet. This is my progress so far. I'm planning to add unit tests aswell.

**DONE**
  - CanvasImageSource
    - getContext
  - Image
    - src
    - onload
  - CanvasRenderingContext2D
    - globalAlpha
    - drawImage
    - createPattern
    - lineCap
    - lineWidth
    - lineJoin
    - miterLimit
    - beginPath
    - closePath
    - moveTo
    - lineTo
    - rect
    - fill
    - stroke
    - rotate
    - scale
    - translate
    - transform
    - createImageData
    - getImageData
    - putImageData
    - save
    - restore
    - canvas
    - fillStyle
      - pattern
      - color
    - strokeStyle
      - pattern
      - color
    - globalCompositeOperation
      - source-over
      - source-in
      - source-out
      - source-atop
      - destination-over
      - destination-in
      - destination-out
      - destination-atop
      - lighter
      - copy
      - xor
  
**TODO**
  - CanvasImageSource
    - toDataURL
    - toBlob
  - CanvasRenderingContext2D
    - arc
    - arcTo
    - bezierCurveTo
    - quadaticCurveTo
    - fillText
    - strokeText
    - measureText
    - getLineDash
    - setLineDash
    - lineDashOffset
    - font
    - textAlign
    - textBaseline
    - direction
    - clip
    - strokeStyle
      - gradient
    - createLinearGradient
    - createRadialGradient
    - shadowBlur
    - shadowColor
    - shadowOffsetX
    - shadowOffsetY
    - setTransform
    - resetTransform
    - globalCompositeOperation
      - multiply
      - screen
      - overlay
      - darken
      - lighten
      - color-dodge
      - color-burn
      - hard-light
      - soft-light
      - difference
      - exclusion
      - hue
      - saturation
      - color
      - luminosity
