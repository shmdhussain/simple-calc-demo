// import arg from 'arg';
// import inquirer from 'inquirer';
// import { calculateFns } from '../src/app';

var arg = require("arg");
var inquirer = require("inquirer");
var calculateFns = require("../src/app").calculateFns;

function parseArgumentsIntoOptions(rawArgs) {
 const args = arg(
   {
     '--operandA': Number,
     '--operandB': Number,
     '--operation': String,
     '-a': '--operandA',
     '-b': '--operandB',
     '-o': '--operation',
   },
   {
     argv: rawArgs.slice(2),
   }
 );
 return {
   operandA: args['--operandA'] || 0,
   operandB: args['--operandB'] || 0,
   operation: args['--operation'] || null,
 };
}





async function promptForMissingOptions(options) {


 const questions = [];
 if (!options.operandA) {
   questions.push({
     type: 'number',
     name: 'operandA',
     message: 'Please Enter Operand A',
     // choices: ['JavaScript', 'HTML5BoilerPlate'],
     default: 0,
   });
 }

 if (!options.operandB) {
   questions.push({
      type: 'number',
      name: 'operandB',
      message: 'Please Enter Operand B',
      default: 0,
   });
 }

 if (!options.operation) {
   questions.push({
      type: 'input',
      name: 'operation',
      message: 'Please Enter Operation',
      default: null,
   });
 }

 const answers = await inquirer.prompt(questions);
 return {
   ...options,
   operandA: options.operandA || answers.operandA,
   operandB: options.operandB || answers.operandB,
   operation: options.operation || answers.operation,
 };
}

export async function cli(args) {
 let options = parseArgumentsIntoOptions(args);
 options = await promptForMissingOptions(options);
 console.log(options);
 await calculateFns(options);
}
