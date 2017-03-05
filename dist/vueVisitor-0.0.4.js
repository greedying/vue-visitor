(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vueVisitor", [], factory);
	else if(typeof exports === 'object')
		exports["vueVisitor"] = factory();
	else
		root["vueVisitor"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navigator.userAgent;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ua = __webpack_require__(0);

var _ua2 = _interopRequireDefault(_ua);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isAlipay = /alipay/i.test(_ua2.default);
var isBrowser = typeof window !== 'undefined';
var isMobile = /mobile/i.test(_ua2.default);
var isQQ = /qq/i.test(_ua2.default);
var isWechat = /micromessenger/i.test(_ua2.default);
var isWeibo = /weibo/i.test(_ua2.default);

exports.default = {
  isAlipay: isAlipay,
  isBrowser: isBrowser,
  isMobile: isMobile,
  isQQ: isQQ,
  isWechat: isWechat,
  isWeibo: isWeibo
};
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ua = __webpack_require__(0);

var _ua2 = _interopRequireDefault(_ua);

var _browser = __webpack_require__(1);

var _browser2 = _interopRequireDefault(_browser);

var _device = __webpack_require__(4);

var _device2 = _interopRequireDefault(_device);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  ua: _ua2.default,
  browser: _browser2.default,
  device: _device2.default
};
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
	"name": "vue-visitor",
	"version": "0.0.4",
	"description": "a vue plugin of detecting vistor, for example, browser, device and so on",
	"keywords": [
		"vue",
		"vue-plugin",
		"vistor",
		"browser",
		"device"
	],
	"main": "dist/vueVisitor-0.0.4.min.js",
	"scripts": {
		"build": "webpack --env build",
		"dev": "webpack --progress --colors --watch --env dev",
		"test": "mocha --compilers js:babel-core/register --colors ./test/*.spec.js",
		"test:watch": "mocha --compilers js:babel-core/register --colors -w ./test/*.spec.js"
	},
	"devDependencies": {
		"babel-core": "~6.22.1",
		"babel-eslint": "~7.1.1",
		"babel-loader": "~6.2.10",
		"babel-plugin-add-module-exports": "0.1.2",
		"babel-preset-es2015": "6.22.0",
		"chai": "3.4.1",
		"eslint": "^3.14.1",
		"eslint-config-standard": "^6.2.1",
		"eslint-loader": "^1.6.1",
		"eslint-plugin-html": "^2.0.1",
		"eslint-plugin-promise": "^3.4.0",
		"eslint-plugin-standard": "^2.0.1",
		"less": "^2.7.2",
		"less-loader": "^2.2.3",
		"mocha": "2.3.4",
		"vue": "^2.2.1",
		"webpack": "2.2.1",
		"yargs": "6.6.0"
	},
	"repository": {
		"type": "git",
		"url": "https://github.com/greedying/vue-vistor.git"
	},
	"author": "greedying <greedying@163.com>",
	"license": "MIT",
	"bugs": {
		"url": "https://github.com/greedying/vue-vistor/issues"
	},
	"homepage": "https://github.com/greedying/vue-vistor"
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ua = __webpack_require__(0);

var _ua2 = _interopRequireDefault(_ua);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isAndroid = /(Android);?[\s/]+([\d.]+)?/.test(_ua2.default);
var isIpad = /(iPad).*OS\s([\d_]+)/.test(_ua2.default);
var isIpod = /(iPod)(.*OS\s([\d_]+))?/.test(_ua2.default);
var isIphone = !isIpad && /(iPhone\sOS)\s([\d_]+)/.test(_ua2.default);
var isIos = /(iPhone|iPad|iPod|iOS)/i.test(_ua2.default);
var os = isAndroid ? 'android' : isIos ? 'ios' : 'other';

exports.default = {
  os: os,
  isAndroid: isAndroid,
  isIos: isIos,
  isIpad: isIpad,
  isIpod: isIpod,
  isIphone: isIphone
};
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _plugins = __webpack_require__(2);

var _plugins2 = _interopRequireDefault(_plugins);

var _browser = __webpack_require__(1);

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = __webpack_require__(3).version;

var VueVistor = function VueVistor() {};

VueVistor.version = version;
VueVistor.install = function (Vue) {
  var mount = function mount(pluginName, plugin) {
    Vue[pluginName] = plugin;
    Vue.mixin({
      created: function created() {
        this['$' + pluginName] = plugin;
      }
    });
  };

  for (var pluginName in _plugins2.default) {
    mount(pluginName, _plugins2.default[pluginName]);
  }
};

if (_browser2.default.isBrowser && window.Vue) {
  window.Vue.use(VueVistor);
}

exports.default = VueVistor;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=vueVisitor-0.0.4.js.map