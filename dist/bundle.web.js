/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.mjs":
/*!*********************!*\
  !*** ./src/app.mjs ***!
  \*********************/
/*! exports provided: calculateFns */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateFns\", function() { return calculateFns; });\n/* harmony import */ var _arithmetic_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arithmetic.mjs */ \"./src/arithmetic.mjs\");\n\r\nconsole.log(Object(_arithmetic_mjs__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(1,4));\r\n\r\n\r\nfunction calculateFns(options){\r\n\tvar result;\r\n\tswitch (options.operation){\r\n\t\tcase \"add\":\r\n\t\t    result = Object(_arithmetic_mjs__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(options.operandA, options.operandB);\r\n\t\t    console.log(`result for ${options.operandA} ${options.operation} by ${options.operandB} is ::: ${result}`);\r\n\t\t\treturn result;\r\n\t\t\tbreak;\r\n\t\tcase \"sub\":\r\n\t\t    result = Object(_arithmetic_mjs__WEBPACK_IMPORTED_MODULE_0__[\"sub\"])(options.operandA, options.operandB);\r\n\t\t    console.log(`result for ${options.operandA} ${options.operation} by ${options.operandB} is ::: ${result}`);\r\n\t\t\treturn result;\r\n\t\t\tbreak;\r\n\t\tcase \"multiply\":\r\n\t\t    result = Object(_arithmetic_mjs__WEBPACK_IMPORTED_MODULE_0__[\"multiply\"])(options.operandA, options.operandB);\r\n\t\t    console.log(`result for ${options.operandA} ${options.operation} by ${options.operandB} is ::: ${result}`);\r\n\t\t\treturn result;\r\n\t\t\tbreak;\r\n\t\tcase \"divide\":\r\n\t\t    result = Object(_arithmetic_mjs__WEBPACK_IMPORTED_MODULE_0__[\"divide\"])(options.operandA, options.operandB);\r\n\t\t    console.log(`result for ${options.operandA} ${options.operation} by ${options.operandB} is ::: ${result}`);\r\n\t\t\treturn result;\r\n\t\t\tbreak;\r\n\t}\r\n}\r\n\r\n\r\nvar arrFn = () => {\r\n\t\r\n\tconsole.log(\"this is arrrow function\")\r\n};\r\n\r\narrFn();\n\n//# sourceURL=webpack:///./src/app.mjs?");

/***/ }),

/***/ "./src/arithmetic.mjs":
/*!****************************!*\
  !*** ./src/arithmetic.mjs ***!
  \****************************/
/*! exports provided: add, sub, multiply, divide */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multiply\", function() { return multiply; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"divide\", function() { return divide; });\nfunction add(a, b){\r\n\treturn a+b;\r\n}\r\n\r\nfunction sub(a, b){\r\n\treturn a - b;\r\n}\r\n\r\nfunction multiply(a, b){\r\n\treturn a * b;\r\n}\r\n\r\nfunction divide(a, b){\r\n\treturn a / b;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/arithmetic.mjs?");

/***/ }),

/***/ "./web/js/app.js":
/*!***********************!*\
  !*** ./web/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/app */ \"./src/app.mjs\");\n\r\n\r\nvar options= {\r\n\toperandA : 2,\r\n\toperandB : 4,\r\n\toperation : \"add\",\r\n}\r\nvar clientSideRunResult = Object(_src_app__WEBPACK_IMPORTED_MODULE_0__[\"calculateFns\"])(options);\r\nwindow.calculatorFunction = _src_app__WEBPACK_IMPORTED_MODULE_0__[\"calculateFns\"];\r\nconsole.log(`client side run script result is ${clientSideRunResult}`);\n\n//# sourceURL=webpack:///./web/js/app.js?");

/***/ })

/******/ });