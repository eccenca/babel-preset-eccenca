# babel-preset-eccenca

Babel preset for eccenca projects.

- Includes `react`, `es2016-loose` and `stage-0` presets.
- Includes also `babel-plugin-add-module-exports` to get export behaviour like babel 5. 

## Install

```sh
$ npm install --save-dev babel-preset-eccenca
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["eccenca"]
}
```

### Via CLI

```sh
$ babel script.js --presets eccenca
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["eccenca"]
});
```