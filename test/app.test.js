// require = require('esm')(module /*, options*/);
import test from 'ava'; 
import {strict as assert} from 'assert'; 
// import { calculateFns } from '../src/app';

test('My test', t => { 
	assert.equal('sabc', 'abc'); 
});

for (var i = 0; i < 3; i++) {
	test('My test count -' + i, t => { 
		assert.equal('abc', 'abc'); 
	});
}


