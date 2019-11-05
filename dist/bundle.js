"use strict";

require("core-js/modules/es6.string.sub");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateFns = calculateFns;

var _arithmetic = require("./arithmetic.mjs");

console.log((0, _arithmetic.add)(1, 4));

function calculateFns(options) {
  var result;

  switch (options.operation) {
    case "add":
      result = (0, _arithmetic.add)(options.operandA, options.operandB);
      console.log("result for ".concat(options.operandA, " ").concat(options.operation, " by ").concat(options.operandB, " is ::: ").concat(result));
      return result;
      break;

    case "sub":
      result = (0, _arithmetic.sub)(options.operandA, options.operandB);
      console.log("result for ".concat(options.operandA, " ").concat(options.operation, " by ").concat(options.operandB, " is ::: ").concat(result));
      return result;
      break;

    case "multiply":
      result = (0, _arithmetic.multiply)(options.operandA, options.operandB);
      console.log("result for ".concat(options.operandA, " ").concat(options.operation, " by ").concat(options.operandB, " is ::: ").concat(result));
      return result;
      break;

    case "divide":
      result = (0, _arithmetic.divide)(options.operandA, options.operandB);
      console.log("result for ".concat(options.operandA, " ").concat(options.operation, " by ").concat(options.operandB, " is ::: ").concat(result));
      return result;
      break;
  }
}

var arrFn = function arrFn() {
  console.log("this is arrrow function");
};

arrFn();
"use strict";

require("core-js/modules/es6.string.sub");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.sub = sub;
exports.multiply = multiply;
exports.divide = divide;

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
