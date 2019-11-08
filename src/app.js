// import {add, sub, multiply, divide} from "./arithmetic.mjs";
// console.log(add(1,4));

// var arithmeticFns = require('arithmetic');
var {add, sub, multiply, divide} = require('./arithmetic');


exports.calculateFns =  function (options){
	var result;
	switch (options.operation){
		case "add":
		    result = add(options.operandA, options.operandB);
		    console.log(`result for ${options.operandA} ${options.operation} by ${options.operandB} is ::: ${result}`);
			return result;
			break;
		case "sub":
		    result = sub(options.operandA, options.operandB);
		    console.log(`result for ${options.operandA} ${options.operation} by ${options.operandB} is ::: ${result}`);
			return result;
			break;
		case "multiply":
		    result = multiply(options.operandA, options.operandB);
		    console.log(`result for ${options.operandA} ${options.operation} by ${options.operandB} is ::: ${result}`);
			return result;
			break;
		case "divide":
		    result = divide(options.operandA, options.operandB);
		    console.log(`result for ${options.operandA} ${options.operation} by ${options.operandB} is ::: ${result}`);
			return result;
			break;
	}
}


// var arrFn = () => {
	
// 	console.log("this is arrrow function")
// };

// arrFn();