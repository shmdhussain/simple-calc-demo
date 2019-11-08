// require = require('esm')(module /*, options*/);
import test from 'ava'; 
import {strict as assert} from 'assert'; 
import { calculateFns } from '../src/app';

test('arithmeticJS Unit Test - addition', t => { 
	var options = {
		operandA: 3,
		operandB: 9,
		operation: "add"
	}
	assert.equal(calculateFns(options), 12); 
});

test('arithmeticJS Unit Test - subtraction', t => { 
	var options = {
		operandA: 3,
		operandB: 9,
		operation: "sub"
	}
	assert.equal(calculateFns(options), -6); 
});

test('arithmeticJS Unit Test - multiply', t => { 
	var options = {
		operandA: 3,
		operandB: 9,
		operation: "multiply"
	}
	assert.equal(calculateFns(options), 27); 
});

test('arithmeticJS Unit Test - divide', t => { 
	var options = {
		operandA: 18,
		operandB: 9,
		operation: "divide"
	}
	assert.equal(calculateFns(options), 2); 
});

const fn = () => {
	throw new Error('Parameter should be greater than 20');
};

test('throws', t => {
	const error = t.throws(() => {
		fn();
	}, "Parameter should be greater than 20");

	t.is(error.message, 'Parameter should be greater than 20');
});




