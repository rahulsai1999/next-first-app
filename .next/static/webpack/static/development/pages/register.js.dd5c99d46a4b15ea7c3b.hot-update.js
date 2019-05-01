webpackHotUpdate("static\\development\\pages\\register.js",{

/***/ "./node_modules/ansi-colors/index.js":
/*!*******************************************!*\
  !*** ./node_modules/ansi-colors/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

const colors = { enabled: true, visible: true, styles: {}, keys: {} };

if ('FORCE_COLOR' in process.env) {
  colors.enabled = process.env.FORCE_COLOR !== '0';
}

const ansi = style => {
  style.open = `\u001b[${style.codes[0]}m`;
  style.close = `\u001b[${style.codes[1]}m`;
  style.regex = new RegExp(`\\u001b\\[${style.codes[1]}m`, 'g');
  return style;
};

const wrap = (style, str, nl) => {
  let { open, close, regex } = style;
  str = open + (str.includes(close) ? str.replace(regex, close + open) : str) + close;
  // see https://github.com/chalk/chalk/pull/92, thanks to the
  // chalk contributors for this fix. However, we've confirmed that
  // this issue is also present in Windows terminals
  return nl ? str.replace(/\r?\n/g, `${close}$&${open}`) : str;
};

const style = (input, stack) => {
  if (input === '' || input == null) return '';
  if (colors.enabled === false) return input;
  if (colors.visible === false) return '';
  let str = '' + input;
  let nl = str.includes('\n');
  let n = stack.length;
  while (n-- > 0) str = wrap(colors.styles[stack[n]], str, nl);
  return str;
};

const define = (name, codes, type) => {
  colors.styles[name] = ansi({ name, codes });
  let t = colors.keys[type] || (colors.keys[type] = []);
  t.push(name);

  Reflect.defineProperty(colors, name, {
    get() {
      let color = input => style(input, color.stack);
      Reflect.setPrototypeOf(color, colors);
      color.stack = this.stack ? this.stack.concat(name) : [name];
      return color;
    }
  });
};

define('reset', [0, 0], 'modifier');
define('bold', [1, 22], 'modifier');
define('dim', [2, 22], 'modifier');
define('italic', [3, 23], 'modifier');
define('underline', [4, 24], 'modifier');
define('inverse', [7, 27], 'modifier');
define('hidden', [8, 28], 'modifier');
define('strikethrough', [9, 29], 'modifier');

define('black', [30, 39], 'color');
define('red', [31, 39], 'color');
define('green', [32, 39], 'color');
define('yellow', [33, 39], 'color');
define('blue', [34, 39], 'color');
define('magenta', [35, 39], 'color');
define('cyan', [36, 39], 'color');
define('white', [37, 39], 'color');
define('gray', [90, 39], 'color');
define('grey', [90, 39], 'color');

define('bgBlack', [40, 49], 'bg');
define('bgRed', [41, 49], 'bg');
define('bgGreen', [42, 49], 'bg');
define('bgYellow', [43, 49], 'bg');
define('bgBlue', [44, 49], 'bg');
define('bgMagenta', [45, 49], 'bg');
define('bgCyan', [46, 49], 'bg');
define('bgWhite', [47, 49], 'bg');

define('blackBright', [90, 39], 'bright');
define('redBright', [91, 39], 'bright');
define('greenBright', [92, 39], 'bright');
define('yellowBright', [93, 39], 'bright');
define('blueBright', [94, 39], 'bright');
define('magentaBright', [95, 39], 'bright');
define('cyanBright', [96, 39], 'bright');
define('whiteBright', [97, 39], 'bright');

define('bgBlackBright', [100, 49], 'bgBright');
define('bgRedBright', [101, 49], 'bgBright');
define('bgGreenBright', [102, 49], 'bgBright');
define('bgYellowBright', [103, 49], 'bgBright');
define('bgBlueBright', [104, 49], 'bgBright');
define('bgMagentaBright', [105, 49], 'bgBright');
define('bgCyanBright', [106, 49], 'bgBright');
define('bgWhiteBright', [107, 49], 'bgBright');

/* eslint-disable no-control-regex */
// this is a modified, optimized version of
// https://github.com/chalk/ansi-regex (MIT License)
const re = colors.ansiRegex = /[\u001b\u009b][[\]#;?()]*(?:(?:(?:[^\W_]*;?[^\W_]*)\u0007)|(?:(?:[0-9]{1,4}(;[0-9]{0,4})*)?[~0-9=<>cf-nqrtyA-PRZ]))/g;

colors.hasColor = colors.hasAnsi = str => {
  re.lastIndex = 0;
  return !!str && typeof str === 'string' && re.test(str);
};

colors.unstyle = str => {
  re.lastIndex = 0;
  return typeof str === 'string' ? str.replace(re, '') : str;
};

colors.none = colors.clear = colors.noop = str => str; // no-op, for programmatic usage
colors.stripColor = colors.unstyle;
colors.symbols = __webpack_require__(/*! ./symbols */ "./node_modules/ansi-colors/symbols.js");
colors.define = define;
module.exports = colors;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/ansi-colors/symbols.js":
/*!*********************************************!*\
  !*** ./node_modules/ansi-colors/symbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

const isWindows = process.platform === 'win32';
const isLinux = process.platform === 'linux';

const windows = {
  bullet: '•',
  check: '√',
  cross: '×',
  ellipsis: '...',
  heart: '❤',
  info: 'i',
  line: '─',
  middot: '·',
  minus: '－',
  plus: '＋',
  question: '?',
  questionSmall: '﹖',
  pointer: '>',
  pointerSmall: '»',
  warning: '‼'
};

const other = {
  ballotCross: '✘',
  bullet: '•',
  check: '✔',
  cross: '✖',
  ellipsis: '…',
  heart: '❤',
  info: 'ℹ',
  line: '─',
  middot: '·',
  minus: '－',
  plus: '＋',
  question: '?',
  questionFull: '？',
  questionSmall: '﹖',
  pointer: isLinux ? '▸' : '❯',
  pointerSmall: isLinux ? '‣' : '›',
  warning: '⚠'
};

module.exports = isWindows ? windows : other;
Reflect.defineProperty(module.exports, 'windows', { enumerable: false, value: windows });
Reflect.defineProperty(module.exports, 'other', { enumerable: false, value: other });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ansi-colors */ "./node_modules/ansi-colors/index.js");
/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ansi_colors__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "container",
    style: {
      marginTop: 50,
      border: ansi_colors__WEBPACK_IMPORTED_MODULE_2__["grey"]
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      textAlign: "center"
    }
  }, "Sign-Up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "/register",
    method: "POST"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    for: "exampleInputEmail1"
  }, "Email address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "username",
    type: "email",
    class: "form-control",
    "aria-describedby": "emailHelp",
    placeholder: "Enter email"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    id: "emailHelp",
    class: "form-text text-muted"
  }, "We'll never share your email with anyone else.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    for: "exampleInputPassword1"
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "password",
    type: "password",
    class: "form-control",
    placeholder: "Password"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "form-group form-check"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    class: "form-check-input",
    id: "exampleCheck1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    class: "form-check-label",
    for: "exampleCheck1"
  }, "Check me out")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    class: "btn btn-primary"
  }, "Register"))));
});

/***/ })

})
//# sourceMappingURL=register.js.dd5c99d46a4b15ea7c3b.hot-update.js.map