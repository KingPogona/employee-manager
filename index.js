const inquirer = require('inquirer');
// const cTable = require('console.table');

// const { connection, endConnection } = require('./lib/queries.js');
// const queries = require('./lib/queries.js');
const Prompts = require('./lib/prompts.js');

new Prompts().initializeProgram();