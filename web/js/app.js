import {calculateFns} from "../../src/app";

var options= {
	operandA : 2,
	operandB : 4,
	operation : "add",
}
var clientSideRunResult = calculateFns(options);
window.calculatorFunction = calculateFns;
console.log(`client side run script result is ${clientSideRunResult}`);