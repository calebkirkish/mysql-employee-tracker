'use strict';

const inquirer = require('inquirer');
// const logo = require('asciiart-logo');
const prompts = require('./prompts');
const db = require('./db');
const { async } = require('rxjs');
// require('console.table');
const DB = require("./db/index.js")

async function main() {

    const titles = await DB.viewAllCharacters();

    console.log('\n');
    console.table(titles);

};


main();