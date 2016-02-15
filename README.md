# split-space [![NPM version](https://img.shields.io/npm/v/split-space.svg)](https://npmjs.com/package/split-space) [![NPM downloads](https://img.shields.io/npm/dm/split-space.svg)](https://npmjs.com/package/split-space) [![Build Status](https://img.shields.io/circleci/project/egoist/split-space/master.svg)](https://circleci.com/gh/egoist/split-space)

> Split a string by space and ignore space in quoted string.

## Install

```
$ npm install --save split-space
```

## Usage

```js
const split = require('split-space')

split('git commit -m "first commit"')
//=> ['git', 'commit', '-m', '\"first commit\"']
```

## Related

- [StackOverflow](http://stackoverflow.com/questions/16261635/javascript-split-string-by-space-but-ignore-space-in-quotes-notice-not-to-spli) : The regex which is used by this library.

## License

MIT © [EGOIST](https://github.com/egoist)
