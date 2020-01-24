
### `Intro`
![GitHub Actions status | publish](https://github.com/anzerr/uint/workflows/publish/badge.svg)

Util to format unsigned int to bases (hex, int4, int5, dec, int8)

#### `Install`
``` bash
npm install --save git+https://github.com/anzerr/uint.git
npm install --save @anzerr/uint
```

### `Example`
``` javascript
const uint = require('uint');
console.log(uint.uint8.toHex([10, 100])); // 0A64
````